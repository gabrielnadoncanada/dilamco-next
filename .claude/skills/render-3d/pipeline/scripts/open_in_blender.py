"""Monte UN caisson (n'importe quel code catalogue) via le pipeline HB5 et sauve
un .blend — caisson + matériaux + éclairage + caméra produit — prêt à ouvrir dans
Blender pour DEBUG VISUEL.

But : itérer sur le visuel d'un caisson dans le Blender ouvert (ou en gros plan)
sans passer par le rendu headless à chaque fois. Le .blend contient exactement la
scène du packshot (mêmes matériaux, même rig lumière/caméra, view transform).

Usage :
    cd .claude/skills/render-3d/pipeline
    uv run python scripts/open_in_blender.py --code S8-SP06
    uv run python scripts/open_in_blender.py --code S8-FB30 --finish navi
    uv run python scripts/open_in_blender.py --code S8-DB12 --profile shaker-3 --out D:/x.blend

Puis ouvrir le .blend imprimé (dans Blender : File > Open, ou via MCP
`bpy.ops.wm.open_mainfile(filepath=...)`). Le chemin est aussi écrit dans
`blends/_last.txt` pour un accès rapide.
"""
from __future__ import annotations

import argparse
import json
import subprocess
import tempfile
from pathlib import Path

from render_product_cabinet import (
    DEFAULT_PROFILE,
    DOOR_PROFILES,
    FINISH_VARIANTS,
    QUALITY_SAMPLES,
    build_bootstrap,
    find_blender,
    infer_hb_config,
    slugify_code,
)
from batch_render_parallel import DEFAULT_CATALOG, texture_paths

BLENDS_DIR = Path(__file__).resolve().parent.parent / "blends"


def build_config(code: str, profile: str, finish: str) -> tuple[dict, str]:
    """Construit la config d'UN caisson, alignée exactement sur batch_render_parallel."""
    spec = DOOR_PROFILES[profile]
    finish_spec = FINISH_VARIANTS.get(finish) if finish != "default" else None
    if finish_spec and profile != DEFAULT_PROFILE:
        raise SystemExit("--finish ne se combine pas avec un profil alternatif (navi = shaker-1)")
    suffix = spec["slug_suffix"] + (finish_spec["slug_suffix"] if finish_spec else "")

    catalog = json.loads(DEFAULT_CATALOG.read_text(encoding="utf-8"))
    try:
        prod = next(p for p in catalog["products"] if p["code"] == code)
    except StopIteration:
        raise SystemExit(f"Code introuvable dans le catalogue : {code}")

    cfg = infer_hb_config(prod)
    if finish_spec:
        cfg["finish"] = finish_spec["finish_label"]
        cfg["finish_type"] = finish_spec["finish_type"]
    slug = slugify_code(code) + suffix
    blend_path = str(BLENDS_DIR / f"{slug}.blend")
    cfg.update(
        {
            "output": str(BLENDS_DIR / f"{slug}.png"),  # requis par run_one (non utilisé)
            "save_blend": blend_path,
            "door_profile": profile,
            "shaker_rail_m": spec["rail_m"],
            "samples": QUALITY_SAMPLES["preview"],
            "resolution": [1200, 1200],
            **texture_paths(),
        }
    )
    return cfg, blend_path


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--code", required=True, help="code SKU catalogue, ex. S8-SP06")
    ap.add_argument("--profile", choices=sorted(DOOR_PROFILES), default=DEFAULT_PROFILE)
    ap.add_argument("--finish", choices=["default"] + sorted(FINISH_VARIANTS), default="default")
    ap.add_argument("--out", default="", help="chemin .blend de sortie (défaut : blends/<slug>.blend)")
    args = ap.parse_args(argv)

    BLENDS_DIR.mkdir(parents=True, exist_ok=True)
    cfg, blend_path = build_config(args.code, args.profile, args.finish)
    if args.out:
        blend_path = args.out
        cfg["save_blend"] = blend_path

    bootstrap = build_bootstrap([cfg])
    with tempfile.NamedTemporaryFile(mode="w", suffix=".py", prefix="open_blend_", delete=False, encoding="utf-8") as f:
        f.write(bootstrap)
        script_path = Path(f.name)

    blender = find_blender()
    print(f"[open] {args.code} ({args.profile}/{args.finish}) -> {blend_path}")
    try:
        proc = subprocess.run(
            [str(blender), "--background", "--factory-startup", "--python", str(script_path)],
            text=True,
        )
    finally:
        script_path.unlink(missing_ok=True)

    if proc.returncode != 0 or not Path(blend_path).exists():
        print(f"[open] ECHEC (exit {proc.returncode}) — .blend non produit")
        return 1
    (BLENDS_DIR / "_last.txt").write_text(blend_path, encoding="utf-8")
    print(f"[open] OK -> {blend_path}")
    print("Ouvrir dans Blender :  bpy.ops.wm.open_mainfile(filepath=r\"%s\")" % blend_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
