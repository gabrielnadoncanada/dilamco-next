"""Rendu catalogue en PARALLÈLE : N sessions Blender concurrentes.

Le coût dominant d'un rendu produit n'est pas l'échantillonnage Cycles (l'adaptive
sampling s'arrête tôt sur des façades blanches) mais la CONSTRUCTION de la scène
Home Builder (CPU) — pendant laquelle le GPU est inactif. En lançant N process
Blender en parallèle, la construction CPU de l'un recouvre le rendu GPU de l'autre :
débit ~2-2,5x sur une seule carte (RTX 4070).

Chaque worker rend une tranche disjointe de produits dans UNE session Blender
(build_bootstrap accepte une liste → hard_reset entre items). La conversion
PNG -> .webp + atténuation d'ombre se fait ici. Le manifest est reconstruit À LA
FIN depuis les fichiers rendus, donc les workers ne se battent jamais dessus.

Usage :
    uv run python scripts/batch_render_parallel.py --workers 3 --quality preview
    uv run python scripts/batch_render_parallel.py --only S8-DB12,S8-DB15
"""

from __future__ import annotations

import argparse
import json
import subprocess
import tempfile
import threading
import time
from pathlib import Path

from render_product_cabinet import (
    DEFAULT_PROFILE,
    DOOR_PROFILES,
    FLAT_CATEGORIES,
    QUALITY_SAMPLES,
    RENDERABLE_CATEGORIES,
    apply_shadow_postprocess,
    build_bootstrap,
    find_blender,
    infer_hb_config,
    slugify_code,
)

REPO_ROOT = Path(__file__).resolve().parent.parent
# Cible = site live dilamco-next (catalogue + manifest sous lib/shop/).
STORE_ROOT = Path(r"C:/laragon/www/dilamco-next")
DEFAULT_CATALOG = STORE_ROOT / "lib" / "shop" / "catalog-products.json"
DEFAULT_OUT_DIR = STORE_ROOT / "public" / "assets" / "products" / "renders"
DEFAULT_MANIFEST = STORE_ROOT / "lib" / "shop" / "render-manifest.json"


def is_renderable(p: dict) -> bool:
    if not p.get("visible"):
        return False
    # Dimensions manquantes → rien à modéliser (roll-out, charnière, certains
    # panneaux de retour) : placeholder côté site.
    if p.get("w") is None or p.get("h") is None or p.get("d") is None:
        return False
    cat = p.get("category")
    return (
        cat in RENDERABLE_CATEGORIES
        or cat in FLAT_CATEGORIES
        or "-Door" in p.get("code", "")
    )


def texture_paths() -> dict:
    hdri = REPO_ROOT / "hdris" / "studio_kontrast_03_2k.exr"
    if not hdri.is_file():
        hdri = REPO_ROOT / "hdris" / "brown_photostudio_02_2k.exr"
    white_nor = REPO_ROOT / "textures" / "laminate_floor_02_nor_gl_2k.jpg"
    return {
        "hdri": str(hdri) if hdri.is_file() else "",
        "hdri_strength": 1.0,
        "hdri_rotation_deg": 235.0,
        "material_lib": str(REPO_ROOT / "materials" / "dilamco_materials.blend"),
        "oak_diff": str(REPO_ROOT / "textures" / "oak_veneer_01_diff_2k.jpg"),
        "oak_rough": str(REPO_ROOT / "textures" / "oak_veneer_01_rough_2k.jpg"),
        "white_rough": str(REPO_ROOT / "textures" / "laminate_floor_02_rough_2k.jpg"),
        "white_nor": str(white_nor) if white_nor.is_file() else "",
    }


def run_worker(idx: int, configs: list[dict], blender: Path, out_dir: Path, state: dict, lock: threading.Lock) -> None:
    """Une session Blender qui rend séquentiellement sa tranche de configs."""
    bootstrap = build_bootstrap(configs)
    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".py", prefix=f"parallel_render_w{idx}_", delete=False, encoding="utf-8"
    ) as f:
        f.write(bootstrap)
        bootstrap_path = Path(f.name)
    try:
        proc = subprocess.Popen(
            [str(blender), "--background", "--factory-startup", "--python", str(bootstrap_path)],
            cwd=REPO_ROOT,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            errors="replace",
        )
        assert proc.stdout is not None
        for line in proc.stdout:
            line = line.strip()
            if "BATCH_OK " in line:
                code = line.split("BATCH_OK ", 1)[1].strip()
                png = out_dir / f"{slugify_code(code)}{state['suffix']}_face.png"
                if png.is_file():
                    try:
                        apply_shadow_postprocess(png, png.with_suffix(".webp"))
                        png.unlink(missing_ok=True)
                    except Exception as exc:
                        print(f"[w{idx}] webp/ombre KO {code}: {exc}", flush=True)
                with lock:
                    state["done"] += 1
                    d = state["done"]
                    el = time.time() - state["t0"]
                    eta = (el / max(d, 1)) * (state["total"] - d) / 60
                    print(f"[{d}/{state['total']}] OK {code}  ({el/max(d,1):.1f}s/img, ETA ~{eta:.0f} min)", flush=True)
            elif "BATCH_FAIL " in line:
                with lock:
                    state["failed"] += 1
                    print(f"[w{idx}] ECHEC {line.split('BATCH_FAIL ', 1)[1]}", flush=True)
        proc.wait(timeout=1200)
    finally:
        bootstrap_path.unlink(missing_ok=True)


def rebuild_manifest(catalog: dict, out_dir: Path, manifest_path: Path) -> int:
    manifest = (
        json.loads(manifest_path.read_text(encoding="utf-8"))
        if manifest_path.is_file()
        else {"_convention": "/assets/products/renders/<slug>_<view>.webp", "products": {}}
    )
    products = manifest.setdefault("products", {})
    mapped = 0
    pruned = 0
    for p in catalog.get("products", []):
        code = p["code"]
        if not is_renderable(p):
            # Produit visible mais non rendable (trim, accessoire, dims
            # manquantes) : retirer toute entrée pour qu'il tombe sur le
            # placeholder « image à venir » côté site.
            if code in products:
                del products[code]
                pruned += 1
            continue
        slug = slugify_code(code)
        # Reconstruit les vues depuis les fichiers présents, PAR PROFIL : le défaut
        # (shaker-1) -> `face` ; les autres -> `face@<profil>` (lu par la couche
        # variantes du site). On préserve les vues d'autres profils déjà mappées
        # (un batch shaker-3 ne doit pas effacer le `face` shaker-1, et vice versa)
        # ainsi que la vue `technique` si elle existe.
        entry = products.get(code, {})
        had_any = False
        for prof, spec in DOOR_PROFILES.items():
            view = spec["manifest_view"]
            webp = out_dir / f"{slug}{spec['slug_suffix']}_face.webp"
            if webp.is_file():
                entry[view] = f"/assets/products/renders/{slug}{spec['slug_suffix']}_face.webp"
                had_any = True
            elif view in entry:
                # Fichier disparu pour ce profil : retirer la vue obsolète.
                del entry[view]
        if had_any:
            products[code] = entry
            mapped += 1
        elif code in products:
            del products[code]
            pruned += 1
    if pruned:
        print(f"[parallel] {pruned} entrées élaguées (non-rendables -> placeholder)", flush=True)
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    # Cache-busting : grave `?v=<hash-contenu>` sur chaque URL (cf.
    # stamp_manifest_hashes). Le bloc ci-dessus a réécrit des URLs « nues »,
    # donc on (re)hashe ici à partir des .webp fraîchement produits.
    from stamp_manifest_hashes import stamp_manifest
    stamped = stamp_manifest(manifest_path, out_dir)
    print(f"[parallel] cache-bust : {stamped} URL(s) hashée(s) (?v=)", flush=True)
    return mapped


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--catalog", type=Path, default=DEFAULT_CATALOG)
    ap.add_argument("--out-dir", type=Path, default=DEFAULT_OUT_DIR)
    ap.add_argument("--manifest", type=Path, default=DEFAULT_MANIFEST)
    ap.add_argument("--workers", type=int, default=3)
    ap.add_argument("--quality", default="preview", choices=sorted(QUALITY_SAMPLES))
    ap.add_argument("--resolution", type=int, default=1200)
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--only", type=str, default="")
    ap.add_argument("--force", action="store_true", help="re-rendre même si le .webp existe")
    ap.add_argument(
        "--profile",
        choices=sorted(DOOR_PROFILES),
        default=DEFAULT_PROFILE,
        help="profil de porte : shaker-1 (1 po, défaut) ou shaker-3 (3 po). "
        "Les profils non-défaut ne s'appliquent qu'au Blanc Pur (codes non -muf).",
    )
    args = ap.parse_args(argv)

    profile = args.profile
    spec = DOOR_PROFILES[profile]
    suffix = spec["slug_suffix"]

    catalog = json.loads(args.catalog.read_text(encoding="utf-8"))
    products = [p for p in catalog.get("products", []) if is_renderable(p)]
    if profile != DEFAULT_PROFILE:
        # Seul le Blanc Pur a des profils alternatifs (le Chêne = -muf, shaker-1
        # uniquement). On ne rend donc le profil alternatif que pour le blanc.
        products = [p for p in products if not p["code"].endswith("-muf")]
    if args.only:
        wanted = {c.strip() for c in args.only.split(",") if c.strip()}
        products = [p for p in products if p["code"] in wanted]

    args.out_dir.mkdir(parents=True, exist_ok=True)
    tex = texture_paths()
    samples = QUALITY_SAMPLES[args.quality]

    pending: list[dict] = []
    for p in products:
        slug = slugify_code(p["code"])
        if not args.force and (args.out_dir / f"{slug}{suffix}_face.webp").is_file():
            continue
        cfg = infer_hb_config(p)
        cfg.update(
            {
                "output": str(args.out_dir / f"{slug}{suffix}_face.png"),
                "door_profile": profile,
                "shaker_rail_m": spec["rail_m"],
                "samples": samples,
                "resolution": [args.resolution, args.resolution],
                **tex,
            }
        )
        pending.append(cfg)

    if args.limit:
        pending = pending[: args.limit]

    total_renderable = len(products)
    print(
        f"[parallel] {total_renderable} produits rendables, {len(pending)} à rendre "
        f"({total_renderable - len(pending)} déjà présents) ; {args.workers} workers, "
        f"qualité {args.quality} ({samples} samples), {args.resolution}px",
        flush=True,
    )

    if pending:
        # Répartition round-robin pour équilibrer la charge entre workers.
        n = max(1, args.workers)
        slices: list[list[dict]] = [[] for _ in range(n)]
        for i, cfg in enumerate(pending):
            slices[i % n].append(cfg)
        slices = [s for s in slices if s]

        blender = find_blender()
        state = {"done": 0, "failed": 0, "total": len(pending), "t0": time.time(), "suffix": suffix}
        lock = threading.Lock()
        threads = [
            threading.Thread(target=run_worker, args=(i, s, blender, args.out_dir, state, lock))
            for i, s in enumerate(slices)
        ]
        for t in threads:
            t.start()
        for t in threads:
            t.join()
        print(
            f"[parallel] rendu terminé : {state['done']} ok, {state['failed']} échecs "
            f"en {(time.time() - state['t0']) / 60:.1f} min",
            flush=True,
        )

    mapped = rebuild_manifest(catalog, args.out_dir, args.manifest)
    print(f"[parallel] manifest reconstruit : {mapped} produits mappés -> {args.manifest}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
