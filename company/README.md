# Company verification assets

This directory contains the public, indexable company verification surface.
Original records remain in the private `biziops/business-compliance-intake`
repository and are never synchronized to the CDN.

- `records.json` is the machine-readable index used by websites and agents.
- `documents/` contains only approved, watermarked public derivatives.
- A public copy is historical evidence, not proof of current registry status.
- Full EIN, ITIN, identity documents, bank records, and tax returns must never be
  published here.

Regenerate the approved derivatives locally with:

```bash
PRIVATE_RECORDS_ROOT=/path/to/private/records python3 scripts/build-public-records.py
```

The generator requires PyMuPDF and Pillow. Review every generated page before
committing it.
