# RE8CH Brand Assets

Reusable logo, transparent PNG, SVG, and web motion assets for RE8CH / 锐奇.

## Trademark Styles

Use the graphic logo mark with one of the following brand names:

- `[图形Logo®]  锐奇`
- `[图形Logo®]  锐奇软件开发工作室`
- `[图形Logo®]  RE8CH`
- `[图形Logo®]  Reachieve LLC`

© 2026 RE8CH / 锐奇. All rights reserved.

## Folders

- `SVG/` - transparent RE8CH trademark SVG logo variants.
- `SVG/ledger-ui/` - ledger-specific mini program UI icons for account books, entries, documents, reconciliation, reports, profile, and empty states.
- `PNG/` - transparent RE8CH trademark PNG logo variants.
- `ANIME/` - reusable web animation assets built around `<re8ch-logo-motion>`.
- `PRODUCTS/` - dedicated product logo directory. Product logos live here instead of beside the RE8CH trademark files.
- `ORGS/` - editable SVG and 512 px PNG avatars for GitHub organizations in the RE8CH enterprise.
- `UI/` - reusable CDN web components for product pages and shared product UI.
- `src/` - source files for the CDN navigator/footer web components and trust mark fallback assets.
- `dist/` - publishable CDN navigator/footer component files and trust mark fallback assets.
- `company/` - public company verification manifest and approved watermarked document copies. Originals remain private.
- `demo/` - local HTML demo for the footer component.
- `brand-site/` - brand.re8ch.com showcase of logos, color, type, product marks and shared UI. See `brand-site/README.md`.
- `anycam/` - AnyCAM app icon source assets.
- `re8ch-registry/` - Re8ch Registry harbor tower mark and motion assets.

## Core Variants

- `logo` - color logo with black edge.
- `logo-gray` - luminance grayscale logo with black edge.
- `logo-invert` - inverted logo with white edge.
- `logo-no-edge` - color logo with transparent edge gaps.
- `logo-no-edge-gray` - grayscale no-edge logo.
- `logo-no-edge-invert` - inverted no-edge logo.

## Product Icons

- `PRODUCTS/lizhang-ledger/` - 理账 / Ledger product icon.
- `PRODUCTS/anysiteonearth/` - Any Site on Earth geospatial product icon.
- `PRODUCTS/anycam/` - Anycam / 任意相机 product icon for websites.
- `PRODUCTS/phonaid/` - Phonaid / 万能接线助手 product icon.
- `PRODUCTS/registry/` - RE8CH Registry signed image distribution icon.
- `PRODUCTS/cluster/` - RE8CH Cluster build and operations icon.
- `PRODUCTS/observable/` - RE8CH Observable observability icon.
- `PRODUCTS/user-hub/` - RE8CH User Hub account icon, app icons, favicons, and web app manifest.
- `UI/re8ch-product-system/v1/` - reusable product hero, three-layer stack, and product footer web components.
- `anycam/` - AnyCAM product icon source assets.
- `re8ch-registry/` - Re8ch Registry product mark and motion assets.

Product icons are generated with:

```bash
npm run icons:products
```

The current product logo system uses an original RE8CH system-symbol language:
rounded strokes, compact silhouettes, text-friendly geometry, small-size
legibility, and palette-aware variants. These are not Apple SF Symbols artwork
and do not copy Apple symbol shapes.

## CDN Footer Component

The reusable trust footer is a framework-agnostic Web Component. It renders a
compressed Company Trust Mark Strip: product network scroll rail with a compact
RE8CH mark head, direct company record/public profile links, and a legal/contact
row. Record links navigate directly without an intermediate tooltip; detailed
compliance context is maintained at `https://re8ch.com/en/company/`. The RE8CH rail head is a crawlable link to `https://re8ch.com/`, and the
contact row includes a low-key Founder Profile link to `https://2wood.cn/` for
the company/personal-site backlink contract.

```html
<link rel="stylesheet" href="https://brand-assets.re8ch.com/dist/re8ch-footer.css">
<script type="module" src="https://brand-assets.re8ch.com/dist/re8ch-footer.js"></script>
<re8ch-footer active-product="registry-image" theme="light"></re8ch-footer>
```

Source files live in `src/`; publishable files live in `dist/`. Product sites
can use lightweight attributes for common page-level differences:

```html
<re8ch-footer
  active-product="cluster"
  locale="zh-CN"
  language-mode="available"
  theme="light"
  product-ids="anysite,ledger,registry-image,cluster,observable,anycam,phonaid"
  record-ids="reachieve-certificate,china-business-license,montana-sos,duns,icp,mps,china-credit,linkedin,crunchbase"
  records-visible="8"
  contact-email="contact@re8ch.com"
  career-email="career@re8ch.com"
  contact-label="Contact Us"
  career-label="Join Us"
  address="Where We Are"
  address-title="湖南省娄底市涟源市杨市镇锐奇软件开发工作室"
  max-width="1600px">
</re8ch-footer>
```

Supported attributes:

- `active-product` - highlights one product: `anysite`, `ledger`, `registry-image`, `cluster`, `observable`, `anycam`, or `phonaid`.
- `theme` - `light` or `dark`.
- `locale`, `language-options`, `language-mode` - language state mirrored from `<re8ch-navigator>`; product rail links and footer labels localize to the active locale.
- `compact`, `variant`, `max-width` - visual density and layout tuning.
- `brand-logo` - RE8CH mark shown at the start of the product rail.
- `products-label`, `product-ids`, `record-ids`, `records-visible` - container content; `records-visible` is retained for compatibility but natural content width determines overflow.
- `hide-products`, `hide-records` - optional section suppression.
- `copyright`, `icp`, `icp-href`, `address`, `address-title`, `contact-email`, `career-email`, `contact-label`, `career-label` - legal/contact overrides. Keep the default Founder Profile link unless a product has a specific legal reason to suppress or replace it.

## CDN Navigator Component

The reusable product navigator is a framework-agnostic Web Component for shared
RE8CH product navigation, CDN product logos, global language discovery, Liquid
Glass theme controls, and baseline accessibility preferences.

```html
<link rel="stylesheet" href="https://brand-assets.re8ch.com/dist/re8ch-navigator.css">
<script type="module" src="https://brand-assets.re8ch.com/dist/re8ch-navigator.js"></script>
<re8ch-navigator
  product="cluster"
  locale="zh-CN"
  links='[{"label":"Metrics","href":"#metrics"},{"label":"Workflow","href":"#workflow"},{"label":"Live Case","href":"#live"}]'>
</re8ch-navigator>
```

Supported attributes:

- `product` - `re8ch`, `anysite`, `ledger`, `registry-image`, `cluster`, `observable`, `anycam`, or `phonaid`.
- `locale`, `brand`, `home-href`, `sticky`, `max-width` - layout and identity tuning.
- `links`, `language-options`, `extra-actions` - JSON arrays for page-specific navigation and controls.
- `language-mode` - `global` shows the built-in macro language catalog with unsupported items muted; `available` only shows `language-options`.
- `glass-opacity` - optional initial Liquid Glass opacity from `0.1` to `0.9`.

The component stores `light`, `dark`, or local-time `auto` theme preference in
`re8ch-product-theme`. The theme switch renders as three icon buttons while
keeping localized `aria-label`, `title`, and screen-reader text for dark, auto,
and light modes. Accessibility preferences, including Reduce Motion, High
Contrast, Larger Text, and Glass Opacity, are stored in `re8ch-accessibility`,
then synchronized to `documentElement.dataset` and the shared footer. Navigator
UI chrome localizes from the same locale contract as product pages: menu,
language, theme, accessibility, toggle labels, glass labels, and page-provided
navigation/action labels all resolve against the active `locale`. Navigator
renders also mirror `locale`, `language-options`, `language-mode`, and resolved
theme onto every `<re8ch-footer>` on the page.

For larger site-level changes, override the default data before loading the component:

```html
<script>
  window.RE8CH_FOOTER_CONFIG = {
    brand: { logoSrc: "https://brand-assets.re8ch.com/SVG/logo.svg" }
  };
</script>
```

Trust mark fallback SVGs live in `src/trust-marks/` and `dist/trust-marks/`.
They are compact identification assets for the footer and can be replaced by
approved official brand-kit files without changing the component API. Current
assets include the Montana Secretary of State state seal visual and the MIIT
favicon for ICP context where available; other marks remain local fallbacks
linked to official/public profile pages.

## Asset Source Of Truth

This repository is the source of truth for public RE8CH brand assets.

Current distribution targets:

- Global: `brand-assets` Cloudflare R2 bucket, intended custom domain `https://brand-assets.re8ch.com`
- China: `brandassets-1301339749` Tencent COS bucket in `ap-guangzhou`, intended custom domain `https://zh-brand-assets.re8ch.com`

Public asset endpoints:

- `https://brand-assets.re8ch.com`
- `https://brandassets-1301339749.cos.ap-guangzhou.myqcloud.com`

Cloudflare R2 S3 API endpoint:

- `https://6317b796fb47e67fadec3bc9a5ef0e8e.r2.cloudflarestorage.com/brand-assets`

### Sync Locally

Install once:

```bash
npm install
```

Dry run:

```bash
npm run sync:dry-run
```

Sync both targets:

```bash
npm run sync:all
```

Sync one target:

```bash
npm run sync:r2
npm run sync:cos
```

R2 notes:

- If `R2_ACCESS_KEY_ID` and `R2_SECRET_ACCESS_KEY` are set, the script uses the S3-compatible R2 API and deletes stale remote objects.
- If those keys are not set, local runs fall back to the current `wrangler` login and only overwrite/upload current objects. This is enough for immediate publishing, but not for stale deletion.

Tencent notes:

- The installed `tccli` on this machine does not expose the COS service, so upload is performed through the official Tencent COS Node SDK.
- The script creates the COS bucket if needed, sets public read, uploads changed objects, and deletes stale objects.

### Automatic Sync

`.github/workflows/sync-brand-assets.yml` runs on every push to `main` and on manual dispatch.

Add these GitHub Actions secrets to the `biziops/brand-assets` repository:

```text
R2_ACCESS_KEY_ID
R2_SECRET_ACCESS_KEY
COS_SECRET_ID
COS_SECRET_KEY
```

Use a Cloudflare R2 S3 key pair scoped to the `brand-assets` bucket. Use Tencent credentials with permission for the `brandassets-1301339749` bucket.

### DNS / CDN Binding

Cloudflare:

1. Bind the R2 bucket `brand-assets` to `brand-assets.re8ch.com`.
2. Keep `manifest.json` uncached or short cached.
3. Cache immutable assets aggressively.

Tencent:

1. Bind `zh-brand-assets.re8ch.com` to the COS bucket/CDN origin `brandassets-1301339749.cos.ap-guangzhou.myqcloud.com`.
2. Enable HTTPS certificate for `zh-brand-assets.re8ch.com`.
3. Purge CDN after large asset replacements when needed.

### Shared controls and records motion

Navigator controls use bundled Lucide SVGs (license included in the JavaScript).
The glass slider supports 10–90% opacity in 1% increments and defaults to 78%
when no attribute or saved preference exists. High Contrast locks the effective
value to 90%; disabling it restores the saved setting. Popover surfaces remain
legible independently of navigation glass opacity.

Footer brand/product/record icons are 10px (half the previous 20px size).
Both rows use their natural content width. When everything fits, they are still,
with no scroll controls or animation frame loop. ResizeObserver checks again
when container/content dimensions change, including after locale switches.
Only overflowing rows automatically scroll at 12px/s, reversing gently at each
end. Arrows scroll within finite bounds; items are never duplicated or reordered.
Hover, focus, open detail cards, manual pause, hidden tabs and reduced motion all
pause automatic movement. Touch/wheel input has a three-second grace period.

All 27 supported locales include the brand label, descriptions for all nine
products, names for registries, descriptions for all ten records and detail-card
actions. Official trademarks and registration identifiers are preserved. Custom
brand names, product labels/descriptions and record name/description/detail/action
fields may be locale-keyed objects with an English fallback. Cards support Tab
into their link, Shift+Tab back to the trigger, and Escape to dismiss.

Run `node --test tests/shared-components.test.mjs` to check opacity boundaries,
conditional scrolling and resize behavior, all 27 locale inventories, and parity
of `src`, `dist`, and `dist/current`.
Preview both components with `python3 -m http.server 4198` and open
`http://localhost:4198/demo/index.html`.

The redesign demo language menu exposes all 27 locales. Use
`demo/redesign.html?locale=ar&few=1` to inspect a short localized list.
