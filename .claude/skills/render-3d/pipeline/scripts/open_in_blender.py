"""Monte UN caisson (n'importe quel code catalogue) via le pipeline HB5 et sauve
un .blend — caisson + matériaux + éclairage + caméra produit — prêt à ouvrir dans
Blender pour DEBUG VISUEL.

But : itérer sur le visuel d'un caisson dans le Blender ouvert (ou en gros plan)
sans passer par le rendu headless à chaque fois. Le .blend contient exactement la
scène du packshot (mêmes matériaux, même rig lumière/caméra, view transform).

Usage :
    cd .claude/skills/render-3d/pipeline
    uv run python scripts/open_in_blender.py --code S8-SP06 --mcp
    uv run python scripts/open_in_blender.py --code S8-FB30 --finish navi --mcp
    uv run python scripts/open_in_blender.py --code S8-DB15 --mcp --ensure-mcp
    uv run python scripts/open_in_blender.py --code S8-DB12 --profile shaker-3 --out D:/x.blend

Avec `--mcp`, le .blend est chargé dans Blender via BlenderMCP. Sans `--mcp`,
le chemin est imprimé et écrit dans `blends/_last.txt` pour un accès rapide.
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
from blender_mcp_client import DEFAULT_PORT, is_running as mcp_is_running, open_blend as mcp_open_blend

BLENDS_DIR = Path(__file__).resolve().parent.parent / "blends"
BLENDER_MCP_ROOT = Path(r"D:\blender-mcp-main")
BLENDER_MCP_ADDON = BLENDER_MCP_ROOT / "addon.py"


def launch_blender_with_mcp(blender: Path, blend_path: str, port: int) -> None:
    addon_path = BLENDER_MCP_ADDON if BLENDER_MCP_ADDON.is_file() else Path(
        Path.home(),
        "AppData",
        "Roaming",
        "Blender Foundation",
        "Blender",
        "5.1",
        "scripts",
        "addons",
        "addon.py",
    )
    script = (
        "import bpy\n"
        f"addon_path = r'{addon_path}'\n"
        "try:\n"
        "    if addon_path:\n"
        "        bpy.ops.preferences.addon_install(filepath=addon_path, overwrite=True)\n"
        "except Exception as exc:\n"
        "    print('BLENDERMCP_ADDON_INSTALL_WARN', exc)\n"
        "try:\n"
        "    bpy.ops.preferences.addon_enable(module='addon')\n"
        "except Exception as exc:\n"
        "    print('BLENDERMCP_ADDON_ENABLE_WARN', exc)\n"
        f"bpy.ops.wm.open_mainfile(filepath=r'{Path(blend_path).resolve()}')\n"
        f"bpy.context.scene.blendermcp_port = {port}\n"
        "if not bpy.context.scene.blendermcp_server_running:\n"
        "    bpy.ops.blendermcp.start_server()\n"
        "print('BLENDERMCP_READY', bpy.context.scene.blendermcp_port, bpy.data.filepath)\n"
    )
    with tempfile.NamedTemporaryFile(
        mode="w",
        suffix=".py",
        prefix="start_blendermcp_",
        delete=False,
        encoding="utf-8",
    ) as f:
        f.write(script)
        script_path = Path(f.name)
    subprocess.Popen([str(blender), "--python", str(script_path)])


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
    ap.add_argument("--view", choices=["face", "open"], default="face",
                    help="vue packshot : open = tiroirs ouverts (caisses massif visibles)")
    ap.add_argument("--parametric", action="store_true",
                    help="garde les geonodes/drivers HB (défaut : scène FIGÉE en meshes "
                         "statiques — sinon les handlers HB5 du Blender GUI détruisent les "
                         "pièces mutées au chargement et les slots matériaux sont inertes)")
    ap.add_argument("--launch", action="store_true",
                    help="ouvre Blender (GUI) directement sur le .blend une fois monté")
    ap.add_argument("--mcp", action="store_true",
                    help="charge le .blend dans le Blender déjà ouvert via BlenderMCP")
    ap.add_argument("--ensure-mcp", action="store_true",
                    help="avec --mcp: lance Blender + démarre BlenderMCP si aucun serveur n'écoute")
    ap.add_argument("--mcp-port", type=int, default=DEFAULT_PORT,
                    help="port BlenderMCP (défaut: 9876)")
    args = ap.parse_args(argv)

    BLENDS_DIR.mkdir(parents=True, exist_ok=True)
    cfg, blend_path = build_config(args.code, args.profile, args.finish)
    if not args.parametric:
        cfg["blend_static"] = True
    if args.view != "face":
        cfg["view"] = args.view
        blend_path = str(Path(blend_path).with_name(Path(blend_path).stem + "_" + args.view + ".blend"))
        cfg["save_blend"] = blend_path
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
    if args.mcp:
        if mcp_is_running(port=args.mcp_port):
            print(f"[open] chargement via BlenderMCP localhost:{args.mcp_port} ...")
            response = mcp_open_blend(blend_path, port=args.mcp_port)
            if response.get("status") == "error":
                print(f"[open] MCP erreur: {response}")
                return 1
            print(f"[open] MCP OK -> {response.get('result', response)}")
        else:
            if args.ensure_mcp:
                print(
                    f"[open] BlenderMCP non disponible sur localhost:{args.mcp_port}; "
                    "lancement de Blender avec serveur MCP ..."
                )
                launch_blender_with_mcp(blender, blend_path, args.mcp_port)
            else:
                print(
                    f"[open] BlenderMCP non disponible sur localhost:{args.mcp_port}. "
                    "Dans Blender: panneau N > BlenderMCP > Connect to MCP server, "
                    "puis relancer avec --mcp. Pour lancer une instance contrôlable: "
                    "ajouter --ensure-mcp."
                )
                return 2
    elif args.launch:
        # Ouvre Blender (GUI) sur le .blend, sans bloquer le terminal.
        print("[open] lancement de Blender sur le .blend ...")
        subprocess.Popen([str(blender), str(blend_path)])
    else:
        print("Ouvrir dans Blender :  bpy.ops.wm.open_mainfile(filepath=r\"%s\")" % blend_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
