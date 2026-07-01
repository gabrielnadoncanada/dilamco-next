"""Génère une scène Blender PRÊTE À RÉGLER pour le matériau Chêne blanc.

Produit `pipeline/materials/dilamco_materials.blend` : un caisson chêne (S8-DB12-muf)
sous l'éclairage studio + caméra placée + le matériau « Dilamco_Oak_Melamine » déjà
appliqué. Gabriel l'ouvre dans Blender (GUI), passe le viewport en RENDU, règle le
matériau à la perfection, et SAUVEGARDE (Ctrl+S, même fichier). Le pipeline charge
ensuite CE matériau tel quel (cf. build_oak_material → material_lib).

    cd .claude/skills/render-3d/pipeline
    uv run python scripts/make_material_studio.py
    # puis ouvrir le .blend imprimé à la fin dans Blender
"""
import subprocess, sys, tempfile, os
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPTS))
from render_product_cabinet import (
    infer_hb_config, build_bootstrap, find_blender, load_product,
    QUALITY_SAMPLES, DEFAULT_CATALOG, REPO_ROOT,
)
from batch_render_parallel import texture_paths

MAT_DIR = REPO_ROOT / "materials"
MAT_DIR.mkdir(parents=True, exist_ok=True)
BLEND = MAT_DIR / "dilamco_materials.blend"
HDRI_DIR = REPO_ROOT / "hdris"
SCRATCH = Path(os.environ.get("TEMP", "/tmp")) / "dilamco_matstudio.png"

# Caisson chêne représentatif (grandes faces = grain bien visible).
base = infer_hb_config(load_product(DEFAULT_CATALOG, "S8-DB12-muf"))
tex = texture_paths()
# Point de départ = le swatch RÉEL Chêne blanc Dilamco (couleur + relief de grain).
# material_lib vide → on CONSTRUIT le matériau (Gabriel part de ça et le règle).
cfg = dict(base)
cfg.update(tex)
cfg.update({
    "output": str(SCRATCH),
    "samples": QUALITY_SAMPLES["preview"],
    "resolution": [1100, 1100],
    "hdri": str(HDRI_DIR / "studio_kontrast_03_2k.exr"),
    "hdri_strength": 1.0, "hdri_rotation_deg": 235.0, "exposure": -0.1,
    "door_profile": "shaker-1", "shaker_rail_m": 0.0254,
    "oak_diff": str(REPO_ROOT / "textures" / "chene_blanc_real.jpg"),
    "oak_normal": "",                      # pas de normal map → Bump dérivé du grain
    "oak_rough": str(REPO_ROOT / "textures" / "oak_veneer_01_rough_2k.jpg"),
    "oak_scale": 1.6,
    "material_lib": "",
})

bootstrap = build_bootstrap([cfg])
# Après le build/rendu : garder le matériau (fake user) et SAUVEGARDER la scène.
bootstrap += f'''
import bpy
m = bpy.data.materials.get("Dilamco_Oak_Melamine")
if m:
    m.use_fake_user = True
bpy.ops.wm.save_as_mainfile(filepath=r"{BLEND}")
print("[material-studio] SAVED " + r"{BLEND}", flush=True)
'''

with tempfile.NamedTemporaryFile(mode="w", suffix=".py", delete=False, encoding="utf-8") as f:
    f.write(bootstrap); bp = f.name
print("Construction de la scène studio…", flush=True)
proc = subprocess.run([str(find_blender()), "--background", "--factory-startup", "--python", bp],
                      capture_output=True, text=True, errors="replace")
os.unlink(bp)
ok = "SAVED" in proc.stdout and BLEND.is_file()
print(("OK -> " if ok else "ECHEC -> ") + str(BLEND), flush=True)
if not ok:
    print(proc.stdout[-2000:], proc.stderr[-1500:], flush=True)
