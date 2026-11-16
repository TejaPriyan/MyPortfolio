import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');

test('MyPortfolio index.html has valid scripts and fixed UI/contact issues', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

  assert.doesNotMatch(html, /kit\.fontawesome\.com/, 'Broken FontAwesome kit script removed');
  assert.match(html, /font-awesome\/6\./, 'Working FontAwesome CSS CDN present');
  assert.doesNotMatch(html, /tejapriyan@email\.com|\+91-XXXX-XXXX-XX/, 'Dummy placeholder contact removed');
  assert.match(html, /teja1616150@gmail\.com/, 'Real contact email present');
  assert.match(html, /id="mobileMenuBtn"[\s\S]*toggleMobileMenu\(\)/, 'Mobile hamburger toggle wired');
  assert.match(html, /id="mobileNavMenu"/, 'Mobile nav drawer present');
  assert.match(html, /if \(!printWindow\)/, 'Popup blocker null check in printResume');
  assert.match(html, /cardFilterTimers/, 'Per-card timer cleanup in filterProjects');

  const scriptMatches = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
  const inlineScripts = scriptMatches
    .map((m) => ({ attrs: m[0].slice(0, m[0].indexOf('>')), body: m[1].trim() }))
    .filter((s) => !/\bsrc\s*=/.test(s.attrs) && s.body.length > 0);

  assert.ok(inlineScripts.length >= 1, 'Expected inline scripts in index.html');
  for (const s of inlineScripts) {
    if (/application\/ld\+json/i.test(s.attrs)) {
      assert.doesNotThrow(() => JSON.parse(s.body), 'JSON-LD script must parse cleanly');
    } else {
      assert.doesNotThrow(() => new vm.Script(s.body), 'Inline JS script syntax must parse cleanly');
    }
  }
});

test('MyPortfolio metadata, SEO, and config files are valid', () => {
  for (const jsonFile of ['vercel.json', '.htmlvalidate.json']) {
    const raw = fs.readFileSync(path.join(root, jsonFile), 'utf8');
    assert.doesNotThrow(() => JSON.parse(raw), `${jsonFile} must be valid JSON`);
  }

  for (const required of ['robots.txt', 'sitemap.xml', 'LICENSE', 'README.md', 'favicon.ico', 'favicon.svg']) {
    assert.ok(fs.existsSync(path.join(root, required)), `${required} must exist`);
  }

  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  assert.match(readme, /License-Proprietary/, 'README license badge matches LICENSE');
});
