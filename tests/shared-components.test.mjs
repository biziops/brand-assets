import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

function load(component) {
  const document = { querySelector: () => null, baseURI: 'https://example.test/', documentElement: { dataset: {} }, hidden: false };
  const callbacks = new Map();
  let frame = 0;
  const context = { document, window: { location: { hostname: 'example.test' } }, URL, HTMLElement: class {}, customElements: { get() {}, define() {} },
    AbortController, ResizeObserver: class { observe() {} disconnect() {} }, performance: { now: () => 0 },
    localStorage: { setItem() {} }, matchMedia: () => ({ matches: false }),
    requestAnimationFrame: fn => { callbacks.set(++frame, fn); return frame; }, cancelAnimationFrame: id => callbacks.delete(id) };
  vm.runInNewContext(readFileSync(`src/re8ch-${component}.js`, 'utf8'), context);
  return { context, callbacks, Class: context.window[component === 'footer' ? 'Re8chFooter' : 'Re8chNavigator'] };
}

test('published CDN copies match their source', () => {
  for (const component of ['navigator', 'footer']) for (const extension of ['css', 'js']) {
    const name = `re8ch-${component}.${extension}`;
    for (const target of ['dist', 'dist/current']) assert.equal(readFileSync(`${target}/${name}`, 'utf8'), readFileSync(`src/${name}`, 'utf8'));
  }
});

test('opacity handles absent values, 1% steps and bounds', () => {
  const { Class } = load('navigator');
  const nav = new Class();
  nav.accessibility = {};
  nav.applyAccessibility = () => {};
  for (const [input, expected] of [[null, .78], ['', .78], [.79, .79], [.01, .1], [1, .9], ['bad', .78]]) {
    nav.setGlassOpacity(input);
    assert.equal(nav.accessibility.glassOpacity, expected);
  }
});

test('both containers move only on overflow, pause, and reverse at their bounds', () => {
  const { Class, context, callbacks } = load('footer');
  const footer = new Class();
  const makeRail = (width) => {
    const viewport = { scrollWidth: width, clientWidth: 300, scrollLeft: 0, addEventListener() {} };
    const toggle = { hidden: true, addEventListener() {} };
    const buttons = [-1, 1].map(value => ({ dataset: { scrollDir: String(value) }, addEventListener() {} }));
    return { dataset: {}, viewport, toggle, buttons,
      querySelector: selector => selector === '[data-scroll-viewport]' ? viewport : selector === '[data-marquee-pause]' ? toggle : {},
      querySelectorAll: () => buttons };
  };
  const rails = [makeRail(200), makeRail(500)];
  footer.querySelector = () => null;
  footer.querySelectorAll = () => rails;
  footer.matches = () => false;
  footer.setupScrollRails();
  assert.equal(rails[0].dataset.overflow, 'false');
  assert.equal(rails[0].toggle.hidden, true);
  assert.equal(rails[1].toggle.hidden, false);
  let time = 1000;
  const tick = () => { const [id, fn] = callbacks.entries().next().value; callbacks.delete(id); fn(time); time += 50; };
  tick(); tick();
  assert.equal(rails[0].viewport.scrollLeft, 0);
  assert.equal(rails[1].viewport.scrollLeft, .6);
  for (const stop of [() => { rails[1].dataset.paused = 'true'; }, () => { context.document.documentElement.dataset.re8chReduceMotion = 'true'; }, () => { context.matchMedia = () => ({ matches: true }); }, () => { context.document.hidden = true; }, () => { footer.matches = () => true; }]) {
    rails[1].dataset.paused = 'false'; context.document.documentElement.dataset.re8chReduceMotion = 'false';
    context.matchMedia = () => ({ matches: false }); context.document.hidden = false; footer.matches = () => false;
    stop(); const before = rails[1].viewport.scrollLeft; tick(); assert.equal(rails[1].viewport.scrollLeft, before);
  }
  footer.matches = () => false;
  rails[1].autoPosition = 199.8; tick();
  assert.equal(rails[1].viewport.scrollLeft, 200);
  assert.equal(rails[1].autoDirection, -1);
  rails[0].viewport.scrollWidth = 600;
  rails[1].viewport.clientWidth = 600;
  footer.updateScrollRails();
  assert.equal(rails[0].dataset.overflow, 'true', 'a translation or resize can make either container overflow');
  assert.equal(rails[1].dataset.overflow, 'false');
  assert.equal(rails[1].viewport.scrollLeft, 0);
  assert.equal(rails[1].toggle.hidden, true);
  footer.setupScrollRails();
  assert.equal(callbacks.size, 1, 're-render must cancel the old animation loop');
  rails.forEach(rail => { rail.viewport.scrollWidth = 100; });
  footer.updateScrollRails(); tick();
  assert.equal(callbacks.size, 0, 'fitting containers do not run an idle frame loop');
  rails[0].viewport.scrollWidth = 600;
  footer.updateScrollRails();
  assert.equal(callbacks.size, 1, 'overflow after resize restarts automatic movement');
});

test('all 27 locales cover every product, brand and record detail', () => {
  const { Class } = load('footer');
  const locales = ['en', 'zh-CN', 'zh-TW', 'es', 'ar', 'hi', 'pt-BR', 'bn', 'ru', 'ja', 'fr', 'de', 'ko', 'id', 'tr', 'vi', 'it', 'fa', 'ur', 'th', 'pl', 'nl', 'sw', 'ms', 'fil', 'uk', 'he'];
  const footer = new Class();
  footer.hasAttribute = () => false;
  for (const locale of locales) {
    footer.getAttribute = key => key === 'locale' ? locale : null;
    const config = footer.componentConfig();
    assert.equal(config.locale, locale);
    assert.ok(config.brand.name);
    for (const product of config.products) {
      assert.ok(config.copy.products[product.id], `${locale}: ${product.id}`);
      const html = footer.renderProduct(product, '', locale, config.copy);
      assert.ok(html.includes(config.copy.products[product.id].replaceAll('&', '&amp;')));
    }
    assert.equal(config.companyRecords.length, 9);
    for (const record of config.companyRecords) {
      for (const key of ['name', 'description', 'detail', 'action']) assert.ok(record[key], `${locale}: ${record.id}.${key}`);
      assert.ok(!record.detail.includes('{name}'));
      if (!locale.startsWith('zh')) assert.ok(!record.detail.includes('公开'));
    }
    assert.equal(config.companyRecords.find(record => record.id === 'icp').description, '湘ICP备2025130798号-4');
    assert.equal(config.companyRecords.find(record => record.id === 'duns').description, '12-474-2472');
  }
});

test('company records are direct links without tooltip state', () => {
  const { Class } = load('footer');
  const footer = new Class();
  const html = footer.renderCompanyRecord({
    name: 'Official record', description: 'Registry', detail: 'Verify', action: 'Open',
    href: 'https://example.test/record', icon: 'certificate',
  });
  assert.match(html, /<a class="re8ch-footer__trust-mark"/);
  assert.match(html, /href="https:\/\/example\.test\/record"/);
  assert.doesNotMatch(html, /aria-haspopup|aria-expanded|data-record-|<button/);
});

test('navigator ignores pre-connect upgrade reactions and preserves controls on theme changes', () => {
  const { Class, context } = load('navigator');
  const nav = new Class();
  nav.isConnected = true;
  nav.render = () => { throw new Error('unexpected render'); };
  assert.doesNotThrow(() => nav.attributeChangedCallback('locale', null, 'en'));
  nav.accessibility = { highContrast: false, glassOpacity: .78 };
  nav.themePreference = 'auto';
  const attrs = new Map();
  nav.getAttribute = key => attrs.get(key) || null;
  nav.setAttribute = (key, value) => {
    const old = nav.getAttribute(key); attrs.set(key, value);
    if (key === 'theme') nav.attributeChangedCallback(key, old, value);
  };
  nav.syncControlState = () => {};
  nav.syncFooters = () => {};
  context.CustomEvent = class {};
  context.window.dispatchEvent = () => {};
  nav.applyTheme('dark', true);
  assert.equal(attrs.get('theme'), 'dark');
  assert.equal(context.document.documentElement.dataset.theme, 'dark');
  nav.setAttribute('theme', 'light');
  assert.equal(nav.themePreference, 'light');
  assert.equal(context.document.documentElement.dataset.theme, 'light');
});

test('navigator accepts only an explicit GoTrue session projection', () => {
  const source = readFileSync('src/re8ch-navigator.js', 'utf8');
  assert.doesNotMatch(source, /re8ch\.auth\.identity\.v1|re8ch_identity|\/auth\/start|\/auth\/me/);
  const { Class } = load('navigator');
  const nav = new Class();
  nav.isConnected = false;
  nav.setSession({
    access_token: 'must-not-be-retained',
    refresh_token: 'must-not-be-retained',
    user: { id: 'user-1', email: 'person@example.com', user_metadata: { full_name: 'Person' } },
  });
  assert.deepEqual({ ...nav.goTrueIdentity }, {
    subject: 'user-1', email: 'person@example.com', phone: '', name: 'Person', preferredUsername: '',
  });
  assert.doesNotMatch(JSON.stringify(nav.goTrueIdentity), /must-not-be-retained/);
  nav.setSession(null);
  assert.equal(nav.goTrueIdentity, null);
});
