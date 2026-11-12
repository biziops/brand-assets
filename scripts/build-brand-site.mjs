#!/usr/bin/env node
// Builds brand-site/inventory.json from the asset folders in this repository,
// so the brand.re8ch.com showcase lists exactly what the CDN serves.
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'brand-site', 'inventory.json');

// Display metadata the folders cannot express. Colors and hosts mirror the
// product rail in src/re8ch-footer.js.
const PRODUCT_META = {
  compocv: { id: 'compocv', name: 'CompoCV', zh: '简历制作', en: 'CV builder', color: '#2563eb', href: 'https://compocv.re8ch.com' },
  'lizhang-ledger': { id: 'ledger', name: 'Ledger', zh: '理账 · 账本', en: 'Bookkeeping', color: '#2563eb', href: 'https://ledger.re8ch.com' },
  anycam: { id: 'anycam', name: 'Anycam', zh: '任意相机', en: 'Camera', color: '#16a34a', href: 'https://anycam.re8ch.com' },
  anysiteonearth: { id: 'anysite', name: 'AnySite', zh: '地点', en: 'Places on Earth', color: '#14b8c4', href: 'https://anysiteonearth.re8ch.com' },
  phonaid: { id: 'phonaid', name: 'Phonaid', zh: '万能接线助手', en: 'Call assistant', color: '#8b5cf6', href: 'https://phonaid.com' },
  aesthete: { id: 'aesthete', name: 'Aesthete', zh: '妆效模拟', en: 'Makeup simulation', color: '#d6a23e', href: 'https://aesthete.re8ch.com' },
  registry: { id: 'registry-image', name: 'Registry Image', zh: '镜像仓库', en: 'Image registry', color: '#0a7fbe', href: 'https://image.re8ch.com' },
  cluster: { id: 'cluster', name: 'Cluster', zh: '集群', en: 'Cluster', color: '#00b559', href: 'https://cluster.re8ch.com' },
  observable: { id: 'observable', name: 'Observable', zh: '可观测', en: 'Observability', color: '#f81018', href: 'https://observable.re8ch.com' },
  'user-hub': { id: 'user-hub', name: 'User Hub', zh: '账号中心', en: 'Account hub', color: '#086a9f', href: 'https://auth.re8ch.com' },
};

const PRODUCT_ORDER = ['compocv', 'lizhang-ledger', 'anycam', 'anysiteonearth', 'phonaid', 'aesthete', 'registry', 'cluster', 'observable', 'user-hub'];

async function list(dir, filter = () => true) {
  try {
    const names = await readdir(path.join(root, dir));
    return names.filter(filter).sort();
  } catch {
    return [];
  }
}

async function isDir(rel) {
  try {
    return (await stat(path.join(root, rel))).isDirectory();
  } catch {
    return false;
  }
}

const variantName = (file) => file.replace(/\.(svg|png)$/i, '');

async function products() {
  const folders = (await list('PRODUCTS')).filter((name) => !name.startsWith('.'));
  const known = PRODUCT_ORDER.filter((name) => folders.includes(name));
  const rest = folders.filter((name) => !known.includes(name));
  const rows = [];
  for (const folder of [...known, ...rest]) {
    if (!(await isDir(`PRODUCTS/${folder}`))) continue;
    const svg = await list(`PRODUCTS/${folder}/SVG`, (f) => f.endsWith('.svg'));
    const png = await list(`PRODUCTS/${folder}/PNG`, (f) => f.endsWith('.png'));
    const variants = [...new Set([...svg, ...png].map(variantName))];
    const meta = PRODUCT_META[folder] || { id: folder, name: folder, zh: folder, en: folder, color: '#64748b', href: '' };
    rows.push({
      folder,
      ...meta,
      variants: variants.map((name) => ({
        name,
        svg: svg.includes(`${name}.svg`) ? `PRODUCTS/${folder}/SVG/${name}.svg` : null,
        png: png.includes(`${name}.png`) ? `PRODUCTS/${folder}/PNG/${name}.png` : null,
      })),
    });
  }
  return rows;
}

async function logos() {
  const svg = await list('SVG', (f) => /^logo.*\.svg$/.test(f));
  const png = await list('PNG', (f) => /^logo.*\.png$/.test(f));
  const order = ['logo', 'logo-no-edge', 'logo-gray', 'logo-no-edge-gray', 'logo-invert', 'logo-no-edge-invert'];
  const names = [...new Set([...svg, ...png].map(variantName))]
    .sort((a, b) => (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99));
  return names.map((name) => ({
    name,
    svg: svg.includes(`${name}.svg`) ? `SVG/${name}.svg` : null,
    png: png.includes(`${name}.png`) ? `PNG/${name}.png` : null,
  }));
}

async function orgs() {
  const rows = [];
  for (const folder of await list('ORGS')) {
    if (!(await isDir(`ORGS/${folder}`))) continue;
    const files = await list(`ORGS/${folder}`);
    if (!files.includes('avatar.svg')) continue;
    rows.push({
      name: folder,
      svg: `ORGS/${folder}/avatar.svg`,
      png: files.includes('avatar.png') ? `ORGS/${folder}/avatar.png` : null,
    });
  }
  return rows;
}

async function iconSets() {
  const ledger = await list('SVG/ledger-ui', (f) => f.endsWith('.svg'));
  return [{
    id: 'ledger-ui',
    name: 'Ledger UI',
    icons: ledger.map((file) => ({ name: variantName(file).replace(/^ledger-/, ''), svg: `SVG/ledger-ui/${file}` })),
  }];
}

const inventory = {
  generatedFrom: 'biziops/brand-assets',
  logos: await logos(),
  products: await products(),
  orgs: await orgs(),
  iconSets: await iconSets(),
};

await writeFile(out, `${JSON.stringify(inventory, null, 2)}\n`);
console.log(`brand-site/inventory.json: ${inventory.logos.length} logos, ${inventory.products.length} products, ${inventory.orgs.length} orgs`);
