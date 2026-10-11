// Usage: node shot.js <url> <out.png> [width=1280] [reduced]
// Run from a directory where `npm i puppeteer-core@23` has been done. Set CHROME=/path/to/chrome to override.
const puppeteer = require(require.resolve('puppeteer-core', { paths: [process.cwd(), __dirname] }));
const [,, url, out, width = '1280', reduced = ''] = process.argv;
(async () => {
  const b = await puppeteer.launch({ executablePath: process.env.CHROME || '/usr/local/bin/google-chrome', args: ['--no-sandbox'] });
  const p = await b.newPage();
  await p.setViewport({ width: +width, height: 900 });
  if (reduced) await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await p.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo({top: y, behavior: 'instant'}); await new Promise(r => setTimeout(r, 150)); }
    document.querySelectorAll('img[loading=lazy]').forEach(i => i.loading = 'eager');
    await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
    window.scrollTo({top: 0, behavior: 'instant'});
    await new Promise(r => setTimeout(r, 400));
  });
  const m = await p.evaluate(() => {
    const nav = document.querySelector('header nav, nav');
    const over = [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1).slice(0, 5).map(e => e.tagName + '.' + e.className);
    return { docW: document.documentElement.scrollWidth, vw: document.documentElement.clientWidth, h: document.body.scrollHeight, over,
      header: (() => { const h = document.querySelector('header'); return h ? [h.scrollWidth, h.clientWidth, h.getBoundingClientRect().height] : null; })() };
  });
  console.log(JSON.stringify(m));
  await p.screenshot({ path: out, fullPage: true });
  await b.close();
})();
