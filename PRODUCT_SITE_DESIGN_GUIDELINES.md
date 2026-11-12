# RE8CH Product Site Design Guidelines

This document defines the current RE8CH product-site visual system for pages
using `brand-assets.re8ch.com` CDN components and product logos.

## Brand Architecture

RE8CH is the parent brand and operating identity. Product pages should present
their own product mark first, while keeping RE8CH visible through the shared
navigator, footer, legal text, and product network.

Product marks:

- Registry Image uses the blue and yellow security/certification regions of the
  RE8CH flagship mark.
- Cluster uses the yellow and green execution/delivery regions.
- Observable uses the red inverted-V observability region.
- Product logos must load from `https://brand-assets.re8ch.com/PRODUCTS/...`.
- Local favicons are allowed only when a product has a deliberate site-specific
  reason; otherwise use the CDN product mark.

## Shared Navigator

All RE8CH product pages should use the CDN Web Component:

```html
<link rel="stylesheet" href="https://brand-assets.re8ch.com/dist/re8ch-navigator.css">
<script type="module" src="https://brand-assets.re8ch.com/dist/re8ch-navigator.js"></script>
<re8ch-navigator product="cluster" locale="zh-CN"></re8ch-navigator>
```

Navigator principles:

- Keep it quiet and tool-like, not marketing-heavy.
- Use the product mark as the page identity.
- Use page-specific `links` for local anchors only.
- Keep global controls consistent: language, theme, accessibility.
- Theme control is a compact three-segment icon control for dark, auto, and
  light modes. It should not render visible `Dark / Auto / Light` text.
- Accessibility is a compact popover with icon toggles and a small clock-style
  glass opacity dial.
- Glass opacity range is `10%` to `90%`.
- `auto` theme resolves from local time: light from 07:00 to 18:59, dark
  otherwise.
- Navigator chrome must localize with the active `locale`: menu, language,
  theme, accessibility, toggle labels, glass labels, and page-provided
  navigation/action labels all need localized values for every rendered option.
- Account and sign-in actions go directly to `https://auth.re8ch.com/#home`.
  Do not use the retired `/auth/start`, `/auth/me`, `re8ch_identity`, or
  `re8ch.auth.identity.v1` contracts.
- Product applications that own a pg-identity Supabase GoTrue session may call
  `navigator.setSession(session)` or dispatch `re8ch-gotrue-session`. The CDN
  component reads only `session.user`; it never owns, persists, refreshes, or
  transmits the bearer token.

## Shared Footer

All RE8CH product pages should use the CDN footer:

```html
<link rel="stylesheet" href="https://brand-assets.re8ch.com/dist/re8ch-footer.css">
<script type="module" src="https://brand-assets.re8ch.com/dist/re8ch-footer.js"></script>
<re8ch-footer active-product="cluster" theme="light"></re8ch-footer>
```

Footer principles:

- It is a Company Trust Mark Strip, not a sitemap or badge wall.
- RE8CH appears as the parent mark at the product rail head, not as a product.
- The RE8CH rail head must remain a crawlable link to `https://re8ch.com/`.
- The legal/contact row should keep the low-key Founder Profile link to
  `https://2wood.cn/` so RE8CH/product sites and the personal site maintain
  a visible backlink relationship.
- Product rail and record rail are horizontal and compact.
- Company records link to public profiles or official lookup pages; they should
  not imply government endorsement.
- Record marquee uses a looping window model and supports arrow, wheel, and
  trackpad interaction.
- Bottom legal/contact row should stay one-line on desktop where possible.
- Footer `locale`, `language-options`, and `language-mode` should match the
  shared navigator. Product sites that expose only the approved localized pages
  should use `language-mode="available"`.

## Visual Tone

Use a clean corporate SaaS style:

- Backgrounds: `#F8FAFC`, `#F7F9FC`, or controlled dark equivalents.
- Main text: `#0F172A`; muted text: `#64748B`; muted icons: `#94A3B8`.
- Borders over shadows. Heavy shadows are reserved for exceptional overlays.
- Cards should be compact and functional. Avoid nested cards.
- Avoid decorative blobs, one-note palettes, oversized hero copy inside tools,
  and badge-wall layouts.
- Controls should look like system controls: predictable, small, keyboard
  focusable, and readable in light and dark themes.

## SEO And Metadata

Every product page should include:

- `rel="canonical"` for the current canonical URL.
- `rel="alternate"` entries for supported languages and `x-default`.
- `rel="sitemap"` pointing to the product sitemap.
- A valid `/sitemap.xml` with `xhtml:link` alternates where localized versions
  exist.
- `/robots.txt` pointing to the sitemap.
- The IndexNow key file `4790e3784bdc45bf85e11ff304b3868f.txt` at the site
  root, containing only `4790e3784bdc45bf85e11ff304b3868f`.
- `npm run indexnow:submit` for submitting sitemap URLs to IndexNow endpoints
  after a production deployment. Use `-- --dry-run` for validation and
  `SITE_URL=https://...` when submitting a China or alternate host.

## CDN Versioning

When component code, product logos, or favicon targets change, update the query
version in site integrations, for example:

```text
re8ch-navigator.css?v=20260616-navigator-ui-indexnow-3
re8ch-footer.js?v=20260616-footer-backlinks-1
PRODUCTS/cluster/SVG/icon.svg?v=20260615-logo-fragments-2
```

Do not reuse an old query string for changed public assets; edge caches can keep
old SVG/JS/CSS content alive.

## Implementation Checklist

- Product logo comes from `brand-assets.re8ch.com/PRODUCTS/...`.
- Navigator and footer are loaded from `dist/`.
- Theme changes synchronize to `documentElement.dataset.theme` and the footer.
- Language changes synchronize from navigator to footer.
- Language menu uses text/script icons, never national flags.
- Unsupported global languages are visible but muted unless
  `language-mode="available"` is used.
- Mobile layouts avoid horizontal overflow except intentional rails.
- Keyboard focus states are visible.
- Build and browser checks pass before deploy.
