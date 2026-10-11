# Homepage design previews (not live)

Three standalone homepage concepts for www.netwrxsolutions.com. The live `index.html` and `CNAME` are unchanged.

| Folder | Concept | Preview |
|---|---|---|
| `a-website/` | Current site content and structure, elevated with one navy and sky-blue palette | `/designs/a-website/` |
| `b-brand-art/` | Built from the Skunk Foundry brand art: soot black, signal yellow, molten glow, blueprint plates | `/designs/b-brand-art/` |
| `c-freestyle/` | Dark-mode AI studio look: skunk mascot hero with a live call card, "Powered by SpaceX AI · Grok voice", indigo-to-cyan accents | `/designs/c-freestyle/` |

All three share the same content: Virtual Assistant tiers, early-bird add-ons, LetReady, the existing software with unchanged Stripe links, Starlink installs and contacts.

## Notes

- Pages are marked `noindex` so search engines don't treat them as duplicates of the live site.
- Imagery: no xAI (Grok Imagine) API key was available when these were built, so extra art is CSS/SVG plus WebP crops of the existing brand and product images in `assets/`. Swap in Grok Imagine renders later by replacing files in `assets/`.
- Accessibility: standard studio typography (17px body), text contrast meets WCAG AA (4.5:1 or better), visible focus rings, skip link, `prefers-reduced-motion` turns off all animation.
- No Tailwind or Font Awesome CDNs; each page is a single HTML file with inline CSS and one web font.
- `assets/referral.js` keeps the PromoteKit referral tagging on Stripe links, as on the live site.
- LetReady links point to https://getletready.co.uk/.
