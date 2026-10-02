# netwrx-solutions-website

**Netwrx Solutions** shop — software sold under the **Skunk Foundry** brand (#SkunkFoundry).

The registered company name is **NETWRXSOLUTIONS LIMITED** (Companies House SC502612). That legal name appears once, in the copyright footer. Everywhere else the site says **Netwrx Solutions**.

**Live site:** [https://www.netwrxsolutions.com/](https://www.netwrxsolutions.com/)

Static storefront served via **GitHub Pages** from the `TSLABoT` branch (default branch; do not rename). The Pages `CNAME` is still `shop.netwrxsolutions.com`. Canonical and Open Graph URLs use `https://www.netwrxsolutions.com/`.

## Products

| Product | Notes |
|---------|--------|
| **Email2Report** | Public shop name. Stripe checkout and unlock flow still use **PrefillFromMail**. Kit **£149**, Guided **£199**. After payment: [unlock page](https://cyberbob4269.github.io/prefillfrommail/) → paste key → run on a scheduled email. |
| **xTalk** | Windows dictation. Speech included. **Try 7 days free** (same installer): [xTalk-Setup.exe (v1.0.3)](https://github.com/cyberbob4269/xtalk/releases/download/v1.0.3/xTalk-Setup.exe). After trial, buy to keep dictating — **£14.99** ([Stripe](https://buy.stripe.com/8x26oHg5U0Fn6pI8Pubo400)) or launch **£9.99** ([Stripe](https://buy.stripe.com/fZu9ATcTI87PbK26Hmbo401)). License key on thanks page → Gear → Enter license… |
| **Food Truth** | **£3.99** |
| **StackSweep** | Fixed-fee clean-up, **£699**. Share page: `stacksweep.html`. |

## Other pages

- **Writing:** `essay-light-speed-tsunami.html`
- **Citizen science:** Vera@Home / Cosmic Pulse (private repo), Neo-Watch (public)

## Analytics

`www.netwrxsolutions.com` now points at this site. Cloudflare Web Analytics and Plausible stay **commented out** in `index.html` until Scott enables them — the Cloudflare snippet still has a placeholder token. To turn one on, uncomment its script (`data-domain="netwrxsolutions.com"` for Plausible).

## Styles

Tailwind is compiled into `css/site.css`. Do not load `cdn.tailwindcss.com`. After changing utility classes in the HTML, rebuild and commit the CSS (GitHub Pages serves the static file and does not run this build):

```bash
npm install
npm run build:css
```

`src/input.css` holds the Tailwind directives plus the site's custom rules. `tailwind.config.js` scans the root HTML files.

## Repository layout

- `index.html` — main shop page
- `essay-light-speed-tsunami.html` — essay
- `stacksweep.html` — StackSweep share page
- `css/site.css` — production Tailwind build
- `src/input.css`, `tailwind.config.js` — rebuild inputs
- `js/nav.js` — mobile menu
- `robots.txt`, `sitemap.xml`
- `images/` — product and project artwork
- `projects.md` — supplementary project notes

## Owner

Scott Kellock · Netwrx Solutions (NETWRXSOLUTIONS LIMITED, UK)
