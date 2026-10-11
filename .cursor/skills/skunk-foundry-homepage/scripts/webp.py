"""Optimise an image into designs/assets/<name>.webp.

Usage: python3 webp.py <src> <name> [--width 800] [--crop x0,y0,x1,y1] [--quality 78]
Run from the repo root. Requires Pillow (pip install pillow).
"""
import argparse
import os

from PIL import Image

ap = argparse.ArgumentParser()
ap.add_argument("src")
ap.add_argument("name")
ap.add_argument("--width", type=int, default=0)
ap.add_argument("--crop", default="")
ap.add_argument("--quality", type=int, default=78)
a = ap.parse_args()

im = Image.open(a.src).convert("RGB")
if a.crop:
    im = im.crop(tuple(int(v) for v in a.crop.split(",")))
if a.width and im.width > a.width:
    im = im.resize((a.width, round(im.height * a.width / im.width)), Image.LANCZOS)
out = os.path.join("designs", "assets", f"{a.name}.webp")
im.save(out, "WEBP", quality=a.quality, method=6)
print(out, im.size, f"{os.path.getsize(out) // 1024} KB")
