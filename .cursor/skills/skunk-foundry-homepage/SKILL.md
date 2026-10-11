---
name: skunk-foundry-homepage
description: Edit the Skunk Foundry / NetwrxSolutions homepage designs in designs/ (especially the dark-mode design C, the owner's favourite). Use when changing copy, prices, sections, colours, images or links on www.netwrxsolutions.com designs, adding products or add-ons, or promoting a design to the live index.html.
---

# Skunk Foundry homepage

Static GitHub Pages site for **www.netwrxsolutions.com**. **NetwrxSolutions Ltd** is the company; **Skunk Foundry** is its AI/software studio brand. Owner: Scott Kellock, Dundee.

## Files

| Path | What |
|---|---|
| `index.html`, `CNAME` | **Live site.** Do not edit unless the owner explicitly asks to go live. |
| `designs/c-freestyle/index.html` | **Design C, the owner's pick.** Dark-mode AI studio page. Default target for edits. |
| `designs/a-website/index.html` | Design A: current site, navy + sky blue. |
| `designs/b-brand-art/index.html` | Design B: brand-art look, soot black + signal yellow. |
| `designs/assets/` | Shared WebP images + `referral.js` (PromoteKit tags Stripe links). |
| `images/skunk-foundry.png` | Original brand art (1536x1024). Source for skunk crops. |
| `.cursor/skills/skunk-foundry-homepage/scripts/` | `shot.js` (screenshots + overflow check), `webp.py` (image optimiser), `check.sh` (content invariants). |

Each design is **one HTML file with inline CSS**, no framework, no Tailwind, no icon fonts (inline SVG `<symbol>`s at the top of `<body>`). Keep it that way: it's what makes the pages fast.

## Design C at a glance

Section order and anchor ids (nav links point to these):

1. `header.nav`: skunk-face logo (`skunk-mark-192.webp`), links, "Try it: 07888 867893" button.
2. `#top` hero: "Powered by SpaceX AI · Grok voice" pill, H1 "The AI receptionist that never misses a call.", stats row, skunk portrait (`skunk-hero-720.webp`) with floating live-call card.
3. `.strip`: Voice AI by SpaceX AI (Grok) / Stripe / UK numbers / Dundee.
4. `#assistant` (01): how-it-works steps, `#plans` "Try it now" banner, three tiers.
5. `#addons` (02): early-bird add-on tiles.
6. `#letready` (03): LetReady + example reminder list.
7. `.band`: skunk foundry scene, "Built in the quiet. Delivers in the real world."
8. `#software` (04): Email2Report, xTalk, Food Truth, StackSweep.
9. `#starlink` (05): three install tiers.
10. `#contact` (06): big contact links, footer with the SpaceX "independent, not affiliated" line.

**Palette (CSS variables in `:root`)**: `--bg #06070b`, `--bg-2 #0a0c12`, `--card #0f121a`, `--card-2 #141824`, `--line #232838`, `--line-2 #323a50`, `--text #f4f5f8`, `--muted #a3aab9`, `--accent #7c8cff`, `--cyan #3ee0ff`, `--grad` indigo-to-cyan. Use `.grad` for gradient text, `.btn-white` for the primary button, `.btn-line` for secondary. **Don't add yellow** (the owner said there was too much). Fonts: Sora (display) + system UI.

Reusable building blocks: `.card`, `.kicker` (`<b>NN</b>Label`), `.tier` / `.tier.feat`, `.tile`, `.prod` + `.buys` / `.buy` / `.buy.feat`, `.chip`, `.free`, `.btn`.

## Content rules (must hold in every design)

- **Virtual Assistant** near the top: Personal **£14.99**, Business **£29**, Team **£49** a month, **first 30 days free**, "Try it now: call **07888 867893**" (`tel:07888867893`). There is no Stripe link for these yet; trial buttons are `mailto:`.
- **Early-bird add-ons** (prices locked for first 12 months): Email assistant £7.99 (£14.99 standalone), Google reviews £4.99 (£9.99), Lead follow-up £7.99 (£14.99), Booking and reminders £7.99, Website chat £7.99 (£14.99), Social media £19/mo, Paperwork and forms £14.99/mo or £5/report, AI staff training £79 half-day + £29 follow-up hour.
- **LetReady** link is **https://getletready.co.uk/** (never the old vercel.app address).
- **Contacts**: scott@netwrxsolutions.com, 07913 300361 (also WhatsApp `https://wa.me/447913300361`), skunk-foundry@mail.grokbot.com.
- **Stripe buy links must stay byte-identical** to the live `index.html`:
  - Email2Report Kit £149 `https://buy.stripe.com/00w7sL6vk2Nv5lE5Dibo407`, Guided £199 `https://buy.stripe.com/5kQ14n06W9bT5lE9Tybo408`
  - xTalk launch £9.99 `https://buy.stripe.com/fZu9ATcTI87PbK26Hmbo401`, full £14.99 `https://buy.stripe.com/8x26oHg5U0Fn6pI8Pubo400`
  - Food Truth £3.99 `https://buy.stripe.com/aFadR95rg2NvdSac1Gbo403`
  - StackSweep £699 `https://buy.stripe.com/28EeVd5rgco54hAfdSbo40c`
  - Starlink £299 `https://buy.stripe.com/dRm14n7zo4VDdSaaXCbo409`, £349 `https://buy.stripe.com/cNi3cv1b0co57tM4zebo40a`, £449 `https://buy.stripe.com/eVq14ndXMgEl01kc1Gbo40b`
- Starlink sits **lower down** the page and keeps the "independent installer, not Starlink, SpaceX or Satworks" wording.
- Public copy must not explain how the products are built (no stack/tool lists beyond the "Powered by SpaceX AI · Grok voice" credit the owner asked for), no internal costs, no promo codes, no banking details.
- Keep `<meta name="robots" content="noindex, nofollow">` on preview pages.

## Quality bar

- Normal modern studio typography (17px body), **WCAG AA** contrast (4.5:1 body text). The owner does not want oversized text.
- `prefers-reduced-motion: reduce` must disable all animation (orb, waveform, pulse).
- Works on mobile (390px) and the **menu must not overflow at 1280px**. Desktop links show at `min-width:1200px`; below that a `<details class="menu">` drop-down is used. If you add a nav link, re-check 1200 and 1280.
- Images: WebP only, sized for display, `loading="lazy"` below the fold, `width`/`height` set.

## Workflow

1. Work on a branch; never commit to `TSLABoT` directly, never edit live `index.html`/`CNAME` unless told to.
2. Edit `designs/c-freestyle/index.html` (or the design named by the owner).
3. New images: `python3 .cursor/skills/skunk-foundry-homepage/scripts/webp.py <src> <name> [--width 800] [--crop x0,y0,x1,y1]` writes `designs/assets/<name>.webp`. Needs `pip install pillow`.
4. Serve and check:
   ```bash
   python3 -m http.server 8080 &   # from repo root
   bash .cursor/skills/skunk-foundry-homepage/scripts/check.sh            # content invariants
   mkdir -p /tmp/shot && cd /tmp/shot && npm i puppeteer-core@23 >/dev/null
   node /workspace/.cursor/skills/skunk-foundry-homepage/scripts/shot.js http://localhost:8080/designs/c-freestyle/ /tmp/shot/c-1280.png 1280
   node /workspace/.cursor/skills/skunk-foundry-homepage/scripts/shot.js http://localhost:8080/designs/c-freestyle/ /tmp/shot/c-390.png 390
   ```
   `shot.js` prints `docW` vs `vw`; they must be equal (no horizontal scroll). The decorative `.orb` is clipped by the hero and can be ignored in the `over` list. Uses `/usr/local/bin/google-chrome`; change `executablePath` if Chrome lives elsewhere.
5. Look at the screenshots, commit, push, and update the PR with fresh 1280px full-page screenshots.

## Promoting a design to live (only when the owner asks)

1. Copy the design to `index.html`; change `../assets/` paths to `designs/assets/` (or move the assets).
2. Remove the `noindex` meta; restore the live `<link rel="canonical">`, Open Graph and Twitter meta from the old `index.html`.
3. Keep `CNAME` untouched. Run `check.sh` against `index.html` too.
