"""Cache-busting des images produit : grave `?v=<hash-contenu>` sur chaque URL
du render-manifest, SANS renommer les fichiers.

Pourquoi : l'URL d'un rendu (`.../s8-b18-po_face.webp`) ne change jamais, donc le
navigateur ressert la version en cache même après re-génération. On suffixe chaque
URL d'un hash du CONTENU du fichier (`?v=ab12cd34`) : il ne change QUE si l'image
change → cache busté automatiquement, nom de fichier intact.

`products.ts` est importé par des composants client → pas d'accès fs au runtime ;
le hash doit donc vivre dans le JSON (importé dans le bundle). Idempotent : on
retire tout `?v=` existant avant de re-graver. Sûr à relancer autant qu'on veut.

Usage :
    uv run python scripts/stamp_manifest_hashes.py
    # chemins par défaut = site live dilamco-next ; --manifest / --renders pour override
"""
from __future__ import annotations

import argparse
import hashlib
import json
import sys
from pathlib import Path

STORE_ROOT = Path(r"C:/laragon/www/dilamco-next")
DEFAULT_MANIFEST = STORE_ROOT / "lib" / "shop" / "render-manifest.json"
DEFAULT_RENDERS = STORE_ROOT / "public" / "assets" / "products" / "renders"


def content_hash(path: Path) -> str:
    """8 hex du md5 du contenu — assez pour distinguer des révisions d'image."""
    h = hashlib.md5()
    h.update(path.read_bytes())
    return h.hexdigest()[:8]


def stamp_url(url: str, renders_dir: Path, public_root: Path) -> str:
    """Réécrit `<url>?v=<hash>` depuis le fichier pointé. Renvoie l'URL inchangée
    si le fichier est introuvable (mappage placeholder)."""
    base = url.split("?", 1)[0]  # retire un éventuel ?v= précédent
    # URL site `/assets/...` -> fichier `public/assets/...`
    rel = base.lstrip("/")
    file_path = public_root / rel
    if not file_path.is_file():
        return base
    return f"{base}?v={content_hash(file_path)}"


def stamp_manifest(manifest_path: Path, renders_dir: Path) -> int:
    public_root = renders_dir.parent.parent.parent  # .../public
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    products = manifest.get("products", {})
    changed = 0
    for code, views in products.items():
        for view, url in list(views.items()):
            if not isinstance(url, str):
                continue
            new_url = stamp_url(url, renders_dir, public_root)
            if new_url != url:
                views[view] = new_url
                changed += 1
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    return changed


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--manifest", type=Path, default=DEFAULT_MANIFEST)
    ap.add_argument("--renders", type=Path, default=DEFAULT_RENDERS)
    args = ap.parse_args(argv)
    n = stamp_manifest(args.manifest, args.renders)
    print(f"[stamp] {n} URL(s) (re)hashée(s) -> {args.manifest}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
