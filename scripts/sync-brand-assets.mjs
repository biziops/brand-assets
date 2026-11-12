#!/usr/bin/env node

import { DeleteObjectsCommand, ListObjectsV2Command, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import COS from 'cos-nodejs-sdk-v5';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import mime from 'mime-types';

const __filename = fileURLToPath(import.meta.url);
const root = path.dirname(path.dirname(__filename));

dotenv.config({ path: path.join(root, '.env') });
dotenv.config({ path: path.join(root, '../re8ch/.env') });
dotenv.config();

const INCLUDE = ['README.md', 'overview.png', 'SVG', 'PNG', 'ANIME', 'PRODUCTS', 'ORGS', 'UI', 'src', 'dist', 'demo', 'anycam', 're8ch-registry', 'company'];
const SKIP_NAMES = new Set(['.DS_Store']);
const r2CorsConfigPath = path.join(root, 'scripts', 'r2-cors.json');
const cosCorsRules = [{
  AllowedOrigin: ['*'],
  AllowedMethod: ['GET', 'HEAD'],
  AllowedHeader: ['*'],
  ExposeHeader: ['ETag', 'Content-Length', 'Content-Type', 'Cache-Control'],
  MaxAgeSeconds: 86400,
}];

const target = process.argv.find((arg) => arg.startsWith('--target='))?.split('=')[1] || 'all';
const dryRun = process.argv.includes('--dry-run');

const r2Bucket = process.env.R2_BUCKET || 'brand-assets';
const r2AccountId = process.env.R2_ACCOUNT_ID || '6317b796fb47e67fadec3bc9a5ef0e8e';
const cosBucket = process.env.COS_BUCKET || 'brandassets-1301339749';
const cosRegion = process.env.COS_REGION || 'ap-guangzhou';

function walk(entry, files = []) {
  const absolute = path.join(root, entry);
  if (!fs.existsSync(absolute)) return files;
  const stat = fs.statSync(absolute);

  if (stat.isDirectory()) {
    for (const child of fs.readdirSync(absolute)) {
      if (SKIP_NAMES.has(child)) continue;
      walk(path.join(entry, child), files);
    }
    return files;
  }

  if (stat.isFile() && !SKIP_NAMES.has(path.basename(entry))) {
    files.push(entry.split(path.sep).join('/'));
  }

  return files;
}

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function md5(filePath) {
  return crypto.createHash('md5').update(fs.readFileSync(filePath)).digest('hex');
}

function contentType(key) {
  return mime.lookup(key) || 'application/octet-stream';
}

function cacheControl(key) {
  if (/\.(html?|json|webmanifest|xml|txt|md)$/i.test(key)) return 'no-cache';
  if (/^(src|dist(?:\/current)?)\/re8ch-(navigator|footer)\.(js|css)$/i.test(key)) return 'public, max-age=0, must-revalidate';
  if (/^UI\/re8ch-product-system\/v1\/re8ch-product-system\.(js|css)$/i.test(key)) return 'public, max-age=0, must-revalidate';
  if (/^(SVG|PNG)\/logo\.(svg|png)$/i.test(key)) return 'public, max-age=0, must-revalidate';
  if (/^PRODUCTS\/[^/]+\/(SVG|PNG)\/icon(?:-[^/]+)?\.(svg|png)$/i.test(key)) return 'public, max-age=0, must-revalidate';
  return 'public, max-age=31536000, immutable';
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getAssetFiles() {
  const files = INCLUDE.flatMap((entry) => walk(entry)).sort();
  const manifest = {
    generatedAt: new Date().toISOString(),
    globalBaseUrl: process.env.BRAND_ASSETS_GLOBAL_BASE_URL || 'https://brand-assets.re8ch.com',
    chinaBaseUrl: process.env.BRAND_ASSETS_CHINA_BASE_URL || 'https://zh-brand-assets.re8ch.com',
    files: files.map((key) => {
      const filePath = path.join(root, key);
      const stat = fs.statSync(filePath);
      return {
        key,
        bytes: stat.size,
        sha256: sha256(filePath),
        contentType: contentType(key),
      };
    }),
  };

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'brand-assets-sync-'));
  const manifestPath = path.join(tmpDir, 'manifest.json');
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  return [
    ...files.map((key) => ({
      key,
      filePath: path.join(root, key),
      md5: md5(path.join(root, key)),
      contentType: contentType(key),
      cacheControl: cacheControl(key),
    })),
    {
      key: 'manifest.json',
      filePath: manifestPath,
      md5: md5(manifestPath),
      contentType: 'application/json; charset=utf-8',
      cacheControl: 'no-cache',
    },
  ];
}

async function listR2(client) {
  const remote = new Map();
  let ContinuationToken;
  do {
    const data = await client.send(new ListObjectsV2Command({
      Bucket: r2Bucket,
      ContinuationToken,
    }));
    for (const item of data.Contents || []) {
      if (item.Key) remote.set(item.Key, String(item.ETag || '').replaceAll('"', ''));
    }
    ContinuationToken = data.NextContinuationToken;
  } while (ContinuationToken);
  return remote;
}

async function syncR2(files) {
  const hasS3Keys = process.env.R2_ACCESS_KEY_ID && process.env.R2_SECRET_ACCESS_KEY;

  if (!hasS3Keys) {
    console.log('R2 S3 keys not found; using wrangler upload fallback without remote deletion.');
    const wranglerEnv = { ...process.env };
    if (process.env.R2_CLOUDFLARE_API_TOKEN) {
      wranglerEnv.CLOUDFLARE_API_TOKEN = process.env.R2_CLOUDFLARE_API_TOKEN;
    } else {
      delete wranglerEnv.CLOUDFLARE_API_TOKEN;
    }

    for (const file of files) {
      console.log(`${dryRun ? 'Would upload' : 'Uploading'} R2 ${file.key}`);
      if (dryRun) continue;
      const args = [
        'r2',
        'object',
        'put',
        `${r2Bucket}/${file.key}`,
        '--remote',
        '--file',
        file.filePath,
        '--content-type',
        file.contentType,
        '--cache-control',
        file.cacheControl,
        '--force',
      ];

      let result;
      for (let attempt = 1; attempt <= 3; attempt += 1) {
        result = spawnSync('wrangler', args, { stdio: 'inherit', env: wranglerEnv });
        if (result.status === 0) break;
        if (result.error) console.warn(result.error.message);
        if (attempt < 3) {
          console.warn(`wrangler failed for ${file.key}; retrying (${attempt + 1}/3).`);
          await wait(attempt * 2000);
        }
      }

      if (result.status !== 0) throw new Error(`wrangler failed for ${file.key}`);
    }
    console.log(`${dryRun ? 'Would set' : 'Setting'} R2 CORS for ${r2Bucket}`);
    if (!dryRun) {
      const corsResult = spawnSync('wrangler', ['r2', 'bucket', 'cors', 'set', r2Bucket, '--file', r2CorsConfigPath, '--force'], {
        stdio: 'inherit',
        env: wranglerEnv,
      });
      if (corsResult.status !== 0) throw new Error(`wrangler failed to set R2 CORS for ${r2Bucket}`);
    }
    return;
  }

  const client = new S3Client({
    region: 'auto',
    endpoint: `https://${r2AccountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
  });

  const remote = await listR2(client);
  const localKeys = new Set(files.map((file) => file.key));
  const stale = [...remote.keys()].filter((key) => !localKeys.has(key));

  for (const file of files) {
    if (remote.get(file.key) === file.md5) continue;
    console.log(`${dryRun ? 'Would upload' : 'Uploading'} R2 ${file.key}`);
    if (dryRun) continue;
    await client.send(new PutObjectCommand({
      Bucket: r2Bucket,
      Key: file.key,
      Body: fs.createReadStream(file.filePath),
      ContentType: file.contentType,
      CacheControl: file.cacheControl,
    }));
  }

  for (let i = 0; i < stale.length; i += 1000) {
    const batch = stale.slice(i, i + 1000);
    console.log(`${dryRun ? 'Would delete' : 'Deleting'} ${batch.length} stale R2 objects`);
    if (dryRun || batch.length === 0) continue;
    await client.send(new DeleteObjectsCommand({
      Bucket: r2Bucket,
      Delete: { Objects: batch.map((Key) => ({ Key })) },
    }));
  }

  // S3 credentials can upload objects but cannot administer bucket CORS.
  // Keep the existing CORS policy and continue to COS when the separate
  // Cloudflare API token is not configured.
  if (!process.env.R2_CLOUDFLARE_API_TOKEN && !process.env.CLOUDFLARE_API_TOKEN) {
    console.warn(`Skipping R2 CORS update for ${r2Bucket}: no Cloudflare API token configured.`);
    return;
  }
  console.log(`${dryRun ? 'Would set' : 'Setting'} R2 CORS for ${r2Bucket}`);
  if (!dryRun) {
    const wranglerEnv = { ...process.env };
    if (process.env.R2_CLOUDFLARE_API_TOKEN) {
      wranglerEnv.CLOUDFLARE_API_TOKEN = process.env.R2_CLOUDFLARE_API_TOKEN;
    }
    const corsResult = spawnSync('wrangler', ['r2', 'bucket', 'cors', 'set', r2Bucket, '--file', r2CorsConfigPath, '--force'], {
      stdio: 'inherit',
      env: wranglerEnv,
    });
    if (corsResult.status !== 0) throw new Error(`wrangler failed to set R2 CORS for ${r2Bucket}`);
  }
}

function cosCall(cos, method, options) {
  return new Promise((resolve, reject) => {
    cos[method](options, (error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}

async function listCOS(cos) {
  const remote = new Map();
  let Marker = '';
  do {
    const data = await cosCall(cos, 'getBucket', {
      Bucket: cosBucket,
      Region: cosRegion,
      Marker,
      MaxKeys: 1000,
    });
    for (const item of data.Contents || []) {
      remote.set(item.Key, String(item.ETag || '').replaceAll('"', ''));
    }
    Marker = data.NextMarker || '';
  } while (Marker);
  return remote;
}

async function ensureCOSBucket(cos) {
  try {
    await cosCall(cos, 'headBucket', { Bucket: cosBucket, Region: cosRegion });
  } catch (error) {
    if (error && !['NoSuchBucket', 'NotFound'].includes(error.code) && error.statusCode !== 404) throw error;
    console.log(`Creating COS bucket ${cosBucket} (${cosRegion})`);
    if (!dryRun) {
      await cosCall(cos, 'putBucket', { Bucket: cosBucket, Region: cosRegion, ACL: 'public-read' });
    }
  }

  if (!dryRun) {
    await cosCall(cos, 'putBucketAcl', { Bucket: cosBucket, Region: cosRegion, ACL: 'public-read' });
    await cosCall(cos, 'putBucketCors', {
      Bucket: cosBucket,
      Region: cosRegion,
      CORSRules: cosCorsRules,
    });
  }
}

async function syncCOS(files) {
  if (!process.env.COS_SECRET_ID || !process.env.COS_SECRET_KEY) {
    throw new Error('COS_SECRET_ID and COS_SECRET_KEY are required for Tencent COS sync.');
  }

  const cos = new COS({
    SecretId: process.env.COS_SECRET_ID,
    SecretKey: process.env.COS_SECRET_KEY,
  });

  await ensureCOSBucket(cos);
  const remote = await listCOS(cos);
  const localKeys = new Set(files.map((file) => file.key));
  const stale = [...remote.keys()].filter((key) => !localKeys.has(key));

  for (const file of files) {
    if (remote.get(file.key) === file.md5) continue;
    console.log(`${dryRun ? 'Would upload' : 'Uploading'} COS ${file.key}`);
    if (dryRun) continue;
    await cosCall(cos, 'putObject', {
      Bucket: cosBucket,
      Region: cosRegion,
      Key: file.key,
      Body: fs.readFileSync(file.filePath),
      ContentType: file.contentType,
      CacheControl: file.cacheControl,
    });
  }

  for (let i = 0; i < stale.length; i += 1000) {
    const batch = stale.slice(i, i + 1000);
    console.log(`${dryRun ? 'Would delete' : 'Deleting'} ${batch.length} stale COS objects`);
    if (dryRun || batch.length === 0) continue;
    await cosCall(cos, 'deleteMultipleObject', {
      Bucket: cosBucket,
      Region: cosRegion,
      Objects: batch.map((Key) => ({ Key })),
    });
  }
}

async function main() {
  const files = getAssetFiles();
  console.log(`Prepared ${files.length} brand asset objects.`);

  if (target === 'r2' || target === 'all') await syncR2(files);
  if (target === 'cos' || target === 'all') await syncCOS(files);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
