#!/usr/bin/env bash
# Content invariants for the homepage designs. Run from the repo root.
# Usage: bash check.sh [file ...]   (defaults to all three designs)
set -u
files=("$@")
[ ${#files[@]} -eq 0 ] && files=(designs/a-website/index.html designs/b-brand-art/index.html designs/c-freestyle/index.html)

stripe=(
  00w7sL6vk2Nv5lE5Dibo407 5kQ14n06W9bT5lE9Tybo408
  fZu9ATcTI87PbK26Hmbo401 8x26oHg5U0Fn6pI8Pubo400
  aFadR95rg2NvdSac1Gbo403 28EeVd5rgco54hAfdSbo40c
  dRm14n7zo4VDdSaaXCbo409 cNi3cv1b0co57tM4zebo40a eVq14ndXMgEl01kc1Gbo40b
)
required=(
  'tel:07888867893' '07888 867893' 'First 30 days free' '£14.99' '£29' '£49'
  'https://getletready.co.uk/' 'scott@netwrxsolutions.com' '07913 300361'
  'skunk-foundry@mail.grokbot.com' 'id="starlink"' 'id="addons"' 'id="letready"'
)
fail=0
for f in "${files[@]}"; do
  for id in "${stripe[@]}"; do
    grep -q "https://buy.stripe.com/$id\"" "$f" || { echo "FAIL $f: missing Stripe link $id"; fail=1; }
  done
  extra=$(grep -o 'https://buy.stripe.com/[A-Za-z0-9]*' "$f" | sed 's#.*/##' | sort -u | grep -vxF -f <(printf '%s\n' "${stripe[@]}") || true)
  [ -n "$extra" ] && { echo "FAIL $f: unknown Stripe link(s): $extra"; fail=1; }
  for s in "${required[@]}"; do
    grep -qF "$s" "$f" || { echo "FAIL $f: missing '$s'"; fail=1; }
  done
  grep -q 'letready-nine.vercel.app' "$f" && { echo "FAIL $f: old LetReady URL"; fail=1; }
  grep -q 'prefers-reduced-motion' "$f" || { echo "FAIL $f: no reduced-motion rule"; fail=1; }
done
[ $fail -eq 0 ] && echo "OK: ${#files[@]} file(s) pass"
exit $fail
