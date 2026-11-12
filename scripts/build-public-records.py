#!/usr/bin/env python3
"""Build watermarked public verification copies from the private records store.

The private source directory is never copied into this repository. This script
only writes the two explicitly approved public derivatives.
"""

from pathlib import Path
import hashlib
import json
import os

import fitz
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PRIVATE_ROOT = Path(os.environ.get("PRIVATE_RECORDS_ROOT", "/Volumes/A1/business-compliance-intake/records"))
OUT = ROOT / "company" / "documents"
WATERMARK = "PUBLIC VERIFICATION COPY / 仅供公开核验 / RE8CH.COM"


def font(size: int):
    for candidate in (
        "/System/Library/Fonts/PingFang.ttc",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ):
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def watermark_business_license() -> None:
    source = PRIVATE_ROOT / "business-docs/corporate/china/reach-software-studio/registration/business-license.jpg"
    target = OUT / "reach-software-studio-business-license-public.webp"
    image = Image.open(source).convert("RGB")
    overlay = Image.new("RGBA", image.size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(overlay)
    label_font = font(max(28, image.width // 32))
    banner_font = font(max(20, image.width // 55))
    for y in range(-image.height, image.height * 2, 250):
        draw.text((80, y), WATERMARK, font=label_font, fill=(145, 20, 20, 72), stroke_width=1,
                  stroke_fill=(255, 255, 255, 42))
    banner_h = max(72, image.height // 12)
    draw.rectangle((0, image.height - banner_h, image.width, image.height), fill=(25, 32, 45, 205))
    draw.text((32, image.height - banner_h + 18),
              "公开展示副本 · 非实时登记状态证明 · 请同时使用官方公示系统核验",
              font=banner_font, fill=(255, 255, 255, 245))
    result = Image.alpha_composite(image.convert("RGBA"), overlay).convert("RGB")
    result.save(target, "WEBP", quality=88, method=6)


def watermark_certificate() -> None:
    source = PRIVATE_ROOT / "business-docs/corporate/us-company/formation-and-ein/certificate-of-existence.pdf"
    target = OUT / "reachieve-llc-certificate-of-existence-public.pdf"
    document = fitz.open(source)
    for page in document:
        rect = page.rect
        for y in range(-150, int(rect.height) + 200, 145):
            page.insert_text((42, y), "PUBLIC VERIFICATION COPY - RE8CH.COM",
                             fontsize=16, color=(0.62, 0.12, 0.12), fill_opacity=0.24,
                             rotate=0, overlay=True)
        page.draw_rect(fitz.Rect(0, rect.height - 34, rect.width, rect.height),
                       color=None, fill=(0.09, 0.12, 0.18), fill_opacity=0.88, overlay=True)
        page.insert_text((24, rect.height - 12),
                         "Public display copy - issued 2023-08-30 - verify current status with Montana SOS",
                         fontsize=8.5, color=(1, 1, 1), overlay=True)
    document.set_metadata({"title": "Reachieve LLC - Public Verification Copy",
                           "subject": "Watermarked public display copy; not evidence of current status"})
    document.save(target, garbage=4, deflate=True, clean=True)
    document.close()


def update_manifest_integrity() -> None:
    manifest_path = ROOT / "company" / "records.json"
    manifest = json.loads(manifest_path.read_text())
    for entity in manifest["entities"]:
        for record in entity.get("publicDocuments", []):
            target = ROOT / "company" / record["href"]
            content = target.read_bytes()
            record["bytes"] = len(content)
            record["sha256"] = hashlib.sha256(content).hexdigest()
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    watermark_business_license()
    watermark_certificate()
    update_manifest_integrity()
    print(f"Wrote public verification copies to {OUT}")
