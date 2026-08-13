# netwrx-solutions-website

**Netwrx Solutions Limited** shop — software sold under the **Skunk Foundry** brand.

**Live site:** [https://cyberbob4269.github.io/netwrx-solutions-website/](https://cyberbob4269.github.io/netwrx-solutions-website/)

**Custom domain (when pointed):** `netwrxsolutions.com`

Static storefront served via **GitHub Pages** from the `TSLABoT` branch (default branch).

## Products (shop order)

| Product | Price | Notes |
|---------|-------|--------|
| **Email2Report** | Kit **£149**, Guided **£199** | Hero product. Public shop name; unlock flow uses [PrefillFromMail](https://cyberbob4269.github.io/prefillfrommail/). After Stripe payment: unlock page → paste license key → run on a real scheduled email. |
| **xTalk** | from **£9.99** | Windows dictation — full product card with UK Launch / UK Full / US tiers. Installer: [xTalk-Setup.exe (v1.0.3)](https://github.com/cyberbob4269/xtalk/releases/download/v1.0.3/xTalk-Setup.exe) |
| **Food Truth** | **£3.99** | UK supermarket buy/avoid guide. Free staples at [food-truth](https://cyberbob4269.github.io/food-truth/); unlock full guide after Stripe checkout. |

Done-for-you Email2Report is **not** listed on the shop.

## Buyer flow (Email2Report)

1. Pay via Stripe (Kit or Guided)
2. Open the [unlock page](https://cyberbob4269.github.io/prefillfrommail/) with the email used at checkout
3. Paste the license key into the setup script in your Google account
4. Run on a real scheduled XLS/CSV email

Support: scott@netwrxsolutions.com

## Analytics

Page-view analytics are **not** active on the GitHub Pages URL. After pointing `netwrxsolutions.com` at this repo, uncomment one of the options in the `<head>` of `index.html`:

- **Cloudflare Web Analytics** — add your beacon token from the Cloudflare dashboard
- **Plausible** — uses `data-domain="netwrxsolutions.com"`

No Google Analytics ID is configured.

## Other pages

- **Writing:** `essay-light-speed-tsunami.html`
- **Citizen science:** Vera@Home / Cosmic Pulse, Neo-Watch (free, not sold on the shop)

## Repository layout

- `index.html` — main shop page (Email2Report first)
- `essay-light-speed-tsunami.html` — essay
- `images/` — product and project artwork
- `projects.md` — supplementary project notes

## Owner

Scott Kellock · Netwrx Solutions Limited (UK) · Skunk Foundry
