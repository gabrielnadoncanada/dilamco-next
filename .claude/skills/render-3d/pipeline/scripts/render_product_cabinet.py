"""Render one catalog cabinet as a product image using Home Builder 5.

This script is a launcher. It runs normal Python first, loads one product from
the Dilamco catalog JSON, then starts Blender headless and executes the real
HB5 scene build inside Blender's Python.

Example (le --catalog par défaut = le catalogue du projet, dérivé du chemin du
script ; --output reste requis) :
    uv run python scripts/render_product_cabinet.py ^
      --product-code S8-BMC27 ^
      --output ../../../../public/assets/products/renders/s8-bmc27_face.png
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parent.parent

DEFAULT_BLENDER_PATHS = [
    Path(r"D:/Blender 5.1/blender.exe"),
    Path("/Applications/Blender.app/Contents/MacOS/Blender"),
    Path("/usr/local/bin/blender"),
    Path("/usr/bin/blender"),
    Path("/opt/blender/blender"),
]

WORKSPACE_SRCS = [
    REPO_ROOT / "packages" / "kitchen-spec" / "src",
    REPO_ROOT / "apps" / "worker" / "src",
]

# Racine du projet dérivée de l'emplacement du script, pas un chemin en dur
# (…/dilamco-next/.claude/skills/render-3d/pipeline/scripts/<ce fichier>).
DEFAULT_CATALOG = Path(__file__).resolve().parents[5] / "lib" / "shop" / "catalog-products.json"

QUALITY_SAMPLES = {
    "fast": 24,
    "preview": 32,
    "standard": 64,
    "final": 256,
}

#: Profils de porte (style) rendables. `rail_m` = largeur du montant/traverse
#: shaker (mètres) ; `slug_suffix` = suffixe de fichier (le défaut shaker-1 garde
#: le slug nu, donc les rendus existants ne bougent pas) ; `manifest_view` = clé
#: dans le manifest (le défaut s'écrit sur `face`, les autres sur `face@<id>` lu
#: par la couche variantes du site). Ajouter un style = une ligne ici.
DOOR_PROFILES = {
    "shaker-1": {"rail_m": 0.0254, "slug_suffix": "", "manifest_view": "face"},
    "shaker-3": {"rail_m": 0.0762, "slug_suffix": "_s3", "manifest_view": "face@shaker-3"},
}
DEFAULT_PROFILE = "shaker-1"

#: Finis ALTERNATIFS rendus par-dessus le MÊME code catalogue (pas de ligne
#: xlsx dédiée, contrairement au chêne `-muf`). Le rendu vit dans un fichier
#: suffixé (`<slug>_navi_face.webp`) et sur la vue manifest `face@<fini>`, lue
#: par la couche variantes du site (models.ts). `category_prefixes` borne le
#: batch aux catégories qui offrent réellement ce fini.
#: navi = mélamine bleu marine, texture RÉELLE (échantillon photo navi_real_flat.png),
#: offert sur les caissons du bas (cuisine + vanités) — décision Gabriel 2026-07-03.
FINISH_VARIANTS = {
    "navi": {
        "finish_type": "navi",
        "finish_label": "Navi",
        "slug_suffix": "_navi",
        "manifest_view": "face@navi",
        "category_prefixes": ("base-", "bathroom-base-"),
    },
}


def find_blender() -> Path:
    env = os.environ.get("BLENDER")
    if env:
        p = Path(env)
        if p.is_file():
            return p
        raise SystemExit(f"BLENDER points to a missing file: {env}")

    in_path = shutil.which("blender")
    if in_path:
        return Path(in_path)

    for candidate in DEFAULT_BLENDER_PATHS:
        if candidate.is_file():
            return candidate

    raise SystemExit("Blender was not found. Set BLENDER=<path/to/blender.exe>.")


def load_product(catalog_path: Path, product_code: str | None) -> dict[str, Any]:
    data = json.loads(catalog_path.read_text(encoding="utf-8"))
    products = data.get("products", [])
    if not products:
        raise SystemExit(f"No products found in {catalog_path}")

    if product_code:
        product = next((p for p in products if p.get("code") == product_code), None)
        if product is None:
            raise SystemExit(f"Product {product_code!r} not found in {catalog_path}")
        return product

    product = next((p for p in products if p.get("visible")), None)
    if product is None:
        raise SystemExit(f"No visible product found in {catalog_path}")
    return product


def slugify_code(code: str) -> str:
    """Nom de fichier stable et lisible depuis un code SKU.

    F9-B12 -> f9-b12 ; F9-FSB33*19.75(10-1/8) -> f9-fsb33x19-75-10-1-8.
    `*` devient x (multiplication de dimensions), tout autre séparateur
    devient un tiret unique, sans tiret en tête/queue.
    """
    import re

    s = code.lower().replace("*", "x")
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


#: Catégories du catalogue rendables comme caissons HB.
RENDERABLE_CATEGORIES = {
    "wall-cabinet-standard",
    "wall-cabinet-microwave",
    "wall-cabinet-corner-45deg",
    "upper-refrigerator",
    "base-cabinet-standard",
    "base-cabinet-drawer",
    "base-cabinet-corner",
    "base-cabinet-spice-rack-pull-out",
    "base-cabinet-garbage-pull-out",
    "base-cabinet-farmhouse-sink",
    "base-microwave-cabinet",
    "bathroom-base-cabinet-drawer",
    "bathroom-base-cabinet-sink",
    "utility-cabinet-pantry",
    # Taxonomie actuelle du catalogue (catalog.xlsx) :
    "standard",            # muraux et bas génériques (tranché par nom/profondeur)
    "corner",              # coins muraux aveugles (WBC)
    "microwave",           # muraux avec espace micro-ondes
    "pantry",              # garde-manger (TALL via hauteur >= 70)
}

#: Pièces plates rendues comme simples planches (mode « flat ») : mêmes
#: matériaux et même éclairage que les caissons, sans Home Builder.
FLAT_CATEGORIES = {
    "fillers-base-wall-tall-filler",
    "dummy-door-base-end",
    "panel-refrigerator-return-panel",
    "panel-dishwasher-return-panel",
    "toe-kick",
    "moldings-outside-corner-molding",
    # Taxonomie actuelle du catalogue (catalog.xlsx) : seulement les panneaux
    # « pleins » qui se lisent en 3D. Les trims linéaires (fillers, moulures,
    # coups-de-pied, panneaux de retour) ne sont QUE des lamelles/traits en 3D
    # (illisibles, blanc sur blanc) → exclus du rendu, placeholder côté site.
    "dummy-door",
    "island-back-panel",
    "island-side-panel",
    "wall-end-panel",
}


def infer_hb_config(product: dict[str, Any]) -> dict[str, Any]:
    category = str(product.get("category") or "").lower()
    code = str(product.get("code") or "")
    name = str(product.get("name") or "").lower()
    extra: dict[str, Any] = {}
    doors = int(product.get("doors") or 0)
    drawers = int(product.get("drawers") or 0)
    width_in = float(product.get("w") or 24)
    height_in = float(product.get("h") or 34.5)
    depth_in = float(product.get("d") or 24)

    # Pièces plates (fillers, panneaux, moulures, portes de remplacement) :
    # rendues comme planches, pas comme caissons.
    if category in FLAT_CATEGORIES or "-Door" in code:
        # Les pièces longues encodées « hauteur 96" » (plinthes, fillers
        # pleine hauteur) se présentent mieux à l'horizontale.
        if height_in > 60 and width_in < 12:
            width_in, height_in = height_in, width_in
        finish = str(product.get("finish") or "")
        is_oak = code.endswith("-muf") or finish == "Chêne blanc"
        # Portes (fausses portes dummy-door + portes de remplacement) = shaker
        # 5 pièces, pas un slab — pour matcher les caissons shaker (blanc ET chêne).
        if category == "dummy-door" or "-Door" in code:
            extra["flat_style"] = "shaker"
        return {
            **extra,
            "code": code,
            "name": product.get("name"),
            "category": product.get("category"),
            "render_mode": "flat",
            "finish": finish or ("Chêne blanc" if is_oak else "Blanc Pur"),
            "finish_type": "oak" if is_oak else "white",
            "width_m": width_in * 0.0254,
            "height_m": height_in * 0.0254,
            "depth_m": max(depth_in, 0.625) * 0.0254,
            "doors": 0,
            "drawers": 0,
            "cabinet_type": "FLAT",
            "cabinet_name": "Flat Panel",
            "front_layout": "NONE",
        }

    finish = str(product.get("finish") or "")
    is_oak = code.endswith("-muf") or finish == "Chêne blanc"

    # Caisson à DÉCHETS coulissant (poubelle/recyclage) : VRAI caisson HB natif
    # "Base Garbage Pull-Out" = tiroir utilitaire EN HAUT + pull-out pleine
    # largeur EN BAS (logement des bacs). Doit primer sur le pull-out générique.
    if "garbage" in category:
        return {
            "code": code,
            "name": product.get("name"),
            "category": product.get("category"),
            "finish": finish or ("Chêne blanc" if is_oak else "Blanc Pur"),
            "finish_type": "oak" if is_oak else "white",
            "width_m": width_in * 0.0254,
            "height_m": height_in * 0.0254,
            "depth_m": depth_in * 0.0254,
            "doors": doors,
            "drawers": drawers,
            "cabinet_type": "BASE",
            "cabinet_name": "Base Garbage Pull-Out",
            "front_layout": "NONE",
        }

    # Caissons COULISSANTS (range-épices) : VRAI caisson HB natif
    # "Base Spice Rack" (façade Pullout poignée en haut + TOE-KICK géré par HB).
    # La façade Pullout se dimensionne en headless grâce au run_calc_fix final
    # ajouté dans run_one (cf. front_layout="NONE" qui saute son propre calc).
    if "pull-out" in category:
        return {
            "code": code,
            "name": product.get("name"),
            "category": product.get("category"),
            "finish": finish or ("Chêne blanc" if is_oak else "Blanc Pur"),
            "finish_type": "oak" if is_oak else "white",
            "width_m": width_in * 0.0254,
            "height_m": height_in * 0.0254,
            "depth_m": depth_in * 0.0254,
            "doors": doors,
            "drawers": drawers,
            "cabinet_type": "BASE",
            "cabinet_name": "Base Spice Rack",
            "front_layout": "NONE",
        }

    # Micro-ondes muraux (WBL) : géométrie custom (caisson mural, niche + portes).
    if category == "microwave":
        return {
            "code": code,
            "name": product.get("name"),
            "category": product.get("category"),
            "render_mode": "microwave",
            "finish": finish or ("Chêne blanc" if is_oak else "Blanc Pur"),
            "finish_type": "oak" if is_oak else "white",
            "width_m": width_in * 0.0254,
            "height_m": height_in * 0.0254,
            "depth_m": depth_in * 0.0254,
            "doors": doors,
            "drawers": drawers,
            "cabinet_type": "BASE",
            "cabinet_name": "Custom",
            "front_layout": "NONE",
        }

    # Base micro-ondes (BMC) : vrai caisson HB "Base Microwave" (niche ouverte en
    # haut + tiroir en bas + toe-kick), pas un simple tiroir plat.
    if category == "base-microwave-cabinet":
        return {
            "code": code,
            "name": product.get("name"),
            "category": product.get("category"),
            "finish": finish or ("Chêne blanc" if is_oak else "Blanc Pur"),
            "finish_type": "oak" if is_oak else "white",
            "width_m": width_in * 0.0254,
            "height_m": height_in * 0.0254,
            "depth_m": depth_in * 0.0254,
            "doors": doors,
            "drawers": drawers,
            "cabinet_type": "BASE",
            "cabinet_name": "Base Microwave",
            "front_layout": "NONE",
        }

    # COINS MORTS (blind corner) — aucun équivalent natif HB (HB n'a que pie cut
    # et diagonal). Géométrie custom : carcasse ouverte en haut (traverse avant
    # bouleau seulement), ouverture blind + montant central frame + porte overlay.
    cu = code.upper()
    is_ls = "-LS" in cu
    is_bbc = category == "base-cabinet-corner" and not is_ls
    # Toute la catégorie `corner` (WBC blind + WDC diagonal) → coin mort custom
    # (rendu propre ; HB diagonal/blind ne tient pas en headless).
    is_wall_corner = category == "corner"
    if is_bbc or is_wall_corner:
        return {
            "code": code,
            "name": product.get("name"),
            "category": product.get("category"),
            "render_mode": "blind_corner",
            "finish": finish or ("Chêne blanc" if is_oak else "Blanc Pur"),
            "finish_type": "oak" if is_oak else "white",
            "width_m": width_in * 0.0254,
            "height_m": height_in * 0.0254,
            "depth_m": depth_in * 0.0254,
            "doors": doors,
            "drawers": drawers,
            "cabinet_type": "BASE" if is_bbc else "UPPER",
            "cabinet_name": "Blind Corner",
            "front_layout": "NONE",
        }

    if category == "wall-cabinet-corner-45deg":
        # Coin mural 45° : vraie géométrie diagonale (pie cut HB).
        # Empreinte carrée : les deux ailes du L = la largeur.
        cabinet_type = "UPPER"
        cabinet_name = "Pie Cut Corner Upper"
        front_layout = "NONE"
        depth_in = width_in
    elif category.startswith("wall-cabinet") or category.startswith("upper-"):
        # Caissons muraux : "dessus de réfrigérateur" (upper-refrigerator), etc.
        # Peu hauts mais parfois profonds, montés au mur. Pas de toe-kick (UPPER).
        cabinet_type = "UPPER"
        cabinet_name = "Upper"
        front_layout = "DOUBLE_DOORS" if (doors >= 2 or width_in >= 24) else "RIGHT_DOOR"
    elif category.startswith("utility-cabinet") or height_in >= 70:
        cabinet_type = "TALL"
        cabinet_name = "Tall"
        # Garde-manger : sous 24 po les "2 portes" du catalogue sont empilées
        # (haut/bas), pas côte à côte.
        front_layout = "DOUBLE_STACKED_DOOR" if width_in >= 24 else "RIGHT_STACKED_DOOR"
    elif category == "base-cabinet-drawer" or (drawers and not doors):
        cabinet_type = "BASE"
        cabinet_name = "Base Drawer"
        front_layout = {1: "SINGLE_DRAWER", 2: "2_DRAWER_STACK", 4: "4_DRAWER_STACK"}.get(drawers, "3_DRAWER_STACK")
    elif category == "base-cabinet-farmhouse-sink":
        # Caisson d'évier de ferme : classe HB dédiée (BaseSinkCabinet) qui pose
        # le tablier d'évier (Base Top Construction=Sink) et met les portes SOUS
        # le tablier. Le caisson construit ses propres façades → front_layout NONE.
        cabinet_type = "BASE"
        cabinet_name = "Base Sink"
        front_layout = "NONE"
    elif category == "base-cabinet-corner":
        # Lazy susan (LS) → pie cut HB natif. (Le BBC blind est géré plus haut.)
        cabinet_type = "BASE"
        cabinet_name = "Pie Cut Corner Base"
        front_layout = "NONE"
        depth_in = width_in
    elif category == "corner":
        # Coin mural DIAGONAL (WDC) → vrai caisson HB diagonal. (Le WBC blind est
        # géré plus haut en custom.)
        cabinet_type = "UPPER"
        cabinet_name = "Diagonal Corner Upper"
        front_layout = "NONE"
        depth_in = width_in
    elif category == "standard":
        # Catégorie générique du catalogue : surtout des caissons muraux
        # ("du haut", profondeur 12"). Le nom et la profondeur tranchent.
        if "du haut" in name or depth_in <= 14:
            cabinet_type = "UPPER"
            cabinet_name = "Upper"
            front_layout = "DOUBLE_DOORS" if (doors >= 2 or width_in >= 24) else "RIGHT_DOOR"
        else:
            cabinet_type = "BASE"
            cabinet_name = "Base Door"
            front_layout = "DOUBLE_DOORS" if (doors >= 2 or width_in >= 24) else "RIGHT_DOOR"
    else:
        # base-cabinet-standard et défaut.
        cabinet_type = "BASE"
        if drawers and doors:
            cabinet_name = "Base Door Drw"
            front_layout = "DOOR_DRAWER" if (doors == 1 and width_in < 24) else "1_DRAWER_2_DOOR"
        elif drawers:
            cabinet_name = "Base Drawer"
            front_layout = "2_DRAWER_STACK" if drawers == 2 else "3_DRAWER_STACK"
        else:
            cabinet_name = "Base Door"
            front_layout = "DOUBLE_DOORS" if (doors >= 2 or width_in >= 24) else "RIGHT_DOOR"

    # Finition : les SKU -muf sont en mélamine Chêne blanc ; le reste est peint
    # Blanc Pur. Dans les deux cas la porte est shaker 5 pièces, rail 1 po
    # (préférence Gabriel : tous les caissons en shaker 1 po, blanc ET chêne).
    finish = str(product.get("finish") or "")
    is_oak = code.endswith("-muf") or finish == "Chêne blanc"

    return {
        "code": code,
        "name": product.get("name"),
        "category": product.get("category"),
        "finish": finish or ("Chêne blanc" if is_oak else "Blanc Pur"),
        "finish_type": "oak" if is_oak else "white",
        "width_m": width_in * 0.0254,
        "height_m": height_in * 0.0254,
        "depth_m": depth_in * 0.0254,
        "doors": doors,
        "drawers": drawers,
        "cabinet_type": cabinet_type,
        "cabinet_name": cabinet_name,
        "front_layout": front_layout,
        **extra,
    }


def build_bootstrap(config: dict[str, Any]) -> str:
    paths_repr = ", ".join(repr(str(p)) for p in WORKSPACE_SRCS)
    config_json = json.dumps(config, ensure_ascii=True)
    template = """
import math
import sys
from pathlib import Path

for p in [__PATHS_REPR__]:
    if p not in sys.path:
        sys.path.insert(0, p)

import bpy
from bpy_extras.object_utils import world_to_camera_view
from mathutils import Vector, Matrix

CONFIG = __CONFIG_JSON_REPR__
CONFIG = __import__("json").loads(CONFIG)


def log(msg):
    print("[product-render] " + str(msg), flush=True)


def enable_hb5():
    bpy.ops.preferences.addon_enable(module="bl_ext.blender_org.home_builder_5")
    from bl_ext.blender_org.home_builder_5 import hb_project
    # L'opérateur de placement scriptable n'est plus enregistré par l'addon
    # (sous-classer un opérateur enregistré casse le drag-drop interactif :
    # "unable to get Python class for RNA struct"). On l'enregistre nous-mêmes,
    # uniquement dans ce process headless où le parent n'est jamais invoqué.
    try:
        from bl_ext.blender_org.home_builder_5.product_libraries.frameless.operators import (
            ops_placement as _opl,
        )
        if not hasattr(bpy.types, "HB_FRAMELESS_OT_place_cabinet_script"):
            bpy.utils.register_class(_opl.hb_frameless_OT_place_cabinet_script)
        log("Registered place_cabinet_script (headless)")
    except Exception as exc:
        log("register place_cabinet_script failed: " + str(exc))
    main_scene = hb_project.ensure_main_scene()
    main_scene.hb_frameless.ensure_default_style()
    bpy.context.window.scene = main_scene
    log("HB5 ready on scene " + main_scene.name)
    return main_scene


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    for datablocks in (
        bpy.data.meshes,
        bpy.data.curves,
        bpy.data.lights,
        bpy.data.cameras,
    ):
        for item in list(datablocks):
            if item.users == 0:
                datablocks.remove(item)


def find_cabinet():
    cabinets = [o for o in bpy.data.objects if o.get("IS_FRAMELESS_CABINET_CAGE")]
    if not cabinets:
        raise RuntimeError("HB5 did not create an IS_FRAMELESS_CABINET_CAGE object")
    return cabinets[-1]


def select_only(obj):
    for item in bpy.data.objects:
        item.select_set(False)
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj


def apply_front_layout(cabinet, opening_type):
    if opening_type == "NONE":
        return  # pie cuts : HB gère ses propres façades bi-pliantes
    bays = [c for c in cabinet.children_recursive if c.get("IS_FRAMELESS_BAY_CAGE")]
    if not bays:
        log("No HB bay found; front layout unchanged")
        return
    for bay in bays:
        select_only(bay)
        try:
            bpy.ops.hb_frameless.change_bay_opening(opening_type=opening_type)
            log("Applied HB opening " + opening_type + " on " + bay.name)
        except Exception as exc:
            log("Opening " + opening_type + " failed on " + bay.name + ": " + str(exc))
    # Les façades créées par change_bay_opening (pullouts notamment) gardent
    # leur taille par défaut tant que les drivers HB n'ont pas été recalculés.
    try:
        from bl_ext.blender_org.home_builder_5 import hb_utils
        hb_utils.run_calc_fix(bpy.context, cabinet, passes=2)
        log("run_calc_fix applied")
    except Exception as exc:
        log("run_calc_fix failed: " + str(exc))


def apply_hb_style(main_scene, cabinet):
    from kitchen_spec import Style
    from worker.builders.style_builder import StyleBuilder

    # Use HB's available default style. Missing enum values are ignored by HB
    # and logged by StyleBuilder.
    if CONFIG.get("finish_type") in ("oak", "navi"):
        # Mélamines (Chêne blanc, Navi) : porte SHAKER 5 pièces (cadre 1 po), comme
        # le blanc (préférence Gabriel : tous les caissons en shaker 1 po). Le vrai
        # matériau est injecté dans les geonodes plus loin (normalize_product_materials).
        style = Style(
            cabinet_style="Default Style",
            wood_species="CUSTOM_PROCEDURAL",
            interior_material_type="MAPLE_PLY",
            door_overlay_type="FULL",
            door_style="Door Style 1",
            door_type="5_PIECE",
            shaker_rail_width=CONFIG.get("shaker_rail_m", 0.0254),
            pull_finish="MATTE_BLACK",
        )
    else:
        # Blanc Pur : paint grade Arctic White, porte shaker 5 pièces.
        style = Style(
            cabinet_style="Default Style",
            wood_species="PAINT_GRADE",
            paint_color="Arctic White",
            interior_material_type="MAPLE_PLY",
            door_overlay_type="FULL",
            door_style="Door Style 1",
            door_type="5_PIECE",
            shaker_rail_width=CONFIG.get("shaker_rail_m", 0.0254),
            pull_finish="MATTE_BLACK",
        )
    summary = StyleBuilder().apply(style, bpy_module=bpy)
    log("Style summary: " + repr(summary))


def build_white_material():
    # "Blanc Pur" réaliste : jamais un blanc pur — off-white légèrement chaud,
    # avec une micro-variation de roughness (texture Polyhaven remappée dans
    # une plage étroite) qui casse les reflets, et un normal très faible.
    name = "Dilamco_White_Painted"
    mat = bpy.data.materials.get(name)
    if mat:
        return mat
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    for node in list(nt.nodes):
        nt.nodes.remove(node)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    # 0.72 quasi neutre : à 0.64 + exposure -0.25 les façades sortaient à ~203
    # de luminance = grises sur la fiche produit (feedback Gabriel 2026-07-01) ;
    # à 0.75 avec le HDRI tourné à 270° À PLEINE FORCE la façade saturait au
    # niveau du fond (241). Depuis le rig Y2 (HDRI 0.5, banc 2026-07-12) il y a
    # de la marge : l'albédo est paramétrable (--white-rgb) pour régler la
    # blancheur du MATÉRIAU sans toucher l'exposition (chêne/navi intacts).
    # L'ancien (0.64, 0.635, 0.615) tirait aussi vers le crème.
    white_rgb = tuple(CONFIG.get("white_rgb", (0.72, 0.716, 0.705)))
    bsdf.inputs["Base Color"].default_value = (*white_rgb, 1.0)
    if "Coat Weight" in bsdf.inputs:
        bsdf.inputs["Coat Weight"].default_value = 0.12
        bsdf.inputs["Coat Roughness"].default_value = 0.22
    if "Specular IOR Level" in bsdf.inputs:
        bsdf.inputs["Specular IOR Level"].default_value = 0.35

    texco = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping")
    mapping.inputs["Scale"].default_value = (0.7, 0.7, 0.7)
    nt.links.new(texco.outputs["Object"], mapping.inputs["Vector"])

    rough = nt.nodes.new("ShaderNodeTexImage")
    rough.image = bpy.data.images.load(CONFIG["white_rough"], check_existing=True)
    rough.image.colorspace_settings.name = "Non-Color"
    rough.projection = "BOX"
    rough.projection_blend = 0.25
    remap = nt.nodes.new("ShaderNodeMapRange")
    remap.inputs["To Min"].default_value = 0.26
    remap.inputs["To Max"].default_value = 0.48
    nt.links.new(mapping.outputs["Vector"], rough.inputs["Vector"])
    nt.links.new(rough.outputs["Color"], remap.inputs["Value"])
    nt.links.new(remap.outputs["Result"], bsdf.inputs["Roughness"])

    nor_path = CONFIG.get("white_nor") or ""
    if nor_path and Path(nor_path).is_file():
        nor = nt.nodes.new("ShaderNodeTexImage")
        nor.image = bpy.data.images.load(nor_path, check_existing=True)
        nor.image.colorspace_settings.name = "Non-Color"
        nor.projection = "BOX"
        nor.projection_blend = 0.25
        nmap = nt.nodes.new("ShaderNodeNormalMap")
        nmap.inputs["Strength"].default_value = 0.08
        nt.links.new(mapping.outputs["Vector"], nor.inputs["Vector"])
        nt.links.new(nor.outputs["Color"], nmap.inputs["Color"])
        nt.links.new(nmap.outputs["Normal"], bsdf.inputs["Normal"])

    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat


def build_oak_material():
    # Chêne blanc. PRIORITÉ : si une librairie de matériaux existe (réglée À LA
    # MAIN dans Blender par Gabriel), on charge SON matériau « Dilamco_Oak_Melamine »
    # tel quel — c'est la source de vérité. Sinon, fallback procédural ci-dessous.
    name = "Dilamco_Oak_Melamine"
    mat = bpy.data.materials.get(name)
    if mat:
        return mat
    libpath = CONFIG.get("material_lib") or ""
    if libpath and Path(libpath).is_file():
        try:
            with bpy.data.libraries.load(libpath, link=False) as (src, dst):
                if name in src.materials:
                    dst.materials = [name]
            m = bpy.data.materials.get(name)
            if m:
                log("Chêne: matériau chargé depuis la librairie " + libpath)
                return m
            log("Chêne: '" + name + "' absent de la librairie, fallback procédural")
        except Exception as exc:
            log("Chêne: échec chargement librairie (" + str(exc) + "), fallback procédural")
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    for node in list(nt.nodes):
        nt.nodes.remove(node)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    texco = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping")
    scale = float(CONFIG.get("oak_scale", 2.2))
    mapping.inputs["Scale"].default_value = (scale, scale, scale)
    nt.links.new(texco.outputs["Object"], mapping.inputs["Vector"])

    def box_img(path, non_color):
        n = nt.nodes.new("ShaderNodeTexImage")
        n.image = bpy.data.images.load(path, check_existing=True)
        if non_color:
            n.image.colorspace_settings.name = "Non-Color"
        n.projection = "BOX"
        n.projection_blend = 0.12  # couture box plus nette (évite les « chips » de coin)
        nt.links.new(mapping.outputs["Vector"], n.inputs["Vector"])
        return n

    # ALBEDO (vrai PBR ambientCG). Teinte optionnelle (multiply) pour accorder le
    # placage à la teinte exacte du Chêne blanc Dilamco sans perdre le grain.
    diff = box_img(CONFIG["oak_diff"], False)
    color_out = diff.outputs["Color"]
    # HSV : désaturer / éclaircir le placage vers le ton exact du Chêne blanc.
    hsv = nt.nodes.new("ShaderNodeHueSaturation")
    hsv.inputs["Hue"].default_value = float(CONFIG.get("oak_hue", 0.5))
    hsv.inputs["Saturation"].default_value = float(CONFIG.get("oak_sat", 1.0))
    hsv.inputs["Value"].default_value = float(CONFIG.get("oak_val", 1.0))
    nt.links.new(color_out, hsv.inputs["Color"])
    color_out = hsv.outputs["Color"]
    tint = CONFIG.get("oak_tint")
    if tint:
        mix = nt.nodes.new("ShaderNodeMixRGB")
        mix.blend_type = "MULTIPLY"
        mix.inputs["Fac"].default_value = 1.0
        mix.inputs["Color2"].default_value = (tint[0], tint[1], tint[2], 1.0)
        nt.links.new(color_out, mix.inputs["Color1"])
        color_out = mix.outputs["Color"]
    nt.links.new(color_out, bsdf.inputs["Base Color"])

    # ROUGHNESS
    rough = box_img(CONFIG["oak_rough"], True)
    nt.links.new(rough.outputs["Color"], bsdf.inputs["Roughness"])

    # RELIEF du grain (sort du « sticker plat »). Si on a une vraie normal map PBR
    # on l'utilise ; sinon (swatch photo) on dérive un Bump de la luminance de
    # l'albedo → le grain devient du relief réel, calé sur CE grain.
    nor_path = CONFIG.get("oak_normal") or ""
    if nor_path and Path(nor_path).is_file():
        nor = box_img(nor_path, True)
        nmap = nt.nodes.new("ShaderNodeNormalMap")
        nmap.inputs["Strength"].default_value = float(CONFIG.get("oak_normal_strength", 0.6))
        nt.links.new(nor.outputs["Color"], nmap.inputs["Color"])
        nt.links.new(nmap.outputs["Normal"], bsdf.inputs["Normal"])
    else:
        bump = nt.nodes.new("ShaderNodeBump")
        bump.inputs["Strength"].default_value = float(CONFIG.get("oak_bump_strength", 0.30))
        bump.inputs["Distance"].default_value = 0.0015
        bump.invert = True  # grain foncé = creux
        nt.links.new(diff.outputs["Color"], bump.inputs["Height"])
        nt.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])

    if "Specular IOR Level" in bsdf.inputs:
        bsdf.inputs["Specular IOR Level"].default_value = 0.3
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat


def build_navi_material():
    # Mélamine « Navi » (bleu marine) : l'albédo est l'ÉCHANTILLON PHOTO RÉEL
    # (navi_real_flat.png) box-mappé — pas un aplat. PRIORITÉ : matériau réglé à la
    # main dans la librairie (« Dilamco_Navi_Melamine »), comme le chêne ; sinon
    # fallback ci-dessous : photo + roughness satinée micro-variée (même texture
    # que le blanc, plage un peu plus basse : la mélamine foncée reflète plus) +
    # normal très faible.
    name = "Dilamco_Navi_Melamine"
    mat = bpy.data.materials.get(name)
    if mat:
        return mat
    libpath = CONFIG.get("material_lib") or ""
    if libpath and Path(libpath).is_file():
        try:
            with bpy.data.libraries.load(libpath, link=False) as (src, dst):
                if name in src.materials:
                    dst.materials = [name]
            m = bpy.data.materials.get(name)
            if m:
                log("Navi: matériau chargé depuis la librairie " + libpath)
                return m
            log("Navi: '" + name + "' absent de la librairie, fallback photo")
        except Exception as exc:
            log("Navi: échec chargement librairie (" + str(exc) + "), fallback photo")
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    for node in list(nt.nodes):
        nt.nodes.remove(node)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    texco = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping")
    scale = float(CONFIG.get("navi_scale", 1.4))
    mapping.inputs["Scale"].default_value = (scale, scale, scale)
    nt.links.new(texco.outputs["Object"], mapping.inputs["Vector"])

    diff = nt.nodes.new("ShaderNodeTexImage")
    diff.image = bpy.data.images.load(CONFIG["navi_diff"], check_existing=True)
    diff.projection = "BOX"
    diff.projection_blend = 0.12
    nt.links.new(mapping.outputs["Vector"], diff.inputs["Vector"])
    # HSV de calibration (mêmes leviers que le chêne). Défauts = recette N1 du
    # banc 2026-07-12 : le rendu neutre (sat 1.0/val 1.0) sortait sat 41 % —
    # marine criard — vs 4-12 % mesuré sur les photos showroom (le tonemap
    # amplifie les ratios de canaux dans les tons foncés). sat 0.5 + val 1.6
    # → façade RGB ~(48,54,61), pile sur l'échantillon réel navi_real_flat.png.
    hsv = nt.nodes.new("ShaderNodeHueSaturation")
    hsv.inputs["Hue"].default_value = float(CONFIG.get("navi_hue", 0.5))
    hsv.inputs["Saturation"].default_value = float(CONFIG.get("navi_sat", 0.5))
    hsv.inputs["Value"].default_value = float(CONFIG.get("navi_val", 1.6))
    nt.links.new(diff.outputs["Color"], hsv.inputs["Color"])
    nt.links.new(hsv.outputs["Color"], bsdf.inputs["Base Color"])

    # Roughness FRANCHEMENT MATE, plage resserrée. Trois leçons (feedback
    # Gabriel 2026-07-03) :
    # 1) plage large = reflets qui tachettent (« nuagé ») sur un fini foncé ;
    # 2) roughness basse/satinée = le reflet RASANT du HDRI éclaircit le panneau
    #    latéral au-dessus de la façade (mesuré : côté 63-90 vs façade ~40) ;
    # 3) un drapeau noir assez grand pour tuer ce reflet écrase aussi le GI.
    # → mate (0.60-0.68) + spéculaire bas : le côté redevient piloté par
    # l'albédo, la hiérarchie façade>côté suit le rig comme le blanc. La vraie
    # mélamine navi est mate de toute façon.
    rough_path = CONFIG.get("white_rough") or ""
    if rough_path and Path(rough_path).is_file():
        rough = nt.nodes.new("ShaderNodeTexImage")
        rough.image = bpy.data.images.load(rough_path, check_existing=True)
        rough.image.colorspace_settings.name = "Non-Color"
        rough.projection = "BOX"
        rough.projection_blend = 0.25
        remap = nt.nodes.new("ShaderNodeMapRange")
        remap.inputs["To Min"].default_value = 0.60
        remap.inputs["To Max"].default_value = 0.68
        nt.links.new(mapping.outputs["Vector"], rough.inputs["Vector"])
        nt.links.new(rough.outputs["Color"], remap.inputs["Value"])
        nt.links.new(remap.outputs["Result"], bsdf.inputs["Roughness"])
    else:
        bsdf.inputs["Roughness"].default_value = 0.64

    nor_path = CONFIG.get("white_nor") or ""
    if nor_path and Path(nor_path).is_file():
        nor = nt.nodes.new("ShaderNodeTexImage")
        nor.image = bpy.data.images.load(nor_path, check_existing=True)
        nor.image.colorspace_settings.name = "Non-Color"
        nor.projection = "BOX"
        nor.projection_blend = 0.25
        nmap = nt.nodes.new("ShaderNodeNormalMap")
        nmap.inputs["Strength"].default_value = 0.10
        nt.links.new(mapping.outputs["Vector"], nor.inputs["Vector"])
        nt.links.new(nor.outputs["Color"], nmap.inputs["Color"])
        nt.links.new(nmap.outputs["Normal"], bsdf.inputs["Normal"])

    if "Specular IOR Level" in bsdf.inputs:
        # Quasi nul : chaque point de spéculaire éclaircit le CÔTÉ en incidence
        # rasante (Fresnel) et inverse la hiérarchie façade>côté sur un foncé.
        bsdf.inputs["Specular IOR Level"].default_value = 0.05
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat


def build_finish_material():
    # Matériau EXTÉRIEUR du caisson selon le fini (façades, côtés, toe-kick,
    # géométrie custom). Point unique de dispatch — ajouter un fini = un cas ici
    # + son builder.
    ft = CONFIG.get("finish_type")
    if ft == "oak":
        return build_oak_material()
    if ft == "navi":
        return build_navi_material()
    return build_white_material()


def material(name, color, roughness=0.5, metallic=0.0, coat=0.0, specular=None):
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    for node in list(nodes):
        nodes.remove(node)
    out = nodes.new(type="ShaderNodeOutputMaterial")
    bsdf = nodes.new(type="ShaderNodeBsdfPrincipled")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Roughness"].default_value = roughness
    if "Metallic" in bsdf.inputs:
        bsdf.inputs["Metallic"].default_value = metallic
    if coat and "Coat Weight" in bsdf.inputs:
        bsdf.inputs["Coat Weight"].default_value = coat
        bsdf.inputs["Coat Roughness"].default_value = 0.18
    if specular is not None and "Specular IOR Level" in bsdf.inputs:
        bsdf.inputs["Specular IOR Level"].default_value = specular
    mat.node_tree.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat


def build_maple_interior():
    # Érable/bouleau INTÉRIEUR (boîtes de tiroir, fonds, coins, niches). PRIORITÉ :
    # le matériau réglé À LA MAIN par Gabriel dans la librairie .blend (texture
    # réelle + relief) ; sinon, aplat de secours (ancien comportement).
    # TOUT l'intérieur (fond, côtés, plancher) passe par build_shelf_material :
    # défaut BlenderKit Plywood PBR, fallback texture_boxe si le .blend manque.
    # Repli : « Dilamco_Maple_Bottom » de la librairie (erable_fond.jpg,
    # uniforme) puis aplat. Ne PAS revenir à Dilamco_Product_Maple_Interior
    # (erable_real.jpg) : joints de planche photographiés → motif répété.
    # (Garde anti-récursion : build_shelf_material replie sur CETTE fonction
    # quand shelf_diff manque — on ne l'appelle que si la texture existe.)
    shelf_path = CONFIG.get("shelf_diff") or ""
    if shelf_path and Path(shelf_path).is_file():
        return build_shelf_material()
    name = "Dilamco_Maple_Bottom"
    mat = bpy.data.materials.get(name)
    if mat:
        return mat
    libpath = CONFIG.get("material_lib") or ""
    if libpath and Path(libpath).is_file():
        try:
            with bpy.data.libraries.load(libpath, link=False) as (src, dst):
                if name in src.materials:
                    dst.materials = [name]
            m = bpy.data.materials.get(name)
            if m and m.use_nodes:
                for node in m.node_tree.nodes:
                    if node.type == "MAPPING":
                        node.inputs["Scale"].default_value = (0.8, 0.8, 0.8)
                log("Érable: matériau librairie Maple_Bottom (échelle 0.8)")
                return m
            if m:
                log("Érable: matériau chargé depuis la librairie")
                return m
        except Exception as exc:
            log("Érable: échec chargement librairie (" + str(exc) + "), aplat")
    return material(name, (0.74, 0.66, 0.50, 1), 0.55)


def load_blenderkit_plywood_material(target_name):
    blend_path = CONFIG.get("blenderkit_plywood_blend") or ""
    if not blend_path or not Path(blend_path).is_file():
        return None
    src_name = CONFIG.get("blenderkit_plywood_material", "Plywood")
    try:
        if not bpy.data.materials.get(src_name):
            with bpy.data.libraries.load(blend_path, link=False) as (src, dst):
                if src_name not in src.materials:
                    log("BlenderKit plywood: matériau absent du blend: " + src_name)
                    return None
                dst.materials = [src_name]
        src_mat = bpy.data.materials.get(src_name)
        if not src_mat:
            return None
        mat = src_mat.copy()
        mat.name = target_name
        mat.use_fake_user = False
        # Le matériau BlenderKit vient déjà avec diffuse/roughness/normal/bump.
        # Ajustement minimal: garder l'échelle fournie, mais réduire tout shader
        # trop brillant si une version d'asset change.
        if mat.use_nodes:
            nt = mat.node_tree
            texco = None
            mapping = None
            for node in nt.nodes:
                if node.type == "TEX_COORD" and texco is None:
                    texco = node
                elif node.type == "MAPPING" and mapping is None:
                    mapping = node
            if texco is None:
                texco = nt.nodes.new("ShaderNodeTexCoord")
            if mapping is None:
                mapping = nt.nodes.new("ShaderNodeMapping")
            mapping.inputs["Scale"].default_value = (
                float(CONFIG.get("blenderkit_plywood_scale_x", 1.0)),
                float(CONFIG.get("blenderkit_plywood_scale_y", 1.0)),
                float(CONFIG.get("blenderkit_plywood_scale_z", 1.0)),
            )
            for link in list(nt.links):
                if link.to_node == mapping and link.to_socket == mapping.inputs["Vector"]:
                    nt.links.remove(link)
            nt.links.new(texco.outputs["Object"], mapping.inputs["Vector"])
            for node in nt.nodes:
                if node.type == "TEX_IMAGE":
                    node.projection = "BOX"
                    node.projection_blend = 0.22
                    node.extension = "REPEAT"
                    node.interpolation = "Cubic"
                    for link in list(nt.links):
                        if link.to_node == node and link.to_socket == node.inputs["Vector"]:
                            nt.links.remove(link)
                    nt.links.new(mapping.outputs["Vector"], node.inputs["Vector"])
            for node in mat.node_tree.nodes:
                if node.type == "BSDF_PRINCIPLED":
                    if "Metallic" in node.inputs:
                        node.inputs["Metallic"].default_value = 0.0
                    if "Roughness" in node.inputs and not node.inputs["Roughness"].is_linked:
                        node.inputs["Roughness"].default_value = 0.68
            # Calibration couleur vers le BOULEAU réel Dilamco (photos sample :
            # drawer.jpg neutre = RGB ~(208,195,177), sat ~24 %). Le rendu du
            # Plywood 2K natif sortait (188,176,165) sat 15 % = terne/sombre.
            # HSV inséré entre la source du Base Color et le BSDF.
            bk_sat = float(CONFIG.get("blenderkit_plywood_sat", 1.4))
            bk_val = float(CONFIG.get("blenderkit_plywood_val", 1.28))
            bk_hue = float(CONFIG.get("blenderkit_plywood_hue", 0.5))
            if abs(bk_sat - 1.0) > 1e-3 or abs(bk_val - 1.0) > 1e-3 or abs(bk_hue - 0.5) > 1e-3:
                for node in mat.node_tree.nodes:
                    if node.type != "BSDF_PRINCIPLED":
                        continue
                    base = node.inputs["Base Color"]
                    if base.is_linked:
                        src_sock = base.links[0].from_socket
                        hsv = nt.nodes.new("ShaderNodeHueSaturation")
                        hsv.inputs["Hue"].default_value = bk_hue
                        hsv.inputs["Saturation"].default_value = bk_sat
                        hsv.inputs["Value"].default_value = bk_val
                        nt.links.remove(base.links[0])
                        nt.links.new(src_sock, hsv.inputs["Color"])
                        nt.links.new(hsv.outputs["Color"], base)
        log("BlenderKit plywood: " + target_name + " <- " + Path(blend_path).name)
        return mat
    except Exception as exc:
        log("BlenderKit plywood: échec chargement (" + str(exc) + "), fallback local")
        return None


def build_shelf_material():
    # Bois de l'INTÉRIEUR (fond, côtés intérieurs, plancher, tablettes).
    # Défaut actuel: matériau BlenderKit Plywood 2K (diffuse + roughness + normal),
    # plus crédible que les anciennes images couleur seules. Fallback: texture_boxe.
    name = "Dilamco_Product_Shelf_Birch"
    mat = bpy.data.materials.get(name)
    if mat:
        return mat
    blenderkit_mat = load_blenderkit_plywood_material(name)
    if blenderkit_mat:
        return blenderkit_mat
    path = CONFIG.get("shelf_diff") or ""
    if not path or not Path(path).is_file():
        return material(name, (0.82, 0.74, 0.58, 1), 0.55)  # fallback bouleau pâle uni
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    for node in list(nt.nodes):
        nt.nodes.remove(node)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.inputs["Roughness"].default_value = float(CONFIG.get("shelf_roughness", 0.58))
    texco = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping")
    shelf_scale = float(CONFIG.get("shelf_scale", 1.35))
    mapping.inputs["Scale"].default_value = (shelf_scale, shelf_scale, shelf_scale)
    nt.links.new(texco.outputs["Object"], mapping.inputs["Vector"])
    diff = nt.nodes.new("ShaderNodeTexImage")
    diff.image = bpy.data.images.load(path, check_existing=True)
    diff.projection = "BOX"
    diff.projection_blend = 0.25
    nt.links.new(mapping.outputs["Vector"], diff.inputs["Vector"])
    hsv = nt.nodes.new("ShaderNodeHueSaturation")
    hsv.inputs["Hue"].default_value = float(CONFIG.get("shelf_hue", 0.5))
    hsv.inputs["Saturation"].default_value = float(CONFIG.get("shelf_sat", 0.96))
    hsv.inputs["Value"].default_value = float(CONFIG.get("shelf_val", 0.93))
    nt.links.new(diff.outputs["Color"], hsv.inputs["Color"])
    nt.links.new(hsv.outputs["Color"], bsdf.inputs["Base Color"])
    bump_strength = float(CONFIG.get("shelf_bump_strength", 0.004))
    if bump_strength > 0:
        bump = nt.nodes.new("ShaderNodeBump")
        bump.inputs["Strength"].default_value = bump_strength
        bump.inputs["Distance"].default_value = float(CONFIG.get("shelf_bump_distance", 0.004))
        nt.links.new(diff.outputs["Color"], bump.inputs["Height"])
        nt.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    log("Intérieur/tablettes: bouleau showroom BOX " + Path(path).name)
    return mat


def build_drawerbox_material():
    # Caisses de tiroir / plateaux roll-out = même famille plywood PBR que
    # l'intérieur. Ça évite les conflits de couleur entre caisson/tiroir/chant.
    name = "Dilamco_Drawer_Box_Solid"
    mat = bpy.data.materials.get(name)
    if mat:
        return mat
    blenderkit_mat = load_blenderkit_plywood_material(name)
    if blenderkit_mat:
        return blenderkit_mat
    path = CONFIG.get("drawerbox_diff") or ""
    if not path or not Path(path).is_file():
        return build_shelf_material()  # repli : bouleau intérieur
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    for node in list(nt.nodes):
        nt.nodes.remove(node)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.inputs["Roughness"].default_value = float(CONFIG.get("drawerbox_roughness", 0.70))
    texco = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping")
    mapping.inputs["Scale"].default_value = (
        float(CONFIG.get("drawerbox_scale_x", 1.00)),
        float(CONFIG.get("drawerbox_scale_y", 1.00)),
        float(CONFIG.get("drawerbox_scale_z", 2.90)),
    )
    nt.links.new(texco.outputs["Object"], mapping.inputs["Vector"])
    diff = nt.nodes.new("ShaderNodeTexImage")
    diff.image = bpy.data.images.load(path, check_existing=True)
    diff.projection = "BOX"
    diff.projection_blend = 0.15
    nt.links.new(mapping.outputs["Vector"], diff.inputs["Vector"])
    hsv = nt.nodes.new("ShaderNodeHueSaturation")
    hsv.inputs["Hue"].default_value = float(CONFIG.get("drawerbox_hue", 0.5))
    hsv.inputs["Saturation"].default_value = float(CONFIG.get("drawerbox_sat", 0.95))
    hsv.inputs["Value"].default_value = float(CONFIG.get("drawerbox_val", 0.94))
    nt.links.new(diff.outputs["Color"], hsv.inputs["Color"])
    nt.links.new(hsv.outputs["Color"], bsdf.inputs["Base Color"])
    bump = nt.nodes.new("ShaderNodeBump")
    bump.inputs["Strength"].default_value = float(CONFIG.get("drawerbox_bump_strength", 0.008))
    bump.inputs["Distance"].default_value = float(CONFIG.get("drawerbox_bump_distance", 0.007))
    nt.links.new(diff.outputs["Color"], bump.inputs["Height"])
    nt.links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    log("Caisses de tiroir: texture BOX " + Path(path).name)
    return mat


def assign_material(obj, mat):
    if not getattr(obj, "data", None):
        return
    if obj.data.materials:
        obj.data.materials[0] = mat
    else:
        obj.data.materials.append(mat)


def set_geonode_materials(obj, mat):
    # CABINET_PART meshes get their materials through GeoNode modifier inputs (pas
    # les slots). On règle CHAQUE input de type NodeSocketMaterial via l'interface
    # du groupe — Y COMPRIS ceux laissés à None. PIÈGE (boîtes de tiroir blanches) :
    # GeoNodeDrawerBox expose un input « Material » à None par défaut, et son node
    # Set Material y est LIÉ → boîte SANS matériau → rendue blanche. L'ancienne
    # version n'échangeait que les inputs déjà non-None → cet input restait None.
    count = 0
    for mod in obj.modifiers:
        if mod.type != "NODES" or not mod.node_group:
            continue
        for item in mod.node_group.interface.items_tree:
            if (
                getattr(item, "item_type", "") == "SOCKET"
                and getattr(item, "in_out", "") == "INPUT"
                and getattr(item, "socket_type", "") == "NodeSocketMaterial"
            ):
                try:
                    mod[item.identifier] = mat
                    count += 1
                except Exception:
                    continue
    return count


def _is_pull(obj):
    # Vraie poignée vs façade. PIÈGE : "Pullout Front" contient "pull" → on ne
    # peut PAS détecter par sous-chaîne de nom (sinon on bake la façade Pullout =
    # géométrie détruite). Une façade n'est jamais une poignée.
    if obj.get("IS_CABINET_FRONT") or obj.get("IS_PULLOUT_FRONT"):
        return False
    if obj.get("IS_CABINET_PULL"):
        return True
    n = obj.name.lower()
    return "pullout" not in n and any(k in n for k in ("pull", "handle", "knob"))


def normalize_product_materials(cabinet):
    # HB5 owns the geometry. This pass only fixes product-render readability:
    # white should not clip, pulls must be black, and orphan source handles
    # should never render.
    # Aligné sur build_white_material (plus clair, quasi neutre) — même raison :
    # blanc « gris/crème » sur la fiche produit à l'ancienne valeur.
    white = material("Dilamco_Product_White_Satin", (0.80, 0.795, 0.783, 1), 0.34, coat=0.10)
    # Érable clair (blonde), peu saturé — évite le rebond chaud sur le toe-kick.
    maple = build_maple_interior()
    black = material("Dilamco_Product_Matte_Black_Pull", (0.015, 0.015, 0.015, 1), 0.80, 0.0, specular=0.05)
    # Intérieur = érable/bouleau naturel par défaut — réalité Dilamco : extérieur
    # blanc OU chêne, mais intérieur en contreplaqué naturel (confirmé par les
    # photos showroom).
    interior_mat = maple
    # EXCEPTION micro-ondes : la NICHE d'électro est finie mélamine au fini
    # extérieur (blanc→blanc, chêne→chêne), pas en bouleau brut (précision Gabriel
    # 2026-07-02). Vaut pour le caisson base micro-ondes (niche ouverte en haut).
    is_microwave = CONFIG.get("category") in ("microwave", "base-microwave-cabinet")
    if is_microwave:
        # Niche au fini extérieur (blanc satin pour le blanc ; chêne/navi sinon).
        interior_mat = white if CONFIG.get("finish_type") == "white" else build_finish_material()

    # HB's pull finish materials use metallic=1.0, which mirrors the HDRI sky
    # and reads as stainless instead of matte black. Tame the existing material
    # in place (the geonode pulls reference it through their source object).
    for mat in bpy.data.materials:
        if not mat.name.startswith("Pull Finish -") or not mat.use_nodes:
            continue
        for node in mat.node_tree.nodes:
            if node.type == "BSDF_PRINCIPLED":
                node.inputs["Metallic"].default_value = 0.35
                node.inputs["Roughness"].default_value = 0.55

    # Pas de quincaillerie sur les packshots (préférence Gabriel 2026-07-01) :
    # toutes les poignées HB sont masquées au rendu, jamais bakées.
    for obj in cabinet.children_recursive:
        if obj.type != "MESH" or not _is_pull(obj):
            continue
        obj.hide_render = True
        obj.hide_viewport = True
        log("pull masqué <- " + obj.name)

    cabinet_names = {cabinet.name} | {c.name for c in cabinet.children_recursive}
    for obj in bpy.data.objects:
        lname = obj.name.lower()
        if obj.name not in cabinet_names and _is_pull(obj):
            # Hidden, but still the live source for geonode pull instances: the
            # rendered pulls inherit this object's material.
            assign_material(obj, black)
            obj.hide_render = True
            obj.hide_viewport = True

    for obj in [cabinet] + list(cabinet.children_recursive):
        # HB uses visible mesh cages as parametric controls. They are useful in
        # the viewport, but they should not appear in product renders.
        if obj.get("IS_GEONODE_CAGE"):
            obj.hide_render = True
            obj.hide_viewport = True
            continue
        if obj.type != "MESH":
            continue
        lname = obj.name.lower()
        if _is_pull(obj):
            obj.hide_render = True
            obj.hide_viewport = True
            continue
        elif "toe" in lname:
            # Same finish as the cabinet: the recess reads through its natural
            # shadow, not through a fake dark paint.
            finish_mat = white if CONFIG.get("finish_type") == "white" else build_finish_material()
            swapped = set_geonode_materials(obj, finish_mat)
            log("mat finish <- " + obj.name + " (" + str(swapped) + " geonode inputs)")
        elif obj.get("IS_FRAMELESS_INTERIOR_PART") or (
            "toe" not in lname and any(k in lname for k in ("shelf", "back", "bottom", "interior", "tray", "top"))
        ):
            # Le DESSOUS du caisson (« Bottom ») rebondit sa couleur sur le
            # toe-kick en retrait → reflet crème sur les caissons blancs
            # (feedback Gabriel 2026-07-01). Invisible portes fermées : on le
            # peint blanc sur les caissons blancs. (Une lampe d'appoint kick a
            # été essayée : elle délave le tiroir du bas, rejetée.)
            if is_microwave:
                # Niche micro-ondes : parois au fini extérieur. Caisses de tiroir =
                # bouleau (pas blanches) mais masquées en vue face (débordent parfois
                # du caisson après recalage HB).
                if obj.get("IS_DRAWER_BOX") or "drawer box" in lname:
                    assign_material(obj, build_drawerbox_material())
                    if CONFIG.get("category") == "base-microwave-cabinet":
                        obj.hide_render = True
                        obj.hide_viewport = True
                else:
                    assign_material(obj, interior_mat)
            elif CONFIG.get("finish_type") != "oak" and "bottom" in lname:
                # Finis peints/mélamine unis (blanc, navi) : le dessous prend le
                # fini extérieur (évite le rebond crème/érable sur le toe-kick).
                assign_material(
                    obj,
                    white if CONFIG.get("finish_type") == "white" else build_finish_material(),
                )
            elif "top" in lname:
                # DESSUS carcasse = contreplaqué BOULEAU (comme la photo réf. + les
                # vrais caissons Dilamco : caisson en contreplaqué bouleau russe,
                # bois visible côtés/fond/dessus). Vaut pour muraux ET bas.
                assign_material(obj, build_shelf_material())
            elif obj.get("IS_DRAWER_BOX"):
                # Caisses de tiroir + plateaux = bois chaud lisse, assorti au bouleau intérieur.
                assign_material(obj, build_drawerbox_material())
            elif "shelf" in lname or "tray" in lname:
                # Tablettes = bouleau miel showroom.
                assign_material(obj, build_shelf_material())
            else:
                assign_material(obj, interior_mat)
        elif obj.get("IS_CABINET_FRONT") or any(k in lname for k in ("door", "drawer", "front", "side", "stretcher")):
            assign_material(obj, white)
        else:
            log("mat unchanged <- " + obj.name + " (render=" + str(not obj.hide_render) + ")")

        if not any(m.type == "BEVEL" for m in obj.modifiers):
            bevel = obj.modifiers.new("product edge radius", "BEVEL")
            # Arête ARRONDIE (eased edge) ~1,8 mm : capte un liseré lumière/ombre sur
            # les bords du shaker (arêtes « qui roulent la lumière » comme les photos
            # produit pro) au lieu d'une arête vive/plate. 3 segments = arrondi lisse.
            bevel.width = 0.0014
            bevel.segments = 3
            bevel.use_clamp_overlap = True
        if not any(m.type == "WEIGHTED_NORMAL" for m in obj.modifiers):
            obj.modifiers.new("product weighted normals", "WEIGHTED_NORMAL")

    # Injection du matériau dans les geonodes (le shader CabinetWood de HB ignore
    # nos réglages au rendu headless). Pièces EXTÉRIEURES → fini (chêne/navi/blanc) ;
    # pièces INTÉRIEURES (tablettes, fond, dessous, boîtes/plateaux) → érable —
    # l'intérieur n'est JAMAIS au fini de la façade.
    finish_mat = build_finish_material()
    for obj in cabinet.children_recursive:
        if obj.type != "MESH" or obj.get("IS_GEONODE_CAGE"):
            continue
        if _is_pull(obj):
            continue
        lname = obj.name.lower()
        is_interior = obj.get("IS_FRAMELESS_INTERIOR_PART") or (
            "toe" not in lname and any(k in lname for k in ("shelf", "back", "bottom", "interior", "tray", "top"))
        )
        # Mêmes exceptions que plus haut : « Bottom » blanc sur caisson blanc
        # (reflet crème du toe-kick) ; tablettes/tiroirs + DESSUS carcasse = bouleau
        # (dessus bois visible d'en haut, comme la photo réf.). La niche micro-ondes
        # fait exception : tout au fini (interior_mat = fini ici).
        if is_interior and is_microwave:
            inject = interior_mat
        elif is_interior and CONFIG.get("finish_type") != "oak" and "bottom" in lname:
            inject = finish_mat
        elif is_interior and "top" in lname:
            # Dessus carcasse = contreplaqué bouleau (muraux ET bas).
            inject = build_shelf_material()
        elif is_interior and obj.get("IS_DRAWER_BOX"):
            inject = build_drawerbox_material()
        elif is_interior and ("shelf" in lname or "tray" in lname):
            inject = build_shelf_material()
        elif is_interior:
            inject = interior_mat
        else:
            inject = finish_mat
        swapped = set_geonode_materials(obj, inject)
        if swapped:
            assign_material(obj, inject)


def world_bbox(root):
    pts = []
    for obj in [root] + list(root.children_recursive):
        if obj.type != "MESH" or obj.hide_render:
            continue
        for corner in obj.bound_box:
            pts.append(obj.matrix_world @ Vector(corner))
    if not pts:
        raise RuntimeError("Cannot frame product; cabinet bbox is empty")
    return (
        Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts))),
        Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts))),
    )


def _own_bbox(o):
    # Bbox monde de l'objet SEUL (sans ses enfants) — contrairement à world_bbox
    # qui agrège les enfants. Indispensable pour les façades : la boîte de tiroir
    # (profonde) est enfant de la façade et fausserait son Y arrière.
    cs = [o.matrix_world @ Vector(c) for c in o.bound_box]
    return (
        Vector((min(c.x for c in cs), min(c.y for c in cs), min(c.z for c in cs))),
        Vector((max(c.x for c in cs), max(c.y for c in cs), max(c.z for c in cs))),
    )


def _frame_slab(name, x0, x1, y0, y1, z0, z1, mat, cabinet):
    # Petit pavé plein (membre de cadre) parenté au caisson.
    import bmesh
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    for xx in (x0, x1):
        for yy in (y0, y1):
            for zz in (z0, z1):
                bm.verts.new((xx, yy, zz))
    bmesh.ops.convex_hull(bm, input=bm.verts)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    ob.data.materials.append(mat)
    ob.parent = cabinet
    ob.matrix_parent_inverse = cabinet.matrix_world.inverted()
    bev = ob.modifiers.new("edge", "BEVEL")
    bev.width = 0.0008
    bev.segments = 2
    bev.use_clamp_overlap = True
    return ob


def _frame_union(name, rects, y0, y1, mat, cabinet):
    # Cadre complet en UN SEUL mesh. Les rectangles X/Z (rails + montants) sont
    # unionnés sur une grille; on ne crée des faces latérales que sur le contour
    # exposé. Le bevel est limité aux angles réels, donc aucune couture visuelle
    # aux jonctions rail/montant.
    xs = sorted({v for r in rects for v in (r[0], r[1])})
    zs = sorted({v for r in rects for v in (r[2], r[3])})

    filled = set()
    for ix in range(len(xs) - 1):
        for iz in range(len(zs) - 1):
            cx = (xs[ix] + xs[ix + 1]) / 2.0
            cz = (zs[iz] + zs[iz + 1]) / 2.0
            if any(x0 <= cx <= x1 and z0 <= cz <= z1 for x0, x1, z0, z1 in rects):
                filled.add((ix, iz))

    verts = []
    faces = []

    def v(x, y, z):
        verts.append((x, y, z))
        return len(verts) - 1

    def add_face(points):
        faces.append([v(x, y, z) for x, y, z in points])

    for ix, iz in filled:
        x0, x1 = xs[ix], xs[ix + 1]
        z0, z1 = zs[iz], zs[iz + 1]
        # Front/back faces. Coplanar cell edges are not beveled because the bevel
        # modifier below is angle-limited.
        add_face([(x0, y0, z0), (x1, y0, z0), (x1, y0, z1), (x0, y0, z1)])
        add_face([(x1, y1, z0), (x0, y1, z0), (x0, y1, z1), (x1, y1, z1)])
        if (ix - 1, iz) not in filled:
            add_face([(x0, y1, z0), (x0, y0, z0), (x0, y0, z1), (x0, y1, z1)])
        if (ix + 1, iz) not in filled:
            add_face([(x1, y0, z0), (x1, y1, z0), (x1, y1, z1), (x1, y0, z1)])
        if (ix, iz - 1) not in filled:
            add_face([(x0, y1, z0), (x1, y1, z0), (x1, y0, z0), (x0, y0, z0)])
        if (ix, iz + 1) not in filled:
            add_face([(x0, y0, z1), (x1, y0, z1), (x1, y1, z1), (x0, y1, z1)])

    me = bpy.data.meshes.new(name)
    me.from_pydata(verts, [], faces)
    me.update()
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    ob.data.materials.append(mat)
    if cabinet is not None:
        ob.parent = cabinet
        ob.matrix_parent_inverse = cabinet.matrix_world.inverted()
    bev = ob.modifiers.new("edge", "BEVEL")
    bev.width = 0.0008
    bev.segments = 2
    bev.use_clamp_overlap = True
    bev.limit_method = "ANGLE"
    bev.angle_limit = 0.1
    ob.modifiers.new("weighted normals", "WEIGHTED_NORMAL")
    return ob


def _evaluated_bbox(o):
    bpy.context.view_layer.update()
    dg = bpy.context.evaluated_depsgraph_get()
    ev = o.evaluated_get(dg)
    me = ev.to_mesh()
    try:
        pts = [o.matrix_world @ v.co for v in me.vertices]
    finally:
        ev.to_mesh_clear()
    if not pts:
        return _own_bbox(o)
    return (
        Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts))),
        Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts))),
    )


def replace_hb_fronts_with_clean_shaker(cabinet, fronts, finish):
    # Home Builder's Door Style geonode emits a single drawer/door mesh, but its
    # front face still contains rail/stile cell boundaries. Cycles reads those
    # boundaries as hairline joints at the frame corners. Replace render fronts
    # with our unioned shaker frame: one continuous frame volume + one recessed
    # panel, preserving the drawer/door flags used by open_drawers/open_doors.
    replaced = 0
    for old, _, _ in list(fronts):
        if old.name not in bpy.data.objects or old.hide_render:
            continue
        if old.get("IS_RENDER_PULLOUT_FRONT"):
            continue
        if old.get("IS_SINK_APRON_FRONT"):
            continue  # déjà un front shaker propre (rebuild_sink_apron_front)
        lname = old.name.lower()
        is_front = old.get("IS_DRAWER_FRONT") or old.get("IS_CABINET_FRONT") or "drawer front" in lname
        if not is_front:
            continue
        bb0, bb1 = _evaluated_bbox(old)
        width = bb1.x - bb0.x
        height = bb1.z - bb0.z
        thickness = bb1.y - bb0.y
        if width <= 0.05 or height <= 0.05 or thickness <= 0.003:
            continue
        center = ((bb0.x + bb1.x) / 2.0, (bb0.y + bb1.y) / 2.0, (bb0.z + bb1.z) / 2.0)
        old_name = old.name
        props = {str(k): old.get(k) for k in old.keys()}
        new = _shaker_door(width, height, thickness, center, finish, parent=cabinet, name=old_name)
        for key, value in props.items():
            new[key] = value
        if old.get("IS_DRAWER_FRONT"):
            new["IS_DRAWER_FRONT"] = True
        if old.get("IS_CABINET_FRONT"):
            new["IS_CABINET_FRONT"] = True
        bpy.data.objects.remove(old, do_unlink=True)
        new.name = old_name
        new.data.name = old_name + "_CleanMesh"
        replaced += 1
    if replaced:
        bpy.context.view_layer.update()
        log("façades shaker propres: " + str(replaced) + " front(s) HB remplacé(s)")


def _remove_object_tree(obj):
    for child in list(obj.children):
        _remove_object_tree(child)
    if obj.name in bpy.data.objects:
        bpy.data.objects.remove(obj, do_unlink=True)


def merge_single_door_drawer_front(cabinet, finish):
    # HB5's "Base Door Drw" creates two lower doors even when the catalog SKU is
    # a single-door base cabinet. For product renders this reads fake next to the
    # reference photos: a 12-21" base with 1 drawer + 1 door should have one
    # full-width bottom door. Merge only that specific layout, after the clean
    # shaker replacement, before open_doors() rotates the front.
    if CONFIG.get("front_layout") != "DOOR_DRAWER" or int(CONFIG.get("doors") or 0) != 1:
        return 0

    candidates = []
    for obj in bpy.data.objects:
        if obj.type != "MESH" or obj.hide_render or _is_pull(obj):
            continue
        if obj.get("IS_DRAWER_FRONT"):
            continue
        if not obj.get("IS_CABINET_FRONT"):
            continue
        bb0, bb1 = _evaluated_bbox(obj)
        if (bb1.z - bb0.z) < 0.20 or (bb1.x - bb0.x) < 0.05:
            continue
        candidates.append((obj, bb0, bb1))
    if len(candidates) < 2:
        return 0

    x0 = min(bb0.x for _, bb0, _ in candidates)
    x1 = max(bb1.x for _, _, bb1 in candidates)
    y0 = min(bb0.y for _, bb0, _ in candidates)
    y1 = max(bb1.y for _, _, bb1 in candidates)
    z0 = min(bb0.z for _, bb0, _ in candidates)
    z1 = max(bb1.z for _, _, bb1 in candidates)
    width = x1 - x0
    height = z1 - z0
    thickness = y1 - y0
    if width <= 0.08 or height <= 0.20 or thickness <= 0.003:
        return 0

    for obj, _, _ in candidates:
        _remove_object_tree(obj)
    door = _shaker_door(
        width,
        height,
        thickness,
        ((x0 + x1) / 2.0, (y0 + y1) / 2.0, (z0 + z1) / 2.0),
        finish,
        parent=cabinet,
        name="Single Door Front",
    )
    door["IS_CABINET_FRONT"] = True
    door["IS_SINGLE_DOOR_MERGED"] = True
    bpy.context.view_layer.update()
    log("porte simple fusionnée: " + str(len(candidates)) + " fronts -> 1")
    return 1


def rebuild_sink_apron_front(cabinet, fronts, finish):
    # Évier de ferme : HB pose un TABLIER plat (CabinetPart « Sink Apron », panneau
    # geonode inset au fini). Précision Gabriel : le HAUT doit être une FAUSSE PORTE
    # SHAKER, comme les autres façades — pas un panneau plat. On remplace ce panneau
    # par un front shaker OVERLAY aligné sur les portes du dessous (même largeur +
    # même plan Y), hauteur = celle du tablier HB. On l'ajoute à `fronts` pour que le
    # face frame trace la traverse entre le faux-tiroir et les portes (look « 1 tiroir
    # + 2 portes »). replace_hb_fronts_with_clean_shaker le saute (déjà propre).
    if CONFIG.get("category") != "base-cabinet-farmhouse-sink":
        return
    aprons = [
        o for o in cabinet.children_recursive
        if o.type == "MESH" and not o.hide_render and "sink apron" in o.name.lower()
    ]
    doors = [
        (o, b0, b1) for (o, b0, b1) in fronts
        if o.name.lower().endswith("door") or " door" in o.name.lower()
    ]
    if not aprons or not doors:
        log("tablier évier: apron ou portes introuvables, ignoré")
        return
    ab0, ab1 = _evaluated_bbox(aprons[0])
    dx0 = min(b0.x for (_, b0, _) in doors)
    dx1 = max(b1.x for (_, _, b1) in doors)
    door_top = max(b1.z for (_, _, b1) in doors)
    dy0 = min(b0.y for (_, b0, _) in doors)
    dy1 = max(b1.y for (_, _, b1) in doors)
    reveal = 0.003
    z_bot = door_top + reveal
    z_top = ab1.z
    if z_top - z_bot < 0.03:  # sécurité : garde au moins la hauteur du tablier HB
        z_top = z_bot + max(ab1.z - ab0.z, 0.12)
    width = dx1 - dx0
    height = z_top - z_bot
    thickness = max(dy1 - dy0, 0.016)
    center = ((dx0 + dx1) / 2.0, (dy0 + dy1) / 2.0, (z_bot + z_top) / 2.0)
    for a in aprons:
        _remove_object_tree(a)
    front = _shaker_door(width, height, thickness, center, finish, parent=cabinet, name="Sink Apron Front")
    front["IS_CABINET_FRONT"] = True
    front["IS_SINK_APRON_FRONT"] = True
    bpy.context.view_layer.update()
    nb0, nb1 = _own_bbox(front)
    fronts.append((front, nb0, nb1))
    log("tablier évier -> fausse porte shaker (l=%.3f h=%.3f)" % (width, height))


def reposition_base_microwave_splitter(cabinet, finish):
    # Plan technique MDB : niche 14-3/4 po + traverse 1-1/2 po + tiroir 10-3/4 po.
    # Repositionne seulement le séparateur niche/tiroir ; la façade est finalisée
    # APRÈS le cadre (dos adossé sur fy0) — voir finalize_base_microwave_drawer_front.
    if CONFIG.get("category") != "base-microwave-cabinet":
        return None
    inch = 0.0254
    FW = 0.0381
    drawer_open_h = 10.75 * inch
    mic_open_h = 14.75 * inch

    bmn, bmx = world_bbox(cabinet)
    toe_top = bmn.z
    for o in cabinet.children_recursive:
        if o.type == "MESH" and not o.hide_render and "toe" in o.name.lower():
            toe_top = world_bbox(o)[1].z
            break
    zb = toe_top
    zt = bmx.z
    zb1 = zb + FW
    zt0 = zt - FW
    if (zt0 - zb1) < drawer_open_h + mic_open_h + FW - 0.02:
        log("micro-ondes base: hauteur intérieure insuffisante, splitter non recalé")
        return None

    rail_zc = zb1 + drawer_open_h + FW / 2.0
    mic_floor_z = zb1 + drawer_open_h + FW

    for o in cabinet.children_recursive:
        if o.type != "MESH" or "vertical splitter" not in o.name.lower():
            continue
        ad = o.animation_data
        if ad:
            for d in list(ad.drivers):
                if d.data_path == "location":
                    ad.drivers.remove(d)
        bb0, bb1 = world_bbox(o)
        o.location.z += mic_floor_z - bb1.z
        assign_material(o, finish)

    bpy.context.view_layer.update()
    log(
        "micro-ondes base: splitter niche/tiroir @ z="
        + str(round(mic_floor_z, 3))
        + " (tiroir "
        + str(round(drawer_open_h / inch, 2))
        + '" / niche '
        + str(round(mic_open_h / inch, 2))
        + '")'
    )
    return {
        "rail_z": rail_zc,
        "box_z": zb1 + drawer_open_h / 2.0,
        "box_h": drawer_open_h,
        "mic_floor_z": mic_floor_z,
        "zb": zb,
        "FW": FW,
    }


def finalize_base_microwave_drawer_front(cabinet, finish, fy0, xL, xR, zb, FW):
    # Façade tiroir overlay recalée EN DERNIER : dos exactement sur fy0 (face avant
    # du cadre), comme toutes les autres façades après front_shift.
    if CONFIG.get("category") != "base-microwave-cabinet":
        return
    inch = 0.0254
    reveal = 0.003
    drawer_open_h = 10.75 * inch
    door_t = 0.019
    zb1 = zb + FW
    front_z0 = zb + reveal
    front_z1 = zb1 + drawer_open_h + FW - reveal
    front_h = front_z1 - front_z0
    front_w = (xR - xL) - 2.0 * reveal
    front_cx = (xL + xR) / 2.0
    front_cz = (front_z0 + front_z1) / 2.0
    # Dos façade (y1) = fy0 ; avant vers la caméra (-Y).
    cy = fy0 - door_t / 2.0

    drawer_fronts = [
        o for o in cabinet.children_recursive
        if o.type == "MESH" and not o.hide_render and not _is_pull(o)
        and o.get("IS_DRAWER_FRONT")
    ]
    if not drawer_fronts:
        log("micro-ondes base: finalize — aucune façade tiroir")
        return

    for o in cabinet.children_recursive:
        if o.type == "MESH" and "drawer box" in o.name.lower():
            w = o.matrix_world.copy()
            o.parent = cabinet
            o.matrix_world = w

    for old in drawer_fronts:
        old_name = old.name
        props = {str(k): old.get(k) for k in old.keys()}
        _remove_object_tree(old)
        new = _shaker_door(
            front_w, front_h, door_t, (front_cx, cy, front_cz), finish,
            parent=None, name=old_name,
        )
        for key, value in props.items():
            new[key] = value
        new["IS_DRAWER_FRONT"] = True
        new["IS_CLEAN_SHAKER_FRONT"] = True
        new.data.name = old_name + "_CleanMesh"

    bpy.context.view_layer.update()
    log(
        "micro-ondes base: façade tiroir finalisée "
        + str(round(front_w / inch, 1))
        + 'x'
        + str(round(front_h / inch, 2))
        + '" dos@fy0='
        + str(round(fy0, 4))
    )


def resize_base_microwave_drawer(cabinet, finish):
    return reposition_base_microwave_splitter(cabinet, finish)


def finalize_garbage_pullout_fronts(cabinet, finish, fy0, xL, xR, zb, zt, FW, rails_z):
    # Caisson déchets HB : tiroir utilitaire EN HAUT + pull-out pleine largeur EN BAS.
    # Comme le micro-ondes, les façades overlay doivent être recalées EN DERNIER sur
    # fy0 (dos sur le cadre) avec la bonne largeur — sinon le tiroir HB reste décalé
    # en X/Z et la traverse horizontale entre les deux fronts disparaît visuellement.
    # IMPORTANT : après rebuild, recentrer la CAISSE du tiroir haut sur la nouvelle
    # façade — sinon open_drawers() rate le pairing (ΔZ) et la façade flotte seule.
    if CONFIG.get("category") != "base-cabinet-garbage-pull-out" or not rails_z:
        return
    reveal = 0.003
    door_t = 0.019
    mid_z = sorted(rails_z)[0]
    mid_bot = mid_z - FW / 2.0
    mid_top = mid_z + FW / 2.0
    front_w = (xR - xL) - 2.0 * reveal
    front_cx = (xL + xR) / 2.0
    cy = fy0 - door_t / 2.0

    # Overlay : les deux façades SE RECOUVRENT sur la traverse (ne laissent
    # qu'un reveal ~3 mm). Sinon toute la traverse 1.5" reste visible = barre grise.
    drawer_z1 = zt - reveal
    drawer_z0 = mid_z + reveal / 2.0
    pull_z0 = zb + reveal
    pull_z1 = mid_z - reveal / 2.0
    # Ouverture utile tiroir (entre traverses) — hauteur de CAISSE, pas overlay.
    open_z0 = mid_top
    open_z1 = zt - FW
    open_h = max(0.05, open_z1 - open_z0)
    open_cz = (open_z0 + open_z1) / 2.0
    box_w = max(0.12, (xR - xL) - 2.0 * FW - 0.014)

    specs = [
        ("drawer", drawer_z0, drawer_z1, "IS_DRAWER_FRONT"),
        ("pullout", pull_z0, pull_z1, "IS_RENDER_PULLOUT_FRONT"),
    ]
    rebuilt = 0
    drawer_front = None
    for kind, z0, z1, flag in specs:
        front_h = z1 - z0
        if front_h <= 0.05 or front_w <= 0.05:
            continue
        front_cz = (z0 + z1) / 2.0
        old_list = [
            o for o in list(bpy.data.objects)
            if o.type == "MESH" and not o.hide_render and not _is_pull(o)
            and (o.get(flag) or (kind == "pullout" and o.get("IS_PULLOUT_FRONT")))
        ]
        old_name = old_list[0].name if old_list else ("Drawer Front" if kind == "drawer" else "Pullout Front")
        props = {str(k): old_list[0].get(k) for k in old_list[0].keys()} if old_list else {}
        for old in old_list:
            _remove_object_tree(old)
        new = _shaker_door(
            front_w, front_h, door_t, (front_cx, cy, front_cz), finish,
            parent=None, name=old_name,
        )
        for key, value in props.items():
            new[key] = value
        new[flag] = True
        if kind == "pullout":
            new["IS_PULLOUT_FRONT"] = True
            new["IS_GARBAGE_PULLOUT_PART"] = True
        elif kind == "drawer":
            new["IS_DRAWER_FRONT"] = True
            drawer_front = new
        new["IS_CLEAN_SHAKER_FRONT"] = True
        new.name = old_name
        new.data.name = old_name + "_CleanMesh"
        # Re-parenter au caisson (transform monde conservé) pour le cadrage caméra.
        fmw = new.matrix_world.copy()
        new.parent = cabinet
        new.matrix_world = fmw
        rebuilt += 1

    # HB « Base Garbage Pull-Out » ne pose PAS de vraie caisse pour le tiroir
    # utilitaire du haut : le seul « Drawer Box » est un insert pull-out géant
    # (h~0.58 m, zc sous la traverse). On le masque et on construit une caisse
    # bouleau propre dans l'ouverture haute, parentée à la façade.
    for o in list(bpy.data.objects):
        if o.type != "MESH" or o.hide_render:
            continue
        ln = o.name.lower()
        if o.get("IS_DRAWER_BOX") or "drawer box" in ln or "tray" in ln:
            log("déchets coulissant: insert HB masqué <- " + o.name)
            o.hide_render = True
            o.hide_viewport = True

    box_built = 0
    if drawer_front is not None and open_h > 0.05:
        # Une seule caisse (mesh unionné) — pas de cubes scale-parentés
        # (sinon bbox caméra explose → packshot zoomé sur un coin bois).
        birch = build_shelf_material()
        t = 0.012
        box_h = max(0.05, open_h - 0.010)
        box_d = 0.48
        fb0, fb1 = _evaluated_bbox(drawer_front)
        y0 = fb1.y + 0.0016
        y1 = y0 + box_d
        z0 = open_cz - box_h / 2.0
        z1 = open_cz + box_h / 2.0
        x0 = front_cx - box_w / 2.0
        x1 = front_cx + box_w / 2.0
        # Fond + 4 parois (haut ouvert), rectangles X/Z ou Y comme face frame.
        import bmesh
        me = bpy.data.meshes.new("GarbageUtilityDrawerBox")
        bm = bmesh.new()
        walls = [
            # bottom
            (x0, x1, y0, y1, z0, z0 + t),
            # left / right
            (x0, x0 + t, y0, y1, z0, z1),
            (x1 - t, x1, y0, y1, z0, z1),
            # back / front lip
            (x0, x1, y1 - t, y1, z0, z1),
            (x0, x1, y0, y0 + t, z0, z0 + box_h * 0.55),
        ]
        for wx0, wx1, wy0, wy1, wz0, wz1 in walls:
            verts = [
                bm.verts.new((wx0, wy0, wz0)),
                bm.verts.new((wx1, wy0, wz0)),
                bm.verts.new((wx1, wy1, wz0)),
                bm.verts.new((wx0, wy1, wz0)),
                bm.verts.new((wx0, wy0, wz1)),
                bm.verts.new((wx1, wy0, wz1)),
                bm.verts.new((wx1, wy1, wz1)),
                bm.verts.new((wx0, wy1, wz1)),
            ]
            bm.faces.new((verts[0], verts[1], verts[2], verts[3]))
            bm.faces.new((verts[4], verts[7], verts[6], verts[5]))
            bm.faces.new((verts[0], verts[4], verts[5], verts[1]))
            bm.faces.new((verts[1], verts[5], verts[6], verts[2]))
            bm.faces.new((verts[2], verts[6], verts[7], verts[3]))
            bm.faces.new((verts[3], verts[7], verts[4], verts[0]))
        bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.0001)
        bm.to_mesh(me)
        bm.free()
        root = bpy.data.objects.new("Garbage Utility Drawer Box", me)
        bpy.context.scene.collection.objects.link(root)
        root.data.materials.append(birch)
        root["IS_DRAWER_BOX"] = True
        bpy.context.view_layer.update()
        # Centrer en X sur la façade AVANT parentage (façade peut être à cx ≠ 0).
        fb0, fb1 = _evaluated_bbox(drawer_front)
        bb0, bb1 = _evaluated_bbox(root)
        root.location.x += (fb0.x + fb1.x) / 2.0 - (bb0.x + bb1.x) / 2.0
        bpy.context.view_layer.update()
        mw = root.matrix_world.copy()
        root.parent = drawer_front
        root.matrix_world = mw
        box_built = 1
    if rebuilt:
        bpy.context.view_layer.update()
        log(
            "déchets coulissant: "
            + str(rebuilt)
            + " façade(s) + "
            + str(box_built)
            + " caisse utilitaire, dos@fy0="
            + str(round(fy0, 4))
        )


def _opening_for_z(openings_z, z):
    # Ouverture du cadre (espace net entre deux traverses) qui contient z ;
    # à défaut, la plus proche en centre. Sert à borner une caisse de tiroir
    # pour qu'elle passe DANS le cadre au lieu de le traverser.
    for (z0, z1) in openings_z:
        if z0 <= z <= z1:
            return (z0, z1)
    if not openings_z:
        return None
    return min(openings_z, key=lambda t: abs((t[0] + t[1]) / 2.0 - z))


def add_face_frame(cabinet):
    # CADRE DE FAÇADE (face frame) — cadre 1 1/2 po au
    # FINI EXTÉRIEUR sur le devant de la boîte. Les façades (overlay, plus larges)
    # s'accotent sur le cadre et le couvrent en fermé ; on le voit à l'ouverture.
    # Les BOÎTES de tiroir sont rétrécies + recentrées pour PASSER dans l'ouverture
    # du cadre. Les panneaux séparateurs HB (« Vertical Splitter ») sont masqués
    # (pas de vrai séparateur entre tiroirs). Tout est piloté par des drivers HB :
    # on coupe le driver de largeur (Socket_2) et de location des boîtes avant de
    # figer, sinon HB écrase nos valeurs. À appeler EN DERNIER (après le reste).
    FW = 0.0381  # largeur montants/traverses (1 1/2 po)
    FT = 0.019   # épaisseur du cadre
    finish = build_finish_material()
    mic_middle_rail = resize_base_microwave_drawer(cabinet, finish)
    mic_box_z = mic_middle_rail["box_z"] if mic_middle_rail else None
    mic_box_h = mic_middle_rail["box_h"] if mic_middle_rail else None
    mic_rail_z = mic_middle_rail["rail_z"] if mic_middle_rail else None
    mic_floor_z = mic_middle_rail["mic_floor_z"] if mic_middle_rail else None
    bmn, bmx = world_bbox(cabinet)
    cx = (bmn.x + bmx.x) / 2.0
    xL, xR = bmn.x, bmx.x

    fronts = []
    for o in cabinet.children_recursive:
        if o.type != "MESH" or o.hide_render or _is_pull(o):
            continue
        if o.get("IS_CLEAN_SHAKER_PANEL"):
            continue
        ln = o.name.lower()
        is_front = (
            o.get("IS_DRAWER_FRONT")
            or o.get("IS_RENDER_PULLOUT_FRONT")
            or o.get("IS_PULLOUT_FRONT")
            or o.get("IS_CABINET_FRONT")
            or "drawer front" in ln
            or "pullout front" in ln
            or ln.endswith("door")
            or " door" in ln
        )
        if not is_front:
            continue
        bb0, bb1 = _own_bbox(o)  # bbox propre : sans la boîte enfant (profonde)
        fronts.append((o, bb0, bb1))
    if not fronts:
        log("cadre façade: aucune façade trouvée, ignoré")
        return

    # Évier de ferme : convertit le tablier plat HB en fausse porte shaker AVANT le
    # calcul du cadre (pour que la traverse tablier/portes soit tracée).
    rebuild_sink_apron_front(cabinet, fronts, finish)

    # Le cadre s'ACCOTE sur le devant de la boîte et est PROUD (en avant du devant
    # de carcasse), pas embarqué dedans. box_front_y = Y avant des panneaux latéraux.
    front_back_y = max(bb1.y for (_, bb0, bb1) in fronts)  # dos actuel des façades
    side_front = [
        _own_bbox(o)[0].y for o in cabinet.children_recursive
        if o.type == "MESH" and not o.hide_render and "side" in o.name.lower()
    ]
    box_front_y = min(side_front) if side_front else min(bb0.y for (_, bb0, _) in fronts)
    fy1 = box_front_y            # face arrière du cadre = devant de la boîte
    fy0 = box_front_y - FT       # face avant du cadre (proud, en avant)

    toe_top = bmn.z
    for o in cabinet.children_recursive:
        if o.type == "MESH" and not o.hide_render and "toe" in o.name.lower():
            toe_top = world_bbox(o)[1].z
            break
    zb, zt = toe_top, bmx.z
    zb1, zt0 = zb + FW, zt - FW
    xl1, xr0 = xL + FW, xR - FW

    # Traverses (façades empilées) + montants (façades côte à côte), UNIQUEMENT entre
    # façades ADJACENTES (aucune 3e façade entre les deux dans la même colonne/rangée).
    def _between_z(a0, a1, b1, exclude):  # y a-t-il une façade entre b (bas) et a (haut) ?
        for (c, c0, c1) in fronts:
            if c in exclude:
                continue
            if min(a1.x, c1.x) - max(a0.x, c0.x) > 0.05:  # même colonne
                cz = (c0.z + c1.z) / 2.0
                if b1.z - 0.02 < cz < a0.z + 0.02:
                    return True
        return False

    def _between_x(a0, a1, b1, exclude):  # y a-t-il une façade entre b (gauche) et a (droite) ?
        for (c, c0, c1) in fronts:
            if c in exclude:
                continue
            if min(a1.z, c1.z) - max(a0.z, c0.z) > 0.05:  # même rangée
                cxm = (c0.x + c1.x) / 2.0
                if b1.x - 0.02 < cxm < a0.x + 0.02:
                    return True
        return False

    rails_z, stiles_x = set(), set()
    for (a, a0, a1) in fronts:
        for (b, b0, b1) in fronts:
            if a is b:
                continue
            xov = min(a1.x, b1.x) - max(a0.x, b0.x)
            zov = min(a1.z, b1.z) - max(a0.z, b0.z)
            if xov > 0.05 and a0.z >= b1.z - 0.02 and not _between_z(a0, a1, b1, (a, b)):
                rails_z.add(round((a0.z + b1.z) / 2.0, 3))
            if zov > 0.05 and a0.x >= b1.x - 0.02 and not _between_x(a0, a1, b1, (a, b)):
                stiles_x.add(round((a0.x + b1.x) / 2.0, 3))
    frame_rects = [
        (xL, xR, zt0, zt),
        (xL, xR, zb, zb1),
        (xL, xl1, zb1, zt0),
        (xr0, xR, zb1, zt0),
    ]
    if mic_rail_z is not None:
        rails_z.add(round(mic_rail_z, 3))
    frame_rects.extend((xl1, xr0, zc - FW / 2, zc + FW / 2) for zc in sorted(rails_z))
    # Pas de montant central entre deux portes : les portes partagent un simple
    # jeu/reveal visuel, pas une pièce de face frame pleine hauteur au milieu.
    stiles_x.clear()
    _frame_union("FaceFrame", frame_rects, fy0, fy1, finish, cabinet)
    log("cadre façade: contour + " + str(len(rails_z)) + " traverse(s) + " + str(len(stiles_x)) + " montant(s)")

    # Panneaux séparateurs de tiroirs : masqués (pas de vrai splitter entre
    # tiroirs empilés). EXCEPTION micro-ondes de base : le séparateur niche/tiroir
    # est un VRAI plancher de niche (dessus du compartiment tiroir) — on le GARDE
    # et on le peint au fini extérieur (blanc/chêne), comme le reste de la niche
    # (feedback Gabriel 2026-07-14 : « le tiroir du bas devrait avoir un dessus »).
    is_microwave = CONFIG.get("category") == "base-microwave-cabinet"
    is_garbage = CONFIG.get("category") == "base-cabinet-garbage-pull-out"
    for o in list(cabinet.children_recursive):
        if o.type != "MESH" or not o.name.lower().startswith("vertical splitter"):
            continue
        if is_microwave:
            assign_material(o, build_finish_material())
        elif is_garbage:
            log("déchets coulissant: séparateur HB supprimé <- " + o.name)
            bpy.data.objects.remove(o, do_unlink=True)
        else:
            o.hide_render = True
            o.hide_viewport = True

    # --- BOÎTES : rétrécir (X) + raccourcir (Z) pour passer dans l'ouverture du cadre,
    # puis recentrer dans l'ouverture (X et Z). Les ouvertures verticales = espaces
    # entre traverses consécutives. Largeur/hauteur/position = drivers HB -> on coupe.
    rail_ranges = [(zb, zb1), (zt0, zt)]
    for zc in rails_z:
        rail_ranges.append((zc - FW / 2.0, zc + FW / 2.0))
    rail_ranges.sort()
    openings_z = [(rail_ranges[i][1], rail_ranges[i + 1][0]) for i in range(len(rail_ranges) - 1)]

    box_w = max(0.12, (xr0 - xl1) - 0.014)  # ~7 mm de jeu par côté
    clr_z = 0.012                            # jeu vertical total dans l'ouverture
    boxes = [
        o for o in cabinet.children_recursive
        if o.type == "MESH" and "drawer box" in o.name.lower()
    ]
    # Hauteur/position CIBLE d'une caisse = celle de SA FAÇADE (façade la plus
    # proche en Z), PAS de l'ouverture. Un caisson à NICHE OUVERTE (micro-ondes :
    # 1 tiroir bas + niche haute → 0 traverse → 1 seule ouverture pleine hauteur)
    # étirait sinon la caisse sur toute la niche = panneau blanc géant qui bouche
    # la niche (bug trouvé par Gabriel 2026-07-14). Pour un empilement normal,
    # hauteur façade ≈ hauteur ouverture → comportement quasi identique.
    front_dims = [((b0.z + b1.z) / 2.0, b1.z - b0.z) for (_, b0, b1) in fronts]
    dg = bpy.context.evaluated_depsgraph_get()
    targets = []
    for o in boxes:
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        zs = [(o.matrix_world @ v.co).z for v in me.vertices]
        ev.to_mesh_clear()
        bcz = (min(zs) + max(zs)) / 2.0 if zs else 0.0
        # Façade correspondante = la plus proche en centre Z (repli : ouverture).
        if front_dims:
            fzc, fh = min(front_dims, key=lambda t: abs(t[0] - bcz))
        else:
            fzc, fh = bcz, None
            for (z0, z1) in openings_z:
                if z0 - 0.03 <= bcz <= z1 + 0.03:
                    fzc, fh = (z0 + z1) / 2.0, z1 - z0
                    break
        mic_align_top = False
        if mic_box_h and "drawer box" in o.name.lower():
            fh = mic_box_h
            fzc = mic_box_z
            mic_align_top = True
        # La façade OVERLAY est plus HAUTE que l'ouverture (elle recouvre les
        # traverses du cadre) : dimensionner la caisse dessus la faisait
        # TRAVERSER le cadre dès qu'on la sortait en vue open (Gabriel
        # 2026-07-23 ; mesuré sur S8-DB12 : ouverture 244 mm vs caisse 288 mm).
        # Règle J.2 : la caisse suit l'OUVERTURE nette. On garde malgré tout la
        # façade comme BORNE HAUTE (min) pour les caissons à niche ouverte, où
        # l'ouverture pleine hauteur donnerait une caisse géante.
        if not mic_align_top and openings_z:
            op = _opening_for_z(openings_z, fzc)
            if op:
                z0, z1 = op
                fh = min(fh, z1 - z0) if fh else (z1 - z0)
                inner = max(0.05, fh - clr_z)
                lo = z0 + (clr_z / 2.0) + (inner / 2.0)
                hi = z1 - (clr_z / 2.0) - (inner / 2.0)
                if lo > hi:
                    lo = hi = (z0 + z1) / 2.0
                fzc = min(max(fzc, lo), hi)
        ad = o.animation_data
        if ad:
            for d in list(ad.drivers):
                if (d.data_path.endswith('["Socket_2"]') or d.data_path.endswith('["Socket_4"]')
                        or d.data_path == "location"):
                    ad.drivers.remove(d)
        for mod in o.modifiers:
            if mod.type == "NODES" and mod.node_group:
                try:
                    mod["Socket_2"] = box_w
                    if fh:
                        mod["Socket_4"] = max(0.05, fh - clr_z)
                except Exception:
                    pass
        # dé-parenter (transform monde conservé) -> déplaçable de façon fiable
        world = o.matrix_world.copy()
        o.parent = None
        o.matrix_world = world
        targets.append((o, fzc, mic_align_top))
    for (o, tz, align_top) in targets:
        bpy.context.view_layer.update()
        dg = bpy.context.evaluated_depsgraph_get()
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        xs = [(o.matrix_world @ v.co).x for v in me.vertices]
        zs = [(o.matrix_world @ v.co).z for v in me.vertices]
        ev.to_mesh_clear()
        if xs:
            o.location.x += cx - (min(xs) + max(xs)) / 2.0
            if align_top and mic_floor_z is not None and zs:
                o.location.z += mic_floor_z - 0.002 - max(zs)
            elif zs:
                o.location.z += tz - (min(zs) + max(zs)) / 2.0
    bpy.context.view_layer.update()

    # --- FAÇADES : le DOS de la façade vient s'ADOSSER exactement sur la FACE AVANT
    # du cadre (fy0). Aucune collision (sans avance, la façade chevauchait le cadre de
    # 16 mm), aucun gap (un gap de qq mm créait une couture visible au coin). Face
    # arrière façade == face avant cadre -> plein recouvrement propre, cadre couvert.
    # Elles sont pilotées par des drivers de location -> on les coupe puis on décale.
    front_shift = fy0 - front_back_y
    for (o, _, _) in fronts:
        ad = o.animation_data
        if ad:
            for d in list(ad.drivers):
                if d.data_path == "location":
                    ad.drivers.remove(d)
        world = o.matrix_world.copy()
        o.parent = None
        o.matrix_world = Matrix.Translation(Vector((0.0, front_shift, 0.0))) @ world
    bpy.context.view_layer.update()
    replace_hb_fronts_with_clean_shaker(cabinet, fronts, finish)
    merge_single_door_drawer_front(cabinet, finish)

    if CONFIG.get("category") == "base-microwave-cabinet":
        finalize_base_microwave_drawer_front(cabinet, finish, fy0, xL, xR, zb, FW)
        for o in cabinet.children_recursive:
            if o.type == "MESH" and "drawer box" in o.name.lower():
                o.hide_render = True
                o.hide_viewport = True

    if CONFIG.get("category") == "base-cabinet-garbage-pull-out":
        finalize_garbage_pullout_fronts(cabinet, finish, fy0, xL, xR, zb, zt, FW, rails_z)

    n = len(boxes)
    if n:
        log("cadre façade: " + str(n) + " boîte(s) ajustée(s) (larg " + str(round(box_w, 3))
            + ", hauteur par ouverture) + façades avancées de " + str(round(front_shift, 3)) + " m")


def fix_stretchers(cabinet):
    # Réalité Dilamco : les caissons n'ont QU'UNE traverse AVANT (pas de traverse
    # arrière — le panneau de fond suffit), et cette traverse avant est en
    # contreplaqué BOULEAU (structure de carcasse, pas peinte au fini). HB génère
    # une traverse avant ET arrière, l'avant en blanc → on masque l'arrière et on
    # passe l'avant en bouleau.
    birch = build_shelf_material()
    # SUPPRESSION (pas hide_render) de la traverse arrière : un handler HB réinitialise
    # hide_render lors de l'apply des geonodes → il faut la retirer définitivement.
    # D'où l'appel EN DERNIER dans run_one (après apply_birch_interior).
    to_remove = []
    for o in list(cabinet.children_recursive):
        if o.type != "MESH":
            continue
        ln = o.name.lower()
        if "stretcher" not in ln:
            continue
        if "back" in ln:
            to_remove.append(o)
        else:
            set_geonode_materials(o, birch)
            assign_material(o, birch)
            log("traverse avant -> bouleau: " + o.name)
    for o in to_remove:
        log("traverse arrière supprimée: " + o.name)
        bpy.data.objects.remove(o, do_unlink=True)


def build_chant_plies_material():
    # PLIS de contreplaqué pour la TRANCHE DU DESSUS des côtés (le « chant ») — allure
    # pro + réalité produit (Gabriel, réf. chant-panneau.jpg). La VRAIE photo bouleau
    # russe recadrée (quelques plis nets + léger flou = chant_tile.png), projetée en
    # BOX ESPACE MONDE. CLÉ (Gabriel avait raison) : le mapping Generated étirait la
    # tuile ~10x le long de la profondeur -> aliasing/stries verdâtres. En BOX à taille
    # réelle (pas d'étirement), les plis rendent PROPRES, même à l'échelle packshot.
    name = "Dilamco_Chant_Plies"
    m = bpy.data.materials.get(name)
    if m:
        return m
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    for nd in list(nt.nodes):
        nt.nodes.remove(nd)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.inputs["Roughness"].default_value = float(CONFIG.get("chant_roughness", 0.78))
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    # ======================================================================
    # LARGEUR DES PLIS DU CHANT — RÉGLE ICI :
    #   CHANT_PLY_SCALE : PLUS PETIT = plis PLUS LARGES (moins de plis).
    #   Essaie 3 (très larges) … 12 (fins). Défaut showroom : 2.3.
    CHANT_PLY_SCALE = float(CONFIG.get("chant_ply_scale", 2.3))
    # ======================================================================
    path = CONFIG.get("chant_tile") or ""
    if path and Path(path).is_file():
        img = bpy.data.images.load(path, check_existing=True)
        tc = nt.nodes.new("ShaderNodeTexCoord")
        mp = nt.nodes.new("ShaderNodeMapping")
        # BOX espace Object (PAS Generated, qui étire -> aliase). Rotation 90° pour que
        # les plis courent SUR LE LONG de l'arête. La largeur des plis = CHANT_PLY_SCALE.
        mp.inputs["Rotation"].default_value = (0.0, 0.0, math.radians(90.0))
        mp.inputs["Scale"].default_value = (
            float(CONFIG.get("chant_scale_x", 3.0)),
            CHANT_PLY_SCALE,
            CHANT_PLY_SCALE,
        )
        nt.links.new(tc.outputs["Object"], mp.inputs["Vector"])
        tex = nt.nodes.new("ShaderNodeTexImage")
        tex.image = img
        tex.projection = "BOX"
        tex.projection_blend = 0.3
        tex.extension = "REPEAT"
        tex.interpolation = "Cubic"
        nt.links.new(mp.outputs["Vector"], tex.inputs["Vector"])
        hsv = nt.nodes.new("ShaderNodeHueSaturation")
        hsv.inputs["Hue"].default_value = float(CONFIG.get("chant_hue", 0.5))
        hsv.inputs["Saturation"].default_value = float(CONFIG.get("chant_sat", 0.68))
        hsv.inputs["Value"].default_value = float(CONFIG.get("chant_val", 1.06))
        nt.links.new(tex.outputs["Color"], hsv.inputs["Color"])
        nt.links.new(hsv.outputs["Color"], bsdf.inputs["Base Color"])
    else:
        bsdf.inputs["Base Color"].default_value = (0.74, 0.62, 0.44, 1)  # fallback bouleau uni
    return m


def apply_birch_interior(cabinet):
    # EXCEPTION micro-ondes : la niche d'électro est une mélamine finie AU FINI
    # extérieur (blanc→blanc, chêne→chêne), PAS du bouleau brut (précision Gabriel
    # 2026-07-02). normalize_product_materials peint déjà les parois de la niche au
    # fini. On NE repeint donc PAS les faces intérieures ni le plancher en bouleau
    # (sinon les 2 parois latérales de la niche ressortent en bois — bug repéré par
    # Gabriel sur le base micro-ondes 27 po). MAIS le CHANT de contreplaqué du
    # DESSUS des côtés et du panneau arrière DOIT rester, comme tous les caissons du
    # bas (précision Gabriel) : on garde donc ce chant, on saute seulement le
    # bouleau des faces intérieures.
    microwave = CONFIG.get("category") in ("microwave", "base-microwave-cabinet")
    # Faces INTÉRIEURES de la carcasse en contreplaqué BOULEAU, face EXTÉRIEURE au
    # fini. Réalité Dilamco (photo Gabriel) : caisson en contreplaqué bouleau,
    # extérieur peint/mélaminé, intérieur bois brut — visible par le dessus ouvert
    # des caissons du bas (et portes ouvertes). Avant : côtés + plancher blancs à
    # l'intérieur (incohérent avec fond/tablettes déjà en bouleau).
    # Les panneaux sont des geonodes (mesh vide) : on APPLIQUE le modifier en mesh
    # puis on ré-assigne la face tournée vers le CENTRE du caisson (côtés) ou la
    # face du DESSUS (plancher) au bouleau ; l'extérieur reste au fini.
    birch = build_shelf_material()
    bmn, bmx = world_bbox(cabinet)
    cx = (bmn.x + bmx.x) / 2.0
    parts = [
        o for o in cabinet.children_recursive
        if o.type == "MESH" and not o.hide_render and not _is_pull(o)
        and ("side" in o.name.lower() or "bottom" in o.name.lower()
             or ("back" in o.name.lower() and "stretcher" not in o.name.lower()))
    ]
    for s in parts:
        bb0, bb1 = world_bbox(s)
        ln_s = s.name.lower()
        is_side = "side" in ln_s
        is_back = "back" in ln_s  # panneau de fond (le back stretcher est exclu du filtre)
        if is_side and (bb1.x - bb0.x) > 0.06:
            continue  # pas un panneau latéral mince (ex. faux montant large)
        bpy.context.view_layer.objects.active = s
        s.select_set(True)
        for m in list(s.modifiers):
            if m.type == "NODES":
                try:
                    bpy.ops.object.modifier_apply(modifier=m.name)
                except Exception as exc:
                    log("intérieur: modifier_apply KO sur " + s.name + " : " + str(exc))
        s.select_set(False)
        me = s.data
        if not me.polygons:
            continue
        if birch.name not in [m.name for m in me.materials if m]:
            me.materials.append(birch)
        bidx = [i for i, m in enumerate(me.materials) if m and m.name == birch.name][0]
        mw = s.matrix_world
        n = 0
        if is_side:
            # Dessus des côtés = PLIS de contreplaqué (chant) ; intérieur = bouleau plat.
            plies = build_chant_plies_material()
            if plies.name not in [m.name for m in me.materials if m]:
                me.materials.append(plies)
            pidx = [i for i, m in enumerate(me.materials) if m and m.name == plies.name][0]
            scx = (bb0.x + bb1.x) / 2.0
            inward = 1.0 if scx < cx else -1.0  # normale intérieure pointe vers le centre
            for p in me.polygons:
                nrm = mw.to_3x3() @ p.normal
                if nrm.z > 0.5:            # DESSUS = plis (chant) — TOUJOURS (micro-ondes inclus)
                    p.material_index = pidx
                    n += 1
                elif nrm.x * inward > 0.5 and not microwave:  # INTÉRIEUR = bouleau plat
                    # Micro-ondes : la face intérieure reste au fini (paroi de niche
                    # blanche/chêne) — on ne la repeint pas en bouleau.
                    p.material_index = bidx
                    n += 1
        elif is_back:
            # Dessus du panneau ARRIÈRE = PLIS de contreplaqué (chant), comme les côtés ;
            # le reste du panneau garde son bouleau.
            plies = build_chant_plies_material()
            if plies.name not in [m.name for m in me.materials if m]:
                me.materials.append(plies)
            pidx = [i for i, m in enumerate(me.materials) if m and m.name == plies.name][0]
            for p in me.polygons:
                if (mw.to_3x3() @ p.normal).z > 0.5:  # DESSUS = plis (chant)
                    p.material_index = pidx
                    n += 1
        elif not microwave:  # plancher : face du DESSUS (intérieur) ; dessous garde le fini
            # Micro-ondes : le plancher de la niche reste au fini (blanc/chêne), pas bouleau.
            for p in me.polygons:
                if (mw.to_3x3() @ p.normal).z > 0.5:
                    p.material_index = bidx
                    n += 1
        log("intérieur bouleau: " + s.name + " -> " + str(n) + " face(s)")


def open_drawers(cabinet):
    # Vue "open" : tire les facades de tiroir en escalier (haut = le moins,
    # bas = le plus, comme les photos produit pro) pour MONTRER les caisses en
    # massif aboute + l'interieur - la force du produit (feedback Gabriel
    # 2026-07-12). A appeler APRES add_face_frame : les facades y sont
    # de-parentees et leurs drivers de location coupes -> translation monde
    # libre. La caisse (IS_DRAWER_BOX) est enfant de la facade et suit. On
    # re-parente ensuite au caisson (transform conserve) pour que le cadrage
    # camera et les lumieres voient les tiroirs sortis.
    # NB : add_face_frame de-parente AUSSI les boites (IS_DRAWER_BOX) pour les
    # retrecir -> facades et boites sont des objets LIBRES. On les apparie par
    # centre vertical (une boite par facade de tiroir) et on translate la paire.
    bmin, bmax = world_bbox(cabinet)
    depth = bmax.y - bmin.y

    def zcenter(o):
        bpy.context.view_layer.update()
        dg = bpy.context.evaluated_depsgraph_get()
        me = o.evaluated_get(dg).to_mesh()
        zs = [(o.matrix_world @ v.co).z for v in me.vertices]
        o.evaluated_get(dg).to_mesh_clear()
        return (min(zs) + max(zs)) / 2.0 if zs else 0.0

    def own_bounds(o):
        bpy.context.view_layer.update()
        dg = bpy.context.evaluated_depsgraph_get()
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        pts = [o.matrix_world @ v.co for v in me.vertices]
        ev.to_mesh_clear()
        return (
            Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts))),
            Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts))),
        )

    def under(obj, ancestor):
        p = obj.parent
        while p is not None:
            if p is ancestor:
                return True
            p = p.parent
        return False

    fronts = [(o, zcenter(o)) for o in bpy.data.objects
              if o.type == "MESH" and o.get("IS_DRAWER_FRONT") and not o.hide_render]
    boxes = [(o, zcenter(o)) for o in bpy.data.objects
             if o.type == "MESH" and o.get("IS_DRAWER_BOX") and not o.hide_render]
    fronts.sort(key=lambda t: -t[1])  # du haut vers le bas
    n = len(fronts)
    is_garbage = CONFIG.get("category") == "base-cabinet-garbage-pull-out"
    for i, (front, fz) in enumerate(fronts):
        # Tirage en escalier (haut 35 % -> bas 68 %, calibre sur la reference
        # e-commerce) : assez sorti pour voir DANS les caisses avec la camera
        # a ~27 degres, sans que la caisse du bas se detache du caisson.
        frac = 0.35 + (0.33 * i / (n - 1)) if n > 1 else 0.50
        pull = depth * min(frac, 0.68)
        shift = Matrix.Translation(Vector((0.0, -pull, 0.0)))
        # Déchets : la caisse est enfant de la façade. On translate UNIQUEMENT
        # la façade (enfants suivent) — aucun reparentage (sinon décalage X).
        if is_garbage:
            front.matrix_world = shift @ front.matrix_world
            continue
        group = [front]
        if boxes:
            box, bz = min(boxes, key=lambda t: abs(t[1] - fz))
            if abs(bz - fz) < 0.35:  # overlay vs ouverture peut diverger (déchets)
                if under(box, front):
                    # Déjà enfant de la façade (finalize_garbage) → suit le parent.
                    boxes.remove((box, bz))
                else:
                    # add_face_frame() avance la façade sur le cadre, mais la boîte
                    # garde ~5/8 po de retrait. Fermé, c'est caché; ouvert, ça crée
                    # un vide visible entre façade et boîte. On ré-accote la boîte
                    # au dos de la façade avec seulement 1/16 po de jeu mécanique.
                    fb0, fb1 = own_bounds(front)
                    bb0, _ = own_bounds(box)
                    target_gap = 0.0016  # ≈1/16 po
                    box.matrix_world = Matrix.Translation(
                        Vector((0.0, (fb1.y + target_gap) - bb0.y, 0.0))
                    ) @ box.matrix_world
                    group.append(box)
                    boxes.remove((box, bz))
        for o in group:
            world = shift @ o.matrix_world.copy()
            o.parent = cabinet
            o.matrix_world = world
    bpy.context.view_layer.update()
    log("open_drawers: " + str(n) + " tiroir(s) ouvert(s), profondeur " + str(round(depth, 3)) + " m")
    return n


def open_doors(cabinet):
    # Vue "open" pour caissons à portes : pivote chaque porte autour de son
    # montant extérieur. Contrairement aux tiroirs, on ne translate rien; on garde
    # la façade à sa position réelle et on applique une rotation Z autour d'un
    # axe vertical de charnière.
    bmin, bmax = world_bbox(cabinet)
    cx = (bmin.x + bmax.x) / 2.0

    def own_bounds(o):
        bpy.context.view_layer.update()
        dg = bpy.context.evaluated_depsgraph_get()
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        pts = [o.matrix_world @ v.co for v in me.vertices]
        ev.to_mesh_clear()
        return (
            Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts))),
            Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts))),
        )

    doors = []
    for o in bpy.data.objects:
        if o.type != "MESH" or o.hide_render or _is_pull(o):
            continue
        if o.get("IS_CLEAN_SHAKER_PANEL"):
            continue
        if o.get("IS_DRAWER_FRONT") or o.get("IS_PULLOUT_FRONT"):
            continue
        lname = o.name.lower()
        if o.get("IS_CABINET_FRONT") or lname.endswith("door") or " door" in lname:
            bb0, bb1 = own_bounds(o)
            # Ignore les panneaux qui ne ressemblent pas à une porte verticale.
            if (bb1.z - bb0.z) > 0.20 and (bb1.x - bb0.x) > 0.08:
                doors.append((o, bb0, bb1))

    angle = math.radians(float(CONFIG.get("open_door_deg", 102.0)))
    for o, bb0, bb1 in doors:
        dcx = (bb0.x + bb1.x) / 2.0
        if dcx < cx:
            hinge_x = bb0.x
            rot = -angle
        else:
            hinge_x = bb1.x
            rot = angle
        # Pivot légèrement au dos de la façade, sur le plan du face frame.
        pivot = Vector((hinge_x, bb1.y, (bb0.z + bb1.z) / 2.0))
        world = o.matrix_world.copy()
        new_world = (
            Matrix.Translation(pivot)
            @ Matrix.Rotation(rot, 4, "Z")
            @ Matrix.Translation(-pivot)
            @ world
        )
        o.parent = cabinet
        o.matrix_world = new_world

    bpy.context.view_layer.update()
    if doors:
        log("open_doors: " + str(len(doors)) + " porte(s) ouverte(s), angle " + str(round(math.degrees(angle))) + " deg")
    return len(doors)


def hide_garbage_pullout_orphans(cabinet):
    # Fragments HB du module coulissant (rails, doublons de panneau) : masqués
    # en vue open — seule la façade shaker finalisée sort avec open_pullouts().
    if CONFIG.get("category") != "base-cabinet-garbage-pull-out":
        return
    hidden = 0
    for o in cabinet.children_recursive:
        if not o.get("IS_GARBAGE_PULLOUT_PART") or o.get("IS_RENDER_PULLOUT_FRONT"):
            continue
        o.hide_render = True
        o.hide_viewport = True
        hidden += 1
    if hidden:
        bpy.context.view_layer.update()
        log("déchets coulissant: " + str(hidden) + " fragment(s) HB masqué(s) (vue open)")


def open_pullouts(cabinet):
    # Range-épices / poubelle coulissante : sort la façade shaker et les plateaux
    # comme une unité de pullout. La façade d'origine HB est masquée, donc
    # add_shaker_frame_to_pullouts() tagge la nouvelle porte shaker.
    bmin, bmax = world_bbox(cabinet)
    depth = bmax.y - bmin.y
    pull = depth * 0.62
    def own_bounds(o):
        bpy.context.view_layer.update()
        dg = bpy.context.evaluated_depsgraph_get()
        ev = o.evaluated_get(dg)
        me = ev.to_mesh()
        pts = [o.matrix_world @ v.co for v in me.vertices]
        ev.to_mesh_clear()
        return (
            Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts))),
            Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts))),
        )

    def hierarchy_bounds(root):
        objs = [root] + list(getattr(root, "children_recursive", []))
        pts = []
        dg = bpy.context.evaluated_depsgraph_get()
        for obj in objs:
            if obj.type != "MESH" or obj.hide_render:
                continue
            ev = obj.evaluated_get(dg)
            me = ev.to_mesh()
            pts.extend(obj.matrix_world @ v.co for v in me.vertices)
            ev.to_mesh_clear()
        return (
            Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts))),
            Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts))),
        ) if pts else own_bounds(root)

    fronts = []
    inserts = []
    is_garbage = CONFIG.get("category") == "base-cabinet-garbage-pull-out"
    top_drawer_z = None
    for o in bpy.data.objects:
        if o.type == "MESH" and o.get("IS_DRAWER_FRONT") and not o.hide_render:
            top_drawer_z = own_bounds(o)[0].z + (own_bounds(o)[1].z - own_bounds(o)[0].z) / 2.0
            break
    for o in bpy.data.objects:
        if o.type != "MESH" or o.hide_render:
            continue
        if o.get("IS_RENDER_PULLOUT_FRONT") and o.parent in (cabinet, None):
            fronts.append(o)
        elif is_garbage:
            if o.get("IS_DRAWER_FRONT") or o.get("IS_RENDER_PULLOUT_FRONT"):
                continue
            if o.get("IS_DRAWER_BOX") and top_drawer_z is not None:
                oz = (own_bounds(o)[0].z + own_bounds(o)[1].z) / 2.0
                if oz > top_drawer_z - 0.08:
                    continue
            root = o
            while root.parent is not None and root.parent != cabinet:
                root = root.parent
            if root.get("IS_GARBAGE_PULLOUT_ASSEMBLY") or (
                root.parent == cabinet and "pullout" in root.name.lower()
            ):
                inserts.append(o)
        elif o.get("IS_DRAWER_BOX") or any(k in o.name.lower() for k in ("tray", "drawer box")):
            inserts.append(o)
    group = list(fronts)
    if fronts and is_garbage:
        pull = depth * 0.62
        bpy.context.view_layer.update()
    elif fronts:
        # Les plateaux HB du spice rack ont des offsets procéduraux qui ne se
        # comportent pas comme une vraie unité coulissante après translation.
        # On les masque et on crée un rack visuel propre, attaché à la façade.
        for o in inserts:
            o.hide_render = True
            o.hide_viewport = True
        fb0, fb1 = hierarchy_bounds(fronts[0])
        fcx = (fb0.x + fb1.x) / 2.0
        fcz = (fb0.z + fb1.z) / 2.0
        fw = fb1.x - fb0.x
        fh = fb1.z - fb0.z
        interior_x0 = None
        interior_x1 = None
        for part in cabinet.children_recursive:
            if part.type != "MESH" or part.hide_render:
                continue
            lname = part.name.lower()
            if lname.startswith("left side"):
                interior_x0 = own_bounds(part)[1].x
            elif lname.startswith("right side"):
                interior_x1 = own_bounds(part)[0].x
        rack_w = max(0.070, fw * 0.88)
        if interior_x0 is not None and interior_x1 is not None and interior_x1 > interior_x0:
            opening_w = interior_x1 - interior_x0
            rack_w = max(0.070, min(rack_w, opening_w - 0.008))
            fcx = (interior_x0 + interior_x1) / 2.0
        rack_h = max(0.46, fh * 0.86)
        rack_d = min(depth * 0.56, 0.41)
        # Ouvrir à 75 % de la profondeur du rack, pas au-delà du rack complet :
        # le panneau arrière doit rester dans le caisson comme sur un vrai pullout.
        pull = rack_d * 0.75
        t = 0.012
        rail_h = 0.074
        tray_floor_t = 0.014
        mat = build_shelf_material()
        y_front = fb1.y + 0.0005
        y_center = y_front + rack_d / 2.0
        z0 = fcz - rack_h / 2.0
        z1 = fcz + rack_h / 2.0
        x0 = fcx - rack_w / 2.0
        x1 = fcx + rack_w / 2.0
        y0 = y_front
        y1 = y_front + rack_d
        rack_parts = [
            _flat_box("PulloutRack_FrontPanel", (rack_w, t, rack_h), (fcx, y0 + t / 2.0, fcz), mat, parent=cabinet),
            _flat_box("PulloutRack_BackPanel", (rack_w, t, rack_h), (fcx, y1 - t / 2.0, fcz), mat, parent=cabinet),
        ]
        shelf_levels = (
            z0 + tray_floor_t / 2.0,
            fcz - rail_h / 2.0,
            z1 - rail_h - tray_floor_t / 2.0,
        )
        for i, z in enumerate(shelf_levels):
            side_z = z + tray_floor_t / 2.0 + rail_h / 2.0
            rack_parts.extend([
                # Le vrai range-épices est un châssis latéral avec de petits bacs
                # ouverts : fond + lèvres latérales/front/back, pas trois boîtes
                # fermées empilées. Le faux doublon à éviter est le module HB legacy.
                _flat_box("PulloutRack_Shelf_%d" % i, (rack_w, rack_d, tray_floor_t), (fcx, y_center, z), mat, parent=cabinet),
                _flat_box("PulloutRack_LeftSideRail_%d" % i, (t, rack_d, rail_h), (x0 + t / 2.0, y_center, side_z), mat, parent=cabinet),
                _flat_box("PulloutRack_RightSideRail_%d" % i, (t, rack_d, rail_h), (x1 - t / 2.0, y_center, side_z), mat, parent=cabinet),
                _flat_box("PulloutRack_FrontLip_%d" % i, (rack_w, t, rail_h), (fcx, y0 + t * 1.5, side_z), mat, parent=cabinet),
                _flat_box("PulloutRack_BackLip_%d" % i, (rack_w, t, rail_h), (fcx, y1 - t * 1.5, side_z), mat, parent=cabinet),
            ])
        group.extend(rack_parts)
        bpy.context.view_layer.update()
    seen = set()
    moved = 0
    shift = Matrix.Translation(Vector((0.0, -pull, 0.0)))
    for o in group:
        if o.name in seen:
            continue
        seen.add(o.name)
        world = shift @ o.matrix_world.copy()
        o.parent = cabinet
        o.matrix_world = world
        moved += 1
    bpy.context.view_layer.update()
    if moved:
        log("open_pullouts: " + str(moved) + " élément(s) sorti(s), profondeur " + str(round(pull, 3)) + " m")
    return moved


def setup_shadow_catcher_floor(cabinet):
    # Grand plan capteur d'ombre : il participe à l'occlusion lumineuse comme
    # un vrai sol (l'éclairage du caisson reste naturel) et capte l'ombre.
    # L'ombre est ensuite atténuée en post-process PIL (SHADOW_FADE) — même
    # éclairage produit, ombre plancher discrète.
    bmin, bmax = world_bbox(cabinet)
    size = bmax - bmin
    span = max(size.x, size.y, size.z)
    bpy.ops.mesh.primitive_plane_add(
        size=span * 30.0,
        location=((bmin.x + bmax.x) / 2.0, (bmin.y + bmax.y) / 2.0, bmin.z),
    )
    floor = bpy.context.object
    floor.name = "Dilamco_Shadow_Catcher"
    floor.is_shadow_catcher = True
    assign_material(floor, material("Dilamco_Shadow_Catcher", (1, 1, 1, 1), 0.8))


def setup_negative_fill(cabinet):
    # Drapeau négatif (technique studio) : grand plan sombre hors champ du côté
    # visible par la caméra (+X). Invisible à la caméra, il retire de la lumière
    # HDRI sur le panneau latéral → dégradé gris doux qui détache le caisson
    # blanc du fond pâle du site (sinon blanc-sur-blanc, produit illisible).
    bmin, bmax = world_bbox(cabinet)
    size = bmax - bmin
    span = max(size.y, size.z)
    bpy.ops.mesh.primitive_plane_add(size=1.0, location=(bmax.x + 0.55, 0.35, size.z * 0.55))
    flag = bpy.context.object
    flag.name = "Dilamco_Negative_Fill"
    flag.rotation_euler = (0.0, math.radians(90.0), 0.0)
    # ×6 (pas ×2.6) : le BORD du drapeau se reflétait dans le panneau latéral
    # satiné → fine couture verticale près de l'arête avant (bug repéré par
    # Gabriel 2026-07-01 sur le coin mort). Assez grand = bords hors reflet.
    flag.scale = (span * 6.0, span * 6.0, 1.0)
    flag.visible_camera = False
    # visible_shadow reste True : c'est l'occlusion des shadow rays qui retire
    # la lumière HDRI du panneau latéral (sans ça, effet quasi nul — mesuré).
    # Opacité partielle : occlusion TOTALE (alpha 1) écrase le côté à ~117 de
    # luminance (gris sale), alpha 0.22 ne fait rien (236). La réponse n'est
    # pas linéaire ; ~0.45 au centre → côté ~220, juste sous le fond (241).
    # DÉGRADÉ radial obligatoire (pas d'alpha uniforme) : un bord net du
    # drapeau se reflète dans le panneau satiné = fine couture verticale
    # (bug repéré par Gabriel 2026-07-01, persistait même drapeau ×6).
    flag.location.z = size.z * 0.55 + 0.10
    mat = bpy.data.materials.get("Dilamco_Negative_Fill_Grad")
    if not mat:
        mat = bpy.data.materials.new("Dilamco_Negative_Fill_Grad")
        mat.use_nodes = True
        nt = mat.node_tree
        for node in list(nt.nodes):
            nt.nodes.remove(node)
        out = nt.nodes.new("ShaderNodeOutputMaterial")
        bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
        bsdf.inputs["Base Color"].default_value = (0.03, 0.03, 0.03, 1)
        bsdf.inputs["Roughness"].default_value = 0.9
        texco = nt.nodes.new("ShaderNodeTexCoord")
        grad = nt.nodes.new("ShaderNodeTexGradient")
        grad.gradient_type = "SPHERICAL"  # 1 au centre de l'objet, 0 en s'éloignant
        # Coords locales du plan = ±0.5 → Fac aux bords ≈ 0.5 (jamais 0). La
        # rampe doit donc éteindre l'alpha À PARTIR de 0.5 pour que le bord du
        # plan soit strictement invisible (sinon la couture revient).
        ramp = nt.nodes.new("ShaderNodeMapRange")
        ramp.inputs["From Min"].default_value = 0.52
        ramp.inputs["From Max"].default_value = 0.92
        ramp.inputs["To Min"].default_value = 0.0
        ramp.inputs["To Max"].default_value = 0.55
        nt.links.new(texco.outputs["Object"], grad.inputs["Vector"])
        nt.links.new(grad.outputs["Fac"], ramp.inputs["Value"])
        nt.links.new(ramp.outputs["Result"], bsdf.inputs["Alpha"])
        nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    assign_material(flag, mat)


def setup_camera(cabinet):
    bmin, bmax = world_bbox(cabinet)
    center = (bmin + bmax) * 0.5
    size = bmax - bmin
    # Empreinte horizontale projetée en vue 3/4 = diagonale du footprint ;
    # sans elle, les caissons larges (coins 42-48 po) sortent du cadre.
    horiz = math.sqrt(size.x * size.x + size.y * size.y)
    half_fov_tan = 18.0 / 85.0  # 85mm lens, 36mm sensor
    # Caisson TRÈS HAUT (garde-manger, ratio h/l > 1.6) : dans un cadre carré il
    # se réduit à un mince filet perdu (« trop loin »). On SERRE le cadre sur sa
    # hauteur (marge 6 %) et on CENTRE la cible verticalement → il remplit la
    # hauteur du carré = beaucoup plus gros/détaillé. (Reste carré : la galerie
    # object-contain + la lightbox PhotoSwipe 1600² supposent un carré.)
    tall = size.z > horiz * 1.6
    if tall:
        extent = size.z * 1.06
        target = Vector((center.x, center.y - size.y * 0.10, center.z))
    else:
        # Slightly below mid-height, near-horizontal view: reads like a product
        # photo and keeps the open cabinet top mostly out of sight.
        extent = max(size.z * 1.32, horiz * 1.30)
        target = Vector((center.x, center.y - size.y * 0.10, bmin.z + size.z * 0.48))
    distance = (extent / 2.0) / half_fov_tan
    # Vue à 15° de lacet : la façade domine, le côté donne le volume. Caméra
    # sous le dessus du caisson pour cacher la carcasse ouverte des modules du bas.
    # Angle de vue surchargeable (showcase multi-angles) ; défaut = 3/4 avant-droit.
    # Vue packshot standard : légèrement plongeante. Les vues ouvertes peuvent
    # surcharger `cam_dir` plus bas/frontal pour se rapprocher d'une vraie photo
    # de produit, où on lit l'intérieur plutôt que le dessus du caisson.
    direction = Vector(CONFIG.get("cam_dir", (0.415, -1.55, 0.42))).normalized()
    loc = target + direction * distance
    # (Plus de plafond caméra : le dessus est maintenant BOULEAU, il ne se fond
    # plus dans le fond clair — on peut/veut le montrer d'en haut.)

    bpy.ops.object.camera_add(location=loc)
    cam = bpy.context.object
    cam.name = "HB5_Product_Camera"
    cam.data.type = "PERSP"
    cam.data.lens = float(CONFIG.get("camera_lens", 85.0))
    cam.data.dof.use_dof = False
    cam.rotation_euler = (target - cam.location).to_track_quat("-Z", "Y").to_euler()
    bpy.context.scene.camera = cam
    log("Camera loc=" + repr(tuple(round(v, 3) for v in loc)) + " dist=" + repr(round(distance, 3)))


def setup_lighting(cabinet=None):
    world = bpy.context.scene.world or bpy.data.worlds.new("World")
    bpy.context.scene.world = world
    world.use_nodes = True
    nt = world.node_tree
    for node in list(nt.nodes):
        nt.nodes.remove(node)
    out = nt.nodes.new("ShaderNodeOutputWorld")
    bg = nt.nodes.new("ShaderNodeBackground")
    hdri_path = CONFIG.get("hdri") or ""
    if hdri_path and Path(hdri_path).is_file():
        # HDRI studio = la clé des produits blancs : les panneaux lumineux
        # créent des dégradés dans les reflets qui donnent du relief aux
        # surfaces planes. Rotation pour orienter le grand panneau vers la
        # façade (-Y) du caisson.
        env = nt.nodes.new("ShaderNodeTexEnvironment")
        env.image = bpy.data.images.load(hdri_path, check_existing=True)
        texco = nt.nodes.new("ShaderNodeTexCoord")
        mapping = nt.nodes.new("ShaderNodeMapping")
        mapping.inputs["Rotation"].default_value = (0.0, 0.0, math.radians(CONFIG.get("hdri_rotation_deg", 0.0)))
        nt.links.new(texco.outputs["Generated"], mapping.inputs["Vector"])
        nt.links.new(mapping.outputs["Vector"], env.inputs["Vector"])
        nt.links.new(env.outputs["Color"], bg.inputs["Color"])
        # HDRI studio : reflets propres + modelé sur le blanc. Depuis le banc
        # lumière 2026-07-12 il est réduit à 0.5 (une ambiance pleine force
        # enveloppe tout uniformément = façades plates) ; la key + Top_Softbox
        # rapprochée portent la direction de la lumière.
        bg.inputs["Strength"].default_value = float(CONFIG.get("hdri_strength", 0.5))
        log("World HDRI: " + hdri_path)
    else:
        bg.inputs["Color"].default_value = (0.82, 0.82, 0.80, 1)
        bg.inputs["Strength"].default_value = 0.45
    nt.links.new(bg.outputs["Background"], out.inputs["Surface"])

    def area(name, loc, energy, size, target=(0, 0, 0.45), cast_shadow=True):
        bpy.ops.object.light_add(type="AREA", location=loc)
        light = bpy.context.object
        light.name = name
        light.data.energy = energy
        light.data.size = size
        light.data.use_shadow = cast_shadow
        direction = Vector(target) - light.location
        light.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()

    # Cible verticale des lampes d'appoint : z~0.5 par défaut (caissons courts,
    # centrés bas). Pour un caisson TRÈS HAUT (garde-manger, qui monte à ~2.3 m),
    # on VISE SON CENTRE — sinon la key/rim n'arrosent que le bas et les portes
    # du haut ressortent grises (mesure : 207 vs 220 pour une murale). L'énergie
    # est aussi remontée (le caisson est bien plus loin de la lampe).
    # Hiérarchie voulue (feedback Gabriel 2026-07-03) : la FAÇADE est la face la
    # plus claire, le côté légèrement plus sombre (avant : façade 212 vs côté 228,
    # inversé). Recette : key frontale seule (le rim est SUPPRIMÉ — il rasait le
    # panneau +X) + drapeau noir côté +X (bloc plus bas).
    key_z = 0.50
    # 42 W (banc 2026-07-12, recette X3) : compense le HDRI réduit à 0.5.
    key_energy = float(CONFIG.get("key_energy", 42.0))
    if cabinet is not None:
        bmin, bmax = world_bbox(cabinet)
        s = bmax - bmin
        horiz = math.sqrt(s.x * s.x + s.y * s.y)
        if s.z > horiz * 1.6:  # très haut : viser le CENTRE (sinon portes du haut
            # grises car la key/rim n'arrosent que le bas), + boost d'énergie SCALÉ
            # par l'étroitesse : un garde-manger ÉTROIT (façade oblique + grand côté
            # sombre) sort gris, un LARGE surexpose vite → le boost décroît avec la
            # largeur. Bornes : ~×1.6 (étroit 12") → ~×1.0 (large 30").
            key_z = (bmin.z + bmax.z) / 2.0
            boost = max(1.0, min(1.6, 1.25 / horiz))
            key_energy *= boost
    # cast_shadow=True : la key (haut-gauche) projette une ombre DOUCE (grande area
    # 1.8) qui DÉFINIT le renfoncement shaker (arêtes haut+gauche à l'ombre = lecture
    # « creux »). Sans ça le shaker est invisible (feedback Gabriel 2026-07-05).
    key_size = float(CONFIG.get("key_size", 2.2))
    area("Key_Soft", (-1.5, -1.1, 2.3), key_energy, key_size, target=(0.0, 0.0, key_z), cast_shadow=True)
    # SOFTBOX du HAUT-avant (comme les photos produit pro) : grande area douce, au-
    # dessus et légèrement devant, qui projette l'ombre sur l'arête HAUTE des
    # renfoncements shaker + fait « rouler » le liseré lumière/ombre sur les arêtes
    # arrondies (bevel). cast_shadow=True. Énergie modérée (appoint du haut, ne doit
    # pas délaver la façade ni inverser la hiérarchie).
    # Hauteur/taille/énergie paramétriques (banc lumière 2026-07-12, recette X3
    # bakée) : RAPPROCHER la softbox (top_z 3.0 → 1.9) crée le FALLOFF vertical
    # haut→bas sur la façade (loi du carré inverse sur la hauteur du caisson)
    # que la position haute historique ne produisait pas (delta mesuré 0.1 →
    # 4.3). Énergie ramenée à ×0.5 pour compenser le rapprochement.
    top_z = 0.55 if cabinet is None else key_z
    top_height = float(CONFIG.get("top_softbox_z", 1.9))
    top_mult = float(CONFIG.get("top_softbox_mult", 0.5))
    top_size = float(CONFIG.get("top_softbox_size", 2.4))
    area("Top_Softbox", (-0.35, -1.2, top_height), key_energy * top_mult, top_size,
         target=(0.0, -0.15, top_z), cast_shadow=True)
    if CONFIG.get("view") == "open":
        # Vue tiroirs ouverts : fill doux quasi vertical AU-DESSUS des caisses
        # sorties (y~-0.35) -> l'INTERIEUR des caisses recoit de la lumiere
        # (sinon il tombe dans l'ombre = bois brun sale), mais il doit ENCORE
        # laisser des ombres de contact sous le tiroir et sur l'étagère. Un fill
        # sans ombres rendait l'intérieur plat/CG.
        area(
            "Open_Boxes_Fill",
            (0.0, -0.45, 1.45),
            key_energy * float(CONFIG.get("open_fill_mult", 0.28)),
            float(CONFIG.get("open_fill_size", 1.8)),
            target=(0.0, -0.35, 0.3),
            cast_shadow=True,
        )
        area(
            "Open_Interior_Bounce",
            (0.0, -1.65, 0.75),
            key_energy * float(CONFIG.get("open_bounce_mult", 0.10)),
            2.6,
            target=(0.0, 0.0, 0.32),
            cast_shadow=False,
        )
    # PAS de rim : il rasait le panneau latéral +X et l'éclaircissait au-dessus
    # de la façade — hiérarchie inversée sur TOUS les finis (feedback Gabriel
    # 2026-07-03). La façade est éclairée par la key ; le côté est assombri par
    # le drapeau ci-dessous.
    # PAS de lampe d'appoint sur le toe-kick : toute lampe assez forte pour
    # neutraliser le reflet crème délave aussi le tiroir du bas (vérifié sur la
    # fiche produit — bas du caisson « glow »). Le reflet est réglé À LA SOURCE
    # dans normalize_product_materials (dessous du caisson blanc, pas érable).

    # NB : le seul drapeau négatif est l'historique `setup_negative_fill` (dégradé
    # radial, appelé dans le flux de rendu). Un DEUXIÈME drapeau noir opaque a été
    # essayé ici (2026-07-03) pour assombrir le côté : il bloque le GI du HDRI et
    # assombrit TOUT le caisson (blanc gris L181, navi noir) — rejeté. La
    # hiérarchie façade>côté se règle par la ROTATION du HDRI (270°) + key seule.


def configure_render():
    scene = bpy.context.scene
    try:
        bpy.ops.preferences.addon_enable(module="cycles")
        # The static RNA enum does not list dynamically registered engines, so
        # assign directly instead of checking enum_items first.
        scene.render.engine = "CYCLES"
    except Exception as exc:
        log("Cycles unavailable, keeping " + scene.render.engine + ": " + str(exc))
    log("Render engine: " + scene.render.engine)
    if scene.render.engine == "CYCLES":
        # GPU (OptiX sur RTX, fallback CUDA) : ~10x plus rapide, qualité idem.
        try:
            prefs = bpy.context.preferences.addons["cycles"].preferences
            for device_type in ("OPTIX", "CUDA"):
                try:
                    prefs.compute_device_type = device_type
                    break
                except Exception:
                    continue
            prefs.get_devices()
            for d in prefs.devices:
                d.use = d.type != "CPU"
            scene.cycles.device = "GPU"
            log("Cycles device: GPU (" + prefs.compute_device_type + ")")
        except Exception as exc:
            log("GPU indisponible, CPU: " + str(exc))
        scene.cycles.samples = int(CONFIG["samples"])
        scene.cycles.use_denoising = True
        # Adaptive sampling : ne réduit les samples que là où le bruit est
        # déjà sous le seuil — gain de temps sans perte visible.
        scene.cycles.use_adaptive_sampling = True
        scene.cycles.adaptive_threshold = float(CONFIG.get("adaptive_threshold", 0.01))
        # REBONDS DE LUMIÈRE : levier disponible mais DÉSACTIVÉ par défaut
        # (2026-07-14). Testé : limiter à 4 total / 2 diffus ne réduit PAS le
        # temps (40 s vs 37 s baseline sur S8-DB15 open) — le rendu n'est PAS
        # limité par la profondeur de rebonds mais par le shading par pixel
        # (matériaux bois triplanar + HDRI + denoiser). On garde donc les
        # défauts Cycles pour préserver exactement l'éclairage indirect des
        # crevasses/intérieurs. Réactivable via limit_bounces si un cas le
        # justifie (le prouver au chrono).
        if CONFIG.get("limit_bounces", False):
            scene.cycles.max_bounces = int(CONFIG.get("max_bounces", 4))
            scene.cycles.diffuse_bounces = int(CONFIG.get("diffuse_bounces", 2))
            scene.cycles.glossy_bounces = int(CONFIG.get("glossy_bounces", 2))
            scene.cycles.transmission_bounces = int(CONFIG.get("transmission_bounces", 2))
            scene.cycles.volume_bounces = 0
            scene.cycles.transparent_max_bounces = int(CONFIG.get("transparent_bounces", 8))
    scene.render.resolution_x = int(CONFIG["resolution"][0])
    scene.render.resolution_y = int(CONFIG["resolution"][1])
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.film_transparent = True
    scene.render.filepath = CONFIG["output"]

    # Khronos PBR Neutral : garde le BLANC propre (AgX grise/désature les albédos
    # → look « gris terne »). Conçu pour les packshots e-commerce. NB : l'enum RNA
    # statique ne liste pas les view transforms OCIO — assigner et rattraper.
    for view_transform in ("Khronos PBR Neutral", "AgX"):
        try:
            scene.view_settings.view_transform = view_transform
            break
        except Exception as exc:
            log("view_transform " + view_transform + " indisponible: " + str(exc))
    log("View transform: " + scene.view_settings.view_transform)
    scene.view_settings.look = "None"
    # -0.15 (banc 2026-07-12, recette Y2) : avec le rig X3 (HDRI 0.5, key 42)
    # la façade blanche sort à ~229 — assez claire pour lire « blanc » (à -0.22
    # elle sortait à ~225 et Gabriel la percevait grise vs le fond 241), assez
    # décollée pour garder falloff 4 et marge 12. À -0.1 le falloff retombe à
    # 2,3 (compression des hautes lumières) et le caisson se fond dans le fond.
    scene.view_settings.exposure = float(CONFIG.get("exposure", -0.15))


def hard_reset_scene():
    # Suppression explicite (select_all rate les objets cachés : orphelins de
    # pulls, floor…), puis purge des datablocks orphelins. Les images texture
    # restent chargées — c'est voulu, ça évite de relire les JPG à chaque item.
    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
    for datablocks in (bpy.data.meshes, bpy.data.curves, bpy.data.lights, bpy.data.cameras):
        for item in list(datablocks):
            if item.users == 0:
                datablocks.remove(item)


def _flat_box(name, dims, location, finish_mat, parent=None):
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=location)
    box = bpy.context.object
    box.name = name
    # Cube unité (size=1.0, bornes ±0.5) : la scale EST la dimension finale.
    box.scale = dims
    assign_material(box, finish_mat)
    bevel = box.modifiers.new("edge radius", "BEVEL")
    bevel.width = 0.0012
    bevel.segments = 2
    bevel.use_clamp_overlap = True
    if parent is not None:
        # IMPORTANT : recalculer les matrices AVANT de lire parent.matrix_world.
        # En headless, matrix_world n'est pas rafraîchi après avoir posé la scale
        # du parent → un matrix_parent_inverse périmé est STOCKÉ et persiste au
        # rendu (bug : Door_Panel de la 2e porte micro-ondes ressortait en cube
        # de 1 m). view_layer.update() garantit un parent.matrix_world à jour.
        bpy.context.view_layer.update()
        box.parent = parent
        box.matrix_parent_inverse = parent.matrix_world.inverted()
    return box


def _paint_flat_side_carcass(obj, finish, interior, cabinet_cx=0.0, floor_z=0.0):
    # Côtés _flat_box : extérieur au fini, intérieur bouleau, dessus = chant plis.
    # apply_birch_interior() ne suffit pas ici (mesh cube parenté, 1 seule face touchée).
    # Sous floor_z (zone toe-kick) : face intérieure au fini — visible de l'extérieur
    # dans le vide du plintheau, pas de bouleau.
    bpy.context.view_layer.update()
    plies = build_chant_plies_material()
    me = obj.data
    if not me or not me.polygons:
        return
    mw = obj.matrix_world
    bb0, bb1 = world_bbox(obj)
    scx = (bb0.x + bb1.x) / 2.0
    inward = 1.0 if scx < cabinet_cx else -1.0
    me.materials.clear()
    me.materials.append(finish)
    me.materials.append(interior)
    me.materials.append(plies)
    n_int = n_top = 0
    for poly in me.polygons:
        # Normaliser après matrix_world : sur un côté mince (scale.x ~ 0.0175),
        # mw.to_3x3() @ n écrase nrm.x sous le seuil sans .normalize().
        nrm = mw.to_3x3() @ poly.normal
        if nrm.length > 1e-8:
            nrm.normalize()
        fc_z = (mw @ poly.center).z
        if nrm.z > 0.45:
            poly.material_index = 2
            n_top += 1
        elif nrm.x * inward > 0.45 and fc_z > floor_z:
            poly.material_index = 1
            n_int += 1
        else:
            poly.material_index = 0
    log("flat side carcass " + obj.name + ": int=" + str(n_int) + " top=" + str(n_top))


def _paint_flat_bottom_carcass(obj, finish, interior):
    # Plancher _flat_box : dessus = bouleau intérieur, reste = fini extérieur.
    bpy.context.view_layer.update()
    me = obj.data
    if not me or not me.polygons:
        return
    mw = obj.matrix_world
    me.materials.clear()
    me.materials.append(finish)
    me.materials.append(interior)
    n_top = 0
    for poly in me.polygons:
        nrm = mw.to_3x3() @ poly.normal
        if nrm.length > 1e-8:
            nrm.normalize()
        if nrm.z > 0.45:
            poly.material_index = 1
            n_top += 1
        else:
            poly.material_index = 0
    log("flat bottom carcass " + obj.name + ": top=" + str(n_top))


def _shaker_door(width, height, thickness, center, mat, parent=None, name="Door"):
    # Porte shaker 5 pièces centrée sur `center`, face dans le plan X-Z,
    # épaisseur le long de Y (front du caisson = -Y). Le cadre est généré en
    # UN SEUL mesh unionné pour éviter les joints visuels rail/montant.
    cx, cy, cz = center
    rw = min(CONFIG.get("shaker_rail_m", 0.0254), width / 3.0, height / 3.0)
    inner = width - 2.0 * rw
    inner_h = height - 2.0 * rw
    x0 = cx - width / 2.0
    x1 = cx + width / 2.0
    z0 = cz - height / 2.0
    z1 = cz + height / 2.0
    y0 = cy - thickness / 2.0
    y1 = cy + thickness / 2.0
    frame_rects = [
        (x0, x0 + rw, z0, z1),
        (x1 - rw, x1, z0, z1),
        (x0 + rw, x1 - rw, z1 - rw, z1),
        (x0 + rw, x1 - rw, z0, z0 + rw),
    ]
    root = _frame_union(name + "_Frame", frame_rects, y0, y1, mat, parent)
    root["IS_CLEAN_SHAKER_FRONT"] = True
    if inner > 0.01 and inner_h > 0.01:
        recess = min(0.006, thickness * 0.45)
        panel_y0 = y0 + recess
        panel_t = max(0.004, y1 - panel_y0)
        panel = _flat_box(
            name + "_Panel",
            (inner, panel_t, inner_h),
            (cx, panel_y0 + panel_t / 2.0, cz),
            mat,
            parent=root,
        )
        panel["IS_CLEAN_SHAKER_PANEL"] = True
    return root


def _bar_pull(center, length, mat, horizontal=True, parent=None):
    # Pas de quincaillerie sur les packshots (préférence Gabriel 2026-07-01) :
    # les façades se lisent par leur cadre shaker, pas par la poignée.
    return None


def build_pullout_cabinet():
    # Caisson coulissant (range-épices, déchets) : carcasse + UNE porte pleine
    # hauteur + poignée barre HORIZONTALE centrée EN HAUT (préférence Gabriel).
    W = float(CONFIG["width_m"])
    H = float(CONFIG["height_m"])
    D = float(CONFIG["depth_m"])
    finish = build_finish_material()
    black = material("Dilamco_Product_Matte_Black_Pull", (0.015, 0.015, 0.015, 1), 0.80, 0.0, specular=0.05)
    t = 0.0175
    tkh = 0.1143      # toe-kick 4.5 po (caisson BASE)
    setback = 0.0762  # recul du toe-kick 3 po
    # Carcasse : côtés pleine hauteur jusqu'au sol, fond/bas surélevés au-dessus
    # du toe-kick, panneau de toe-kick reculé à l'avant-bas.
    root = _flat_box("PO_Bottom", (W, D, t), (0.0, 0.0, tkh + t / 2.0), finish)
    _flat_box("PO_Top", (W, D, t), (0.0, 0.0, H - t / 2.0), build_shelf_material(), parent=root)
    _flat_box("PO_Left", (t, D, H), (-W / 2.0 + t / 2.0, 0.0, H / 2.0), finish, parent=root)
    _flat_box("PO_Right", (t, D, H), (W / 2.0 - t / 2.0, 0.0, H / 2.0), finish, parent=root)
    _flat_box("PO_Back", (W - 2.0 * t, t, H - tkh), (0.0, D / 2.0 - t / 2.0, tkh + (H - tkh) / 2.0), finish, parent=root)
    _flat_box("PO_ToeKick", (W - 2.0 * t, t, tkh), (0.0, -D / 2.0 + setback, tkh / 2.0), finish, parent=root)
    door_t = 0.019
    reveal = 0.003
    dcy = -D / 2.0 - door_t / 2.0
    # Porte à partir du dessus du toe-kick (pas jusqu'au sol).
    dh = (H - tkh) - 2.0 * reveal
    dcz = tkh + (H - tkh) / 2.0
    _shaker_door(W - 2.0 * reveal, dh, door_t, (0.0, dcy, dcz), finish, parent=root)
    # Poignée : barre horizontale centrée, dans le tiers haut de la façade.
    pull_len = min(0.127, W * 0.62)
    pull_y = dcy - door_t / 2.0 - 0.012
    pull_z = H - 0.075
    _bar_pull((0.0, pull_y, pull_z), pull_len, black, horizontal=True, parent=root)
    return root


def build_microwave_cabinet():
    # Mural avec espace micro-ondes : carcasse + NICHE OUVERTE en bas (le micro-
    # ondes s'y loge) + portes en haut. Pas de toe-kick (caisson mural).
    W = float(CONFIG["width_m"])
    H = float(CONFIG["height_m"])
    D = float(CONFIG["depth_m"])
    finish = build_finish_material()
    # NICHE MICRO-ONDES = au FINI EXTÉRIEUR (renfoncement d'électro fini mélamine) :
    # caisson blanc → niche BLANCHE ; caisson chêne → niche chêne (précision Gabriel
    # 2026-07-02). Ce n'est PAS un intérieur brut bouleau (≠ tablettes/coin aveugle).
    black = material("Dilamco_Product_Matte_Black_Pull", (0.015, 0.015, 0.015, 1), 0.80, 0.0, specular=0.05)
    t = 0.0175
    open_h = min(0.4064, H * 0.45)  # niche micro-ondes ~16 po en bas
    # Caisse standard : les CÔTÉS sont pleine hauteur (gables), le bas/haut
    # s'insèrent ENTRE eux (largeur W-2t). Évite le chevauchement côté/bas aux
    # coins z[0,t] (qui créait une poche d'AO = petit carré gris au coin avant).
    root = _flat_box("MW_Bottom", (W - 2.0 * t, D, t), (0.0, 0.0, t / 2.0), finish)
    _flat_box("MW_Top", (W - 2.0 * t, D, t), (0.0, 0.0, H - t / 2.0), build_shelf_material(), parent=root)
    _flat_box("MW_Left", (t, D, H), (-W / 2.0 + t / 2.0, 0.0, H / 2.0), finish, parent=root)
    _flat_box("MW_Right", (t, D, H), (W / 2.0 - t / 2.0, 0.0, H / 2.0), finish, parent=root)
    _flat_box("MW_Back", (W - 2.0 * t, t, H), (0.0, D / 2.0 - t / 2.0, H / 2.0), finish, parent=root)
    _flat_box("MW_Shelf", (W - 2.0 * t, D - t, t), (0.0, -t / 2.0, open_h), finish, parent=root)
    # Pas de « liners » : la niche est déjà formée par la carcasse AU FINI (blanc
    # ou chêne). Les anciens liners bois de 3 mm (utiles quand l'intérieur était
    # bouleau, donc un matériau différent posé PAR-DESSUS) sont désormais
    # redondants et créaient des arêtes en escalier + une pastille d'AO sombre au
    # coin avant-bas (bug packshot). Supprimés → coins nets.
    door_t = 0.019
    reveal = 0.003
    zone_h = H - open_h
    dh = zone_h - 2.0 * reveal
    dcz = open_h + zone_h / 2.0
    dcy = -D / 2.0 - door_t / 2.0
    pull_y = dcy - door_t / 2.0 - 0.012
    pull_len = 0.10
    pull_z = open_h + reveal + 0.06
    if W < 0.55:
        _shaker_door(W - 2.0 * reveal, dh, door_t, (0.0, dcy, dcz), finish, parent=root)
        _bar_pull((W / 2.0 - 0.05, pull_y, pull_z), pull_len, black, horizontal=False, parent=root)
    else:
        gap = 0.003
        dw = (W - 3.0 * reveal) / 2.0
        lx = -(dw / 2.0 + gap / 2.0)
        rx = dw / 2.0 + gap / 2.0
        ldoor = _shaker_door(dw, dh, door_t, (lx, dcy, dcz), finish, parent=root)
        _shaker_door(dw, dh, door_t, (rx, dcy, dcz), finish, parent=root)
        # Poignées verticales près du joint central (look caisson mural 2 portes).
        lpull = _bar_pull((lx + dw / 2.0 - 0.02, pull_y, pull_z), pull_len, black, horizontal=False, parent=root)
        _bar_pull((rx - dw / 2.0 + 0.02, pull_y, pull_z), pull_len, black, horizontal=False, parent=root)
        # Porte gauche ouverte (showcase) : pivot vertical sur la charnière (bord
        # gauche extérieur), la porte + sa poignée s'ouvrent vers l'avant (-Y).
        open_deg = float(CONFIG.get("open_door_deg", 0) or 0)
        if open_deg:
            hinge_x = lx - dw / 2.0
            bpy.ops.object.empty_add(location=(hinge_x, dcy + door_t / 2.0, dcz))
            piv = bpy.context.object
            piv.name = "MW_DoorPivot"
            piv.parent = root
            piv.matrix_parent_inverse = root.matrix_world.inverted()
            for o in (ldoor, lpull):
                if o is None:
                    continue
                o.parent = piv
                o.matrix_parent_inverse = piv.matrix_world.inverted()
            piv.rotation_euler.z = math.radians(-open_deg)  # +deg = ouvre vers l'avant
            bpy.context.view_layer.update()
    return root


def build_flat_panel():
    # Pièce plate : planche aux dimensions du catalogue, debout face caméra.
    # Mesh brut = les slots de materiau s'appliquent directement (pas de geonode).
    width = float(CONFIG["width_m"])
    height = float(CONFIG["height_m"])
    thickness = float(CONFIG["depth_m"])
    finish_mat = build_finish_material()

    if CONFIG.get("flat_style") == "shaker":
        # Porte shaker render-only propre : cadre unionné, pas 4 morceaux qui
        # créent des coutures rail/montant au rendu.
        return _shaker_door(width, height, thickness, (0.0, 0.0, height / 2.0), finish_mat, name="Dilamco_Door")

    return _flat_box(
        "Dilamco_Flat_Panel",
        (width, thickness, height),
        (0.0, 0.0, height / 2.0),
        finish_mat,
    )


def add_shaker_frame_to_pullouts(cabinet):
    # Les façades Pullout (range-épices/déchets) sont des panneaux lisses (slab).
    # Un simple cadre RAPPORTÉ en saillie sur le slab ne projette AUCUNE ombre
    # lisible sur blanc (ressaut trop faible + éclairage doux → façade « slab »).
    # On REMPLACE donc le slab par une VRAIE porte shaker 5 pièces `_shaker_door`
    # (panneau ENCASTRÉ dans un cadre plein) — exactement la géométrie de toutes
    # les autres portes du catalogue → même lecture, rail 1 po (préférence Gabriel).
    fronts = [o for o in cabinet.children_recursive if o.get("IS_PULLOUT_FRONT")]
    if not fronts:
        return
    finish_mat = build_finish_material()
    is_garbage = CONFIG.get("category") == "base-cabinet-garbage-pull-out"
    deps = bpy.context.evaluated_depsgraph_get()
    for front in fronts:
        ev = front.evaluated_get(deps)
        try:
            me = ev.to_mesh()
        except Exception:
            continue
        if not me.vertices:
            ev.to_mesh_clear()
            continue
        pts = [front.matrix_world @ v.co for v in me.vertices]
        ev.to_mesh_clear()
        xmin = min(p.x for p in pts); xmax = max(p.x for p in pts)
        ymin = min(p.y for p in pts); ymax = max(p.y for p in pts)
        zmin = min(p.z for p in pts); zmax = max(p.z for p in pts)
        w = xmax - xmin
        h = zmax - zmin
        cx = (xmin + xmax) / 2.0
        cz = (zmin + zmax) / 2.0
        cy = (ymin + ymax) / 2.0
        thk = max(ymax - ymin, 0.018)        # épaisseur porte (≥18 mm)
        # Masquer le slab HB d'origine : la vraie porte shaker prend sa place.
        old_pullout_root = front.parent
        base_name = front.name.replace("_Frame", "").replace("_Panel", "")
        door = _shaker_door(w, h, thk, (cx, cy, cz), finish_mat, parent=cabinet, name=base_name)
        door["IS_RENDER_PULLOUT_FRONT"] = True
        door["IS_PULLOUT_FRONT"] = True
        door.name = base_name
        log("Shaker door built over " + front.name)
        if is_garbage and old_pullout_root is not None:
            old_pullout_root["IS_GARBAGE_PULLOUT_ASSEMBLY"] = True
            for part in [old_pullout_root] + list(old_pullout_root.children_recursive):
                part["IS_GARBAGE_PULLOUT_PART"] = True
            legacy_parts = [front] + list(front.children_recursive)
        elif old_pullout_root is not None and "pulloutrack" not in old_pullout_root.name.lower():
            legacy_parts = list(old_pullout_root.children_recursive) + [old_pullout_root]
        else:
            legacy_parts = [front] + list(front.children_recursive)
        for legacy in reversed(list(dict.fromkeys(legacy_parts))):
            if legacy.name in bpy.data.objects:
                bpy.data.objects.remove(legacy, do_unlink=True)
        if is_garbage:
            log("Garbage pullout front replaced, assembly kept")
        else:
            log("Legacy pullout module removed")


def hide_all_pulls():
    # SUPPRIME toute la quincaillerie de la scène, pulls HB inclus. Doit être
    # appelé après le run_calc_fix final : les handlers HB ré-affichent les
    # pulls masqués au moment du rendu (hide_render ne suffit PAS — vérifié).
    for obj in [o for o in bpy.data.objects if o.type == "MESH" and _is_pull(o)]:
        name = obj.name
        bpy.data.objects.remove(obj, do_unlink=True)
        log("pull supprimé (final) <- " + name)
    bpy.context.view_layer.update()


def fit_pulls_to_fronts(cabinet):
    # Les poignées HB ont une LONGUEUR FIXE (taille du modèle de quincaillerie),
    # indépendante de la largeur du caisson. Sur une façade étroite (range-épices
    # 6"), la barre déborde sur les montants du cadre shaker. On la rétrécit pour
    # qu'elle tienne dans le panneau intérieur (largeur façade - 2 bandes).
    #
    # Render-only : on opère sur le mesh BAKÉ de la poignée en coordonnées MONDE.
    # Cela survit aux rotations et n'affecte QUE les poignées qui débordent
    # vraiment (garde `pull_w > max_len`) — les caissons larges et les poignées
    # VERTICALES des portes (faible extent X) restent intacts.
    deps = bpy.context.evaluated_depsgraph_get()
    pulls = [
        o for o in cabinet.children_recursive
        if o.type == "MESH" and o.get("IS_CABINET_PULL") and o.data
        and not o.hide_render and len(o.data.vertices)
    ]
    for pull in pulls:
        front = pull.parent
        if front is None:
            continue
        # Bande occupée de chaque côté : 1 po pour le cadre shaker du pullout
        # (cf. add_shaker_frame_to_pullouts), ~2 1/4 po pour une porte/tiroir
        # 5 pièces.
        frame = 0.0254 if front.get("IS_PULLOUT_FRONT") else 0.0572
        fev = front.evaluated_get(deps)
        try:
            fme = fev.to_mesh()
        except Exception:
            continue
        if not fme.vertices:
            fev.to_mesh_clear()
            continue
        fxs = [(front.matrix_world @ v.co).x for v in fme.vertices]
        fev.to_mesh_clear()
        front_w = max(fxs) - min(fxs)
        max_len = front_w - 2.0 * frame - 0.012  # marge ~6 mm de chaque côté
        if max_len <= 0.02:
            max_len = front_w * 0.5
        pxs = [(pull.matrix_world @ v.co).x for v in pull.data.vertices]
        if not pxs:
            continue
        pull_w = max(pxs) - min(pxs)
        if pull_w <= max_len + 1e-4:
            continue  # tient déjà : ne pas toucher
        ratio = max_len / pull_w
        cx = (max(pxs) + min(pxs)) / 2.0
        mw = pull.matrix_world
        minv = mw.inverted()
        for v in pull.data.vertices:
            w = mw @ v.co
            w.x = cx + (w.x - cx) * ratio
            v.co = minv @ w
        pull.data.update()
        log("pull rétréci " + pull.name + " " + str(round(pull_w, 3)) + "->" + str(round(max_len, 3)) + "m")


def build_blind_corner_cabinet():
    # Coin mort (blind corner) — plan technique :
    #   gauche  : ouverture blind (1 tablette)
    #   centre  : montant LARGE du face frame (9" ou 12" — continuité du cadre)
    #   droite  : porte shaker overlay (« door on right »)
    # Pas de panneau filler séparé : le montant central EST le frame.
    # Comme les autres caissons du bas : dessus OUVERT (traverse avant bouleau
    # seulement, pas de panneau supérieur), toe-kick continu (base).
    inch = 0.0254
    W = float(CONFIG["width_m"])
    H = float(CONFIG["height_m"])
    D = float(CONFIG["depth_m"])
    is_base = CONFIG.get("cabinet_type") == "BASE"
    finish = build_finish_material()
    shelf_mat = build_shelf_material()
    interior_mat = shelf_mat
    t = 0.0175
    tkh = 0.1143 if is_base else 0.0
    setback = 0.0762
    inner_h = H - tkh
    # Cadre de façade (1 1/2 po) comme add_face_frame sur les caissons HB :
    # montants/traverses au fini ; ouverture blind | montant central large | porte.
    FW = 0.0381
    FT = 0.019
    xL, xR = -W / 2.0, W / 2.0
    zb, zt = tkh, H
    zb1, zt0 = zb + FW, zt - FW
    xl1, xr0 = xL + FW, xR - FW
    inner_w = W - 2.0 * FW
    width_in = inner_w / inch

    stile_in = 12.0 if (W / inch) >= 41.0 else 9.0
    door_in = 15.0
    blind_in = width_in - stile_in - door_in
    if blind_in < 6.0:
        door_in = max(12.0, width_in - stile_in - 6.0)
        blind_in = width_in - stile_in - door_in
    stile_w = stile_in * inch
    door_w = door_in * inch
    blind_w = blind_in * inch

    x_inner_l = xl1
    x_blind_r = x_inner_l + blind_w
    x_stile_r = x_blind_r + stile_w
    log(
        "blind_corner layout "
        + str(round(W / inch, 1))
        + '" (ouverture cadre '
        + str(round(width_in, 1))
        + '") : blind='
        + str(round(blind_in, 1))
        + '" stile='
        + str(round(stile_in, 1))
        + '" door='
        + str(round(door_in, 1))
        + '"'
    )

    box_front_y = -D / 2.0
    fy1 = box_front_y
    fy0 = box_front_y - FT
    door_t = 0.019
    reveal = 0.003
    dcy = fy0 - door_t / 2.0
    # Façades OVERLAY (comme HB) : recouvrent traverses + montants, pas l'ouverture nette.
    front_h = (zt - zb) - 2.0 * reveal
    front_cz = (zb + zt) / 2.0

    # Carcasse : côtés pleine hauteur, bas entre les côtés, fond plein, PAS de top.
    root = _flat_box("BC_Bottom", (W - 2.0 * t, D, t), (0.0, 0.0, tkh + t / 2.0), finish)
    _flat_box("BC_Left Side", (t, D, inner_h), (-W / 2.0 + t / 2.0, 0.0, tkh + inner_h / 2.0), finish, parent=root)
    _flat_box("BC_Right Side", (t, D, inner_h), (W / 2.0 - t / 2.0, 0.0, tkh + inner_h / 2.0), finish, parent=root)
    # Retours plintheau sur les montants : 100 % fini (visible dans le vide du toe-kick).
    if is_base:
        _flat_box("BC_Left ToeReturn", (t, D, tkh), (-W / 2.0 + t / 2.0, 0.0, tkh / 2.0), finish, parent=root)
        _flat_box("BC_Right ToeReturn", (t, D, tkh), (W / 2.0 - t / 2.0, 0.0, tkh / 2.0), finish, parent=root)
    _flat_box(
        "BC_Back",
        (W - 2.0 * t, t, inner_h),
        (0.0, D / 2.0 - t / 2.0, tkh + inner_h / 2.0),
        interior_mat,
        parent=root,
    )
    if is_base:
        _flat_box("BC_ToeKick", (W - 2.0 * t, t, tkh), (0.0, -D / 2.0 + setback, tkh / 2.0), finish, parent=root)

    # Traverse avant bouleau seulement (fix_stretchers sur les caissons HB).
    st_depth = 0.1016  # ~4 po
    _flat_box(
        "BC_Stretcher_Front",
        (W - 2.0 * t, st_depth, t),
        (0.0, -D / 2.0 + st_depth / 2.0, H - t / 2.0),
        shelf_mat,
        parent=root,
    )

    # Une seule tablette dans le compartiment blind (visible par l'ouverture avant).
    # Pas de cloison interne ni de panneau filler devant.
    shelf_h = inner_h - t
    shelf_w = max(blind_w - t, 0.04)
    shelf_cx = x_inner_l + shelf_w / 2.0
    shelf_z = tkh + t + shelf_h * 0.52
    _flat_box(
        "BC_Shelf",
        (shelf_w, D - 2.0 * t, t),
        (shelf_cx, 0.0, shelf_z),
        shelf_mat,
        parent=root,
    )

    # Face frame : contour + montant central large (continuité du cadre, plan jaune).
    frame_rects = [
        (xL, xR, zt0, zt),
        (xL, xR, zb, zb1),
        (xL, xl1, zb1, zt0),
        (xr0, xR, zb1, zt0),
        (x_blind_r, x_stile_r, zb1, zt0),
    ]
    _frame_union("FaceFrame", frame_rects, fy0, fy1, finish, root)

    # Porte overlay à droite du montant central (ne recouvre pas le stile large).
    door_left = x_stile_r - reveal
    door_right = xR
    door_panel_w = door_right - door_left
    door_cx = (door_left + door_right) / 2.0
    _shaker_door(
        door_panel_w,
        front_h,
        door_t,
        (door_cx, dcy, front_cz),
        finish,
        parent=root,
    )
    # Intérieur bouleau : dessus du plancher + faces intérieures des côtés.
    bpy.context.view_layer.update()
    _paint_flat_bottom_carcass(root, finish, interior_mat)
    for child in root.children:
        if child.type == "MESH" and child.name.endswith("Side"):
            _paint_flat_side_carcass(child, finish, interior_mat)
    return root


def run_one(main_scene):
    mode = CONFIG.get("render_mode")
    if mode in ("flat", "pullout", "microwave", "blind_corner"):
        if mode == "pullout":
            obj = build_pullout_cabinet()
        elif mode == "microwave":
            obj = build_microwave_cabinet()
        elif mode == "blind_corner":
            obj = build_blind_corner_cabinet()
        else:
            obj = build_flat_panel()
        setup_shadow_catcher_floor(obj)
        setup_negative_fill(obj)
        setup_lighting(obj)
        setup_camera(obj)
        configure_render()
        bpy.ops.render.render(write_still=True)
        if not Path(CONFIG["output"]).exists():
            raise RuntimeError("Render completed but output was not written: " + CONFIG["output"])
        log("Wrote " + CONFIG["output"])
        return

    width = float(CONFIG["width_m"])
    height = float(CONFIG["height_m"])
    depth = float(CONFIG["depth_m"])
    # place_cabinet_script uses location_x as the back-left corner. Put the
    # cabinet near world center for predictable camera framing.
    bpy.ops.hb_frameless.place_cabinet_script(
        cabinet_name=CONFIG["cabinet_name"],
        cabinet_type=CONFIG["cabinet_type"],
        width=width,
        depth=depth,
        height=height,
        location_x=-width / 2.0,
        location_y=0.0,
        location_z=0.0,
        rotation_z_deg=0.0,
        quantity=1,
        is_appliance=False,
        appliance_type="",
    )
    cabinet = find_cabinet()
    log("Created " + cabinet.name + " as " + CONFIG["cabinet_name"])

    # HB place les caissons UPPER à hauteur MURALE (bmin.z ~1.5 m), pas à z=0. Or
    # le rig de lumières a des positions FIXES (softbox/key ciblant z~0.5) : une
    # façade à 1.5 m reçoit un éclairage bien plus direct → blanc délavé à ~241 =
    # niveau du fond clair (caisson invisible), alors que la géométrie custom
    # (micro-ondes) et les caissons BAS, à z=0, sortent nets (~208-230). On
    # RE-CENTRE tout caisson au sol (bmin.z=0) → éclairage identique pour tous.
    bmin0, _bmax0 = world_bbox(cabinet)
    if abs(bmin0.z) > 1e-4:
        cabinet.location.z -= bmin0.z
        bpy.context.view_layer.update()
        log("Re-centré au sol (dz=%.3f)" % (-bmin0.z))

    if CONFIG.get("blind_total_m"):
        # Coin aveugle : la section aveugle est un caisson plein (boîte au
        # fini extérieur) accolé à droite de la section porte+tiroir.
        total = float(CONFIG["blind_total_m"])
        fill_w = total - width
        if fill_w > 0.02:
            # Ancrage sur la bbox réelle du caisson : HB place les caissons UPPER
            # en hauteur (et pas à z=0), donc on aligne le panneau aveugle sur la
            # position effective du caisson plutôt que sur des coords supposées.
            bmin, bmax = world_bbox(cabinet)
            cy = (bmin.y + bmax.y) / 2.0
            cz = (bmin.z + bmax.z) / 2.0
            # x depuis la géométrie nominale (le caisson est centré en x=0, bord
            # droit à +width/2) — la bbox inclut la cage HB, plus large, ce qui
            # laisserait un trou. Léger recouvrement (2 mm) pour une jonction nette.
            fill_x = width / 2.0 + fill_w / 2.0 - 0.002
            bpy.ops.mesh.primitive_cube_add(
                size=1.0,
                location=(fill_x, cy, cz),
            )
            fill = bpy.context.object
            fill.name = "Dilamco_Blind_Fill"
            fill.dimensions = (fill_w, depth, height)
            fill.parent = cabinet
            fill.matrix_parent_inverse = cabinet.matrix_world.inverted()
            finish_mat = build_finish_material()
            assign_material(fill, finish_mat)
            bevel = fill.modifiers.new("edge radius", "BEVEL")
            bevel.width = 0.0012
            bevel.segments = 2
            bevel.use_clamp_overlap = True
            log("Blind fill " + str(round(fill_w, 3)) + " m")

    apply_front_layout(cabinet, CONFIG["front_layout"])
    apply_hb_style(main_scene, cabinet)
    normalize_product_materials(cabinet)
    # Recalcul des drivers HB EN DERNIER : indispensable pour que les façades
    # (notamment Pullout) se dimensionnent en headless. apply_front_layout("NONE")
    # saute son propre run_calc_fix et normalize peut figer un état stale.
    try:
        from bl_ext.blender_org.home_builder_5 import hb_utils as _hbu
        _hbu.run_calc_fix(bpy.context, cabinet, passes=2)
        bpy.context.view_layer.update()
        log("run_calc_fix (final) OK")
    except Exception as exc:
        log("run_calc_fix (final) failed: " + str(exc))
    add_shaker_frame_to_pullouts(cabinet)
    # EN DERNIER (après run_calc_fix, qui remet hide_render=False sur les objets
    # HB) : pas de quincaillerie sur les packshots (préférence Gabriel 2026-07-01).
    hide_all_pulls()
    apply_birch_interior(cabinet)
    fix_stretchers(cabinet)  # après apply_birch_interior : la suppression du back
    # stretcher doit survivre au handler HB déclenché par l'apply des geonodes.
    add_face_frame(cabinet)  # EN DERNIER : cadre + boîtes rétrécies (coupe des drivers
    # HB) ; rien après ne doit re-déclencher un recalc HB qui les écraserait.
    if CONFIG.get("view") == "open":
        # Vue matériaux : tiroirs ouverts en escalier + caméra plus plongeante
        # pour voir les caisses de tiroirs.
        drawer_count = open_drawers(cabinet)
        door_count = open_doors(cabinet)
        hide_garbage_pullout_orphans(cabinet)
        # Déchets : pas de open_pullouts — le module HB n'a pas de bacs, sortir
        # la façade seule = panneau blanc flottant. On montre le tiroir utilitaire.
        if CONFIG.get("category") == "base-cabinet-garbage-pull-out":
            pullout_count = 0
        else:
            pullout_count = open_pullouts(cabinet)
        if pullout_count and not drawer_count:
            CONFIG.setdefault("cam_dir", (0.78, -1.35, 0.36))
            CONFIG.setdefault("camera_lens", 90.0)
        elif door_count and drawer_count:
            # Référence photo "tiroir + porte" : plus bas/frontal que la vue
            # 3 tiroirs, sinon on voit surtout le dessus et la porte cache
            # l'intérieur comme un objet 3D, pas comme une photo produit.
            CONFIG.setdefault("cam_dir", (0.50, -1.55, 0.24))
            CONFIG.setdefault("camera_lens", 95.0)
        elif door_count and not drawer_count and not pullout_count:
            # Portes ouvertes : caméra plus basse pour voir moins le dessus,
            # comme une photo prise plus à hauteur du meuble.
            CONFIG.setdefault("cam_dir", (0.70, -1.45, 0.28))
            CONFIG.setdefault("camera_lens", 90.0)
        else:
            CONFIG.setdefault("cam_dir", (0.78, -1.35, 0.50))
            CONFIG.setdefault("camera_lens", 85.0)
    setup_shadow_catcher_floor(cabinet)
    setup_negative_fill(cabinet)
    setup_lighting(cabinet)
    setup_camera(cabinet)
    configure_render()

    if CONFIG.get("save_blend"):
        # Sauvegarde de la scène montée (caisson + matériaux + lumière + caméra)
        # pour itérer visuellement dans Blender au lieu du rendu headless.
        # PREVIEW « posé au sol » pour F12 : le packshot réel a un fond TRANSPARENT et
        # une ombre au sol SYNTHÉTIQUE ajoutée en post (PIL) — donc invisible dans
        # Blender seul. Ici on rend le .blend de debug plus proche du site : shadow
        # catcher -> SOL VISIBLE gris clair (montre l'ombre RÉELLE de la key) + fond
        # opaque. (L'ombre exacte du site reste celle du post-process, forme différente.)
        sc = bpy.context.scene
        for o in bpy.data.objects:
            if o.name.startswith("Dilamco_Shadow"):
                o.is_shadow_catcher = False
                for mm in o.data.materials:
                    if mm and mm.use_nodes:
                        for nd in mm.node_tree.nodes:
                            if nd.type == "BSDF_PRINCIPLED":
                                nd.inputs["Base Color"].default_value = (0.94, 0.94, 0.94, 1)
                                nd.inputs["Roughness"].default_value = 0.9
        sc.render.film_transparent = False
        if CONFIG.get("blend_static"):
            # FIGE la scene en meshes simples avant sauvegarde. Raison : ouvert
            # dans le Blender GUI (addon HB5 actif), les handlers HB recalculent
            # le caisson et SUPPRIMENT les pieces mutees par le pipeline (boites
            # de tiroir/cote droit disparus chez Gabriel 2026-07-12). En statique,
            # HB5 ignore le fichier ET les materiaux deviennent des SLOTS normaux
            # -> drag-drop BlenderKit fonctionnel pour iterer sur les materiaux.
            bpy.ops.object.select_all(action="DESELECT")
            vis = [o for o in bpy.data.objects
                   if o.type == "MESH" and not o.hide_render and not o.get("IS_GEONODE_CAGE")]
            for o in vis:
                o.hide_viewport = False
                o.select_set(True)
            if vis:
                bpy.context.view_layer.objects.active = vis[0]
                bpy.ops.object.convert(target="MESH")  # applique geonodes+bevel
            # de-parenter (transform conserve) avant de supprimer les cages/empties
            for o in vis:
                world = o.matrix_world.copy()
                o.parent = None
                o.matrix_world = world
                o.animation_data_clear()
                for k in [k for k in o.keys() if k.startswith(("IS_", "MENU_", "PROMPT_"))]:
                    del o[k]
            for o in list(bpy.data.objects):
                if o in vis or o.type in {"LIGHT", "CAMERA"}:
                    continue
                bpy.data.objects.remove(o, do_unlink=True)
            bpy.context.view_layer.update()
            log("blend statique: " + str(len(vis)) + " meshes figes, helpers HB supprimes")
        bpy.ops.wm.save_as_mainfile(filepath=CONFIG["save_blend"])
        log("Saved blend (preview sol+ombre) " + CONFIG["save_blend"])
        return

    bpy.ops.render.render(write_still=True)
    if not Path(CONFIG["output"]).exists():
        raise RuntimeError("Render completed but output was not written: " + CONFIG["output"])
    log("Wrote " + CONFIG["output"])


def main():
    global CONFIG
    configs = CONFIG if isinstance(CONFIG, list) else [CONFIG]
    main_scene = enable_hb5()
    for cfg in configs:
        CONFIG = cfg
        try:
            hard_reset_scene()
            run_one(main_scene)
            log("BATCH_OK " + str(CONFIG.get("code")))
        except Exception as exc:
            import traceback
            traceback.print_exc()
            log("BATCH_FAIL " + str(CONFIG.get("code")) + " :: " + str(exc))


main()
"""
    return template.replace("__PATHS_REPR__", paths_repr).replace(
        "__CONFIG_JSON_REPR__", repr(config_json)
    )


# OMBRE 100 % SYNTHÉTIQUE (changement d'approche, feedback Gabriel 2026-07-01).
# L'ombre du shadow catcher Cycles (même fenêtrée/atténuée) laissait des nappes
# grises irrégulières autour du caisson sur le fond pâle de la fiche produit
# (« ombrage affreuse », « ça marche pas »). On JETTE tous les pixels d'ombre
# rendus et on dessine à la place une ellipse de contact douce, uniforme et
# parfaitement contrôlée sous l'empreinte du caisson — le look packshot
# e-commerce classique. Le caisson garde sa distinction du fond par le dégradé
# de son panneau latéral (drapeau négatif) et par ses arêtes.
# OMBRE STYLE IKEA (feedback Gabriel 2026-07-05) : scène TOUTE BLANCHE, ombre au sol
# TRÈS DISCRÈTE (petite ombre de contact sous le caisson, PAS d'étalement à gauche/
# partout). La vraie « ombre » qui donne du relief est sur le CAISSON lui-même
# (auto-ombre du shaker via la key cast_shadow + côté +X plus sombre).
SHADOW_ELLIPSE_ALPHA = 30     # opacité crête (0-255) ≈ 12 % — discrète
SHADOW_ELLIPSE_WIDTH = 0.40   # demi-largeur en fraction de la largeur du caisson
SHADOW_ELLIPSE_HEIGHT = 0.032 # demi-hauteur — ombre de contact plate
SHADOW_ELLIPSE_BLUR = 0.050   # rayon de flou gaussien en fraction de la largeur
SHADOW_DIR_X = 0.06           # décalage directionnel léger vers la droite (frac. largeur)
SHADOW_DIR_EXTRA_R = 0.06     # allongement léger du côté droit (frac. largeur)


def _im_eval(expr: str, **kw):
    """Évalue une expression ImageMath, compatible Pillow <10 (eval) et 10+
    (unsafe_eval). Entrées maison uniquement -> unsafe_eval acceptable."""
    from PIL import ImageMath

    fn = getattr(ImageMath, "unsafe_eval", None) or getattr(ImageMath, "eval")
    return fn(expr, **kw)


def _decontaminate_edges(img, radius: float = 2.0, thresh: int = 250):
    """Corrige la FRANGE SOMBRE du contour : Blender rend les pixels d'antialiasing
    de la silhouette avec un RGB contaminé par la couleur du fond de scène (sombre),
    ex. (1,1,1) à alpha 67 -> sur fond blanc du site = liseré noir « pixelisé ».

    On remplace le RGB de l'anneau semi-transparent (alpha < thresh) par une moyenne
    des voisins PONDÉRÉE PAR L'ALPHA (blur(rgb*a)/blur(a)) : les pixels opaques du
    produit dominent -> le bord prend la vraie couleur du produit. Préserve la teinte
    (fonctionne pour blanc, chêne, navi), contrairement à un simple « forcer en blanc ».
    """
    from PIL import Image, ImageChops, ImageFilter

    r, g, b, a = img.split()
    blur_a = a.filter(ImageFilter.GaussianBlur(radius))
    fixed = []
    for ch in (r, g, b):
        pa = ImageChops.multiply(ch, a).filter(ImageFilter.GaussianBlur(radius))
        dec = _im_eval(
            "convert((p * 255) / ((ba == 0) * 255 + ba), 'L')", p=pa, ba=blur_a
        )
        fixed.append(dec)
    decon_rgb = Image.merge("RGB", fixed)
    core = a.point(lambda v: 255 if v >= thresh else 0)  # 255 = pixel plein -> garder RGB
    out_rgb = Image.composite(Image.merge("RGB", (r, g, b)), decon_rgb, core)
    return Image.merge("RGBA", (*out_rgb.split(), a))


def _downscale_rgba_premult(img, factor: int):
    """Réduit une image RGBA d'un facteur entier en LANCZOS avec alpha PRÉMULTIPLIÉ.

    Sans prémultiplication, LANCZOS mélange le RGB des pixels transparents (souvent
    noir) dans l'anneau d'antialiasing du bord → frange sombre. On prémultiplie
    (RGB×A), on réduit, puis on dé-prémultiplie (RGB×255/A) pour retrouver de l'alpha
    droit (attendu par le navigateur). numpy n'est pas dispo → ImageMath (PIL pur).
    """
    from PIL import Image, ImageChops

    if factor <= 1:
        return img
    r, g, b, a = img.split()
    tw, th = img.width // factor, img.height // factor
    # prémultiplie chaque canal couleur par l'alpha, puis réduit
    pre = [ImageChops.multiply(ch, a).resize((tw, th), Image.LANCZOS) for ch in (r, g, b)]
    a_s = a.resize((tw, th), Image.LANCZOS)
    # dé-prémultiplie : c*255/a (dénominateur forcé à 255 là où a==0, où c vaut 0)
    out_ch = [
        _im_eval("convert((c * 255) / ((a == 0) * 255 + a), 'L')", c=c, a=a_s)
        for c in pre
    ]
    return Image.merge("RGBA", (*out_ch, a_s))


def apply_shadow_postprocess(png_path: Path, out_path: Path | None = None, downscale: int = 1) -> None:
    """Remplace l'ombre plancher rendue par une ombre de contact synthétique,
    et écrit le résultat (en .webp si out_path le demande).

    1) Ne garde que le produit : pixels opaques (alpha ≥ 240) + leur anneau
       d'antialiasing (dilatation 2 px). Tout le reste (ombre du catcher) → 0.
    2) Dessine une ellipse noire floutée, centrée sous l'empreinte du caisson,
       composée SOUS le produit.
    3) Si downscale>1, l'image d'entrée est un rendu SUPERSAMPLÉ (×downscale) :
       tout le traitement se fait à la grande taille, puis on réduit en LANCZOS
       prémultiplié → contour net sur tout le pourtour (anti-crénelage).
    """
    from PIL import Image, ImageChops, ImageDraw, ImageFilter

    img = Image.open(png_path).convert("RGBA")
    # Corrige la frange sombre du contour AVANT tout (rayon à l'échelle du rendu :
    # 2 px à taille cible, 2×downscale si supersamplé).
    img = _decontaminate_edges(img, radius=2.0 * max(1, downscale))
    a = img.getchannel("A")
    opaque = a.point(lambda v: 255 if v >= 240 else 0)
    bbox = opaque.getbbox()
    # Masque produit + anneau d'antialiasing (sinon arêtes crénelées).
    keep = opaque.filter(ImageFilter.MaxFilter(5))
    a_clean = ImageChops.multiply(a, keep)
    product = Image.merge("RGBA", (*img.split()[:3], a_clean))

    if not bbox:
        out = product
    else:
        x0, _, x1, y1 = bbox
        cab_w = max(1, x1 - x0)
        # Ombre DIRECTIONNELLE : décalée + allongée vers la DROITE (le caisson projette
        # son ombre au sol à droite du panneau droit), pas une flaque symétrique.
        cx = (x0 + x1) / 2.0 + cab_w * SHADOW_DIR_X
        rw = cab_w * SHADOW_ELLIPSE_WIDTH
        rh = max(6.0, cab_w * SHADOW_ELLIPSE_HEIGHT)
        sh = Image.new("L", img.size, 0)
        # Centre de l'ellipse sur la ligne de base du caisson (bas de la bbox),
        # la moitié basse dépasse légèrement devant — lecture « posé au sol ».
        ImageDraw.Draw(sh).ellipse(
            [cx - rw, y1 - rh, cx + rw + cab_w * SHADOW_DIR_EXTRA_R, y1 + rh],
            fill=SHADOW_ELLIPSE_ALPHA,
        )
        sh = sh.filter(ImageFilter.GaussianBlur(cab_w * SHADOW_ELLIPSE_BLUR))
        shadow = Image.merge(
            "RGBA",
            (
                Image.new("L", img.size, 20),
                Image.new("L", img.size, 20),
                Image.new("L", img.size, 22),
                sh,
            ),
        )
        out = Image.alpha_composite(shadow, product)

    if downscale > 1:
        out = _downscale_rgba_premult(out, downscale)

    target = out_path or png_path
    if target.suffix.lower() == ".webp":
        out.save(target, "WEBP", quality=90)
    else:
        out.save(target)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--catalog", type=Path, default=DEFAULT_CATALOG)
    parser.add_argument("--product-code", type=str, default=None)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument(
        "--quality",
        choices=sorted(QUALITY_SAMPLES),
        default="preview",
    )
    parser.add_argument("--samples", type=int, default=0,
                        help="override direct du nombre de samples (0 = utiliser --quality)")
    parser.add_argument("--adaptive-threshold", type=float, default=0.01,
                        help="seuil adaptive sampling (plus haut = plus rapide, un peu plus de bruit)")
    parser.add_argument("--resolution", type=int, default=1400)
    parser.add_argument(
        "--supersample",
        type=int,
        default=2,
        choices=[1, 2],
        help="rendu à N× la résolution puis réduction prémultipliée (2 = contours plus propres)",
    )
    parser.add_argument(
        "--profile",
        choices=sorted(DOOR_PROFILES),
        default=DEFAULT_PROFILE,
        help="profil de porte (largeur du rail shaker) : shaker-1 (1 po) ou shaker-3 (3 po)",
    )
    parser.add_argument(
        "--finish",
        choices=["auto"] + sorted(FINISH_VARIANTS),
        default="auto",
        help="fini : auto (déduit du code : blanc, ou chêne si -muf) ou un fini "
        "alternatif (navi = mélamine bleu marine, caissons du bas seulement)",
    )
    parser.add_argument("--navi-scale", type=float, default=1.4,
                        help="échelle du box-mapping de l'échantillon navi")
    parser.add_argument("--navi-sat", type=float, default=0.5,
                        help="saturation navi (0.5 = recette N1 2026-07-12 ; 1=texture native)")
    parser.add_argument("--navi-val", type=float, default=1.6,
                        help="luminosité navi (1.6 = recette N1 2026-07-12 ; 1=texture native)")
    parser.add_argument("--navi-hue", type=float, default=0.5, help="teinte navi (0.5=neutre)")
    parser.add_argument(
        "--hdri",
        type=str,
        default="studio_kontrast_03_2k.exr",
        help="nom du fichier HDRI dans pipeline/hdris/ (défaut: studio_kontrast_03)",
    )
    # Défauts lumière = recette Y2 du banc 2026-07-12 (voir mémoire
    # banc-lumiere-packshot-2026-07) : HDRI 0.5 + key 42/2.2 + softbox
    # rapprochée (z 1.9, ×0.5, 2.4) + exposure -0.15 → façade blanche ~229,
    # falloff vertical 4, marge ~12 vs fond du site, hiérarchie façade>côté
    # validée blanc/chêne/navi.
    parser.add_argument("--hdri-strength", type=float, default=0.5)
    # 270° : softbox principal FACE au caisson → façade = face la plus claire,
    # côté +X en retrait (feedback Gabriel 2026-07-03). L'ancien 235° éclairait
    # le côté plus que la façade (hiérarchie inversée, blanc ET navi).
    parser.add_argument("--hdri-rotation", type=float, default=270.0,
                        help="rotation Z du HDRI en degrés (oriente le softbox principal)")
    parser.add_argument("--key-energy", type=float, default=42.0,
                        help="énergie de la key frontale (W)")
    parser.add_argument("--key-size", type=float, default=2.2,
                        help="taille de la key area (m)")
    parser.add_argument("--top-z", type=float, default=1.9,
                        help="hauteur de la Top_Softbox (m) ; plus bas = falloff vertical")
    parser.add_argument("--top-mult", type=float, default=0.5,
                        help="énergie Top_Softbox = key-energy × top-mult")
    parser.add_argument("--top-size", type=float, default=2.4,
                        help="taille de la Top_Softbox (m)")
    parser.add_argument("--exposure", type=float, default=-0.15)
    parser.add_argument("--white-rgb", type=float, nargs=3, default=[0.72, 0.716, 0.705],
                        help="albédo du blanc peint (RGB linéaire)")
    parser.add_argument("--oak-set", type=str, default="real",
                        help="'real' = swatch photo Chêne blanc Dilamco ; sinon dossier PBR ambientCG (Wood050, Wood095)")
    parser.add_argument("--oak-scale", type=float, default=2.2)
    parser.add_argument("--oak-sat", type=float, default=1.0, help="saturation du placage (1=natif)")
    parser.add_argument("--oak-val", type=float, default=1.0, help="luminosité du placage")
    parser.add_argument("--oak-hue", type=float, default=0.5, help="teinte (0.5=neutre)")
    parser.add_argument("--oak-tint", type=float, nargs=3, default=None,
                        help="multiplicateur RGB du placage (recolorisation, ex. 0.58 0.46 0.33)")
    # Intérieur (contreplaqué bouleau/érable : fond, côtés, tablettes).
    # Fallback intérieur si le matériau BlenderKit Plywood n'est pas disponible.
    parser.add_argument("--shelf-set", type=str, default="Wood021",
                        help="dossier PBR ambientCG de l'intérieur (Wood021, Wood095, ...)")
    parser.add_argument("--shelf-diff", type=str, default="",
                        help="chemin d'une texture diffuse intérieur fallback (défaut: texture_boxe.png)")
    parser.add_argument("--shelf-scale", type=float, default=1.35,
                        help="échelle du box-mapping de l'intérieur showroom")
    parser.add_argument("--plywood-blend", type=str, default="",
                        help="chemin d'un .blend de matériau bois intérieur/caisses "
                             "(défaut: textures/blenderkit_plywood_2k.blend)")
    parser.add_argument("--plywood-mat", type=str, default="",
                        help="nom du matériau dans --plywood-blend (défaut: Plywood)")
    parser.add_argument("--plywood-sat", type=float, default=1.4,
                        help="saturation du bois intérieur/caisses BlenderKit "
                             "(1.4 = calibration bouleau 2026-07-14 ; 1=natif)")
    parser.add_argument("--plywood-val", type=float, default=1.28,
                        help="luminosité du bois intérieur/caisses BlenderKit "
                             "(1.28 = calibration bouleau 2026-07-14 ; 1=natif)")
    parser.add_argument("--plywood-hue", type=float, default=0.5,
                        help="teinte du bois intérieur/caisses BlenderKit (0.5=neutre)")
    parser.add_argument("--view", type=str, default="face", choices=["face", "open"],
                        help="vue packshot : face (fermé, défaut) ou open (tiroirs ouverts, "
                             "caméra plongeante — met en valeur les caisses massif + l'intérieur)")
    parser.add_argument("--shelf-sat", type=float, default=0.96,
                        help="saturation de l'intérieur (1=natif ; <1 = plus pâle)")
    parser.add_argument("--shelf-val", type=float, default=0.93,
                        help="luminosité de l'intérieur (>1 = plus clair)")
    parser.add_argument("--shelf-hue", type=float, default=0.5,
                        help="teinte de l'intérieur (0.5=neutre)")
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    # Blender peut résoudre les chemins relatifs depuis un autre cwd que le
    # wrapper Python. Normaliser ici évite d'écrire dans C:\tmp pendant que le
    # wrapper attend pipeline\tmp.
    args.output = args.output.expanduser()
    if not args.output.is_absolute():
        args.output = (Path.cwd() / args.output).resolve()
    else:
        args.output = args.output.resolve()
    args.catalog = args.catalog.expanduser()
    if not args.catalog.is_absolute():
        args.catalog = (Path.cwd() / args.catalog).resolve()
    else:
        args.catalog = args.catalog.resolve()
    product = load_product(args.catalog, args.product_code)
    hb_config = infer_hb_config(product)
    # Fini alternatif forcé (--finish navi) : par-dessus le même code catalogue.
    # Interdit sur les codes -muf (le chêne EST déjà un fini) ; averti hors des
    # catégories qui l'offrent (rendu de test permis, batch borné lui).
    if args.finish != "auto":
        spec = FINISH_VARIANTS[args.finish]
        if hb_config.get("finish_type") == "oak":
            raise SystemExit(f"--finish {args.finish} interdit sur un code chêne (-muf)")
        if not str(hb_config.get("category") or "").startswith(spec["category_prefixes"]):
            print(
                f"[render_product_cabinet.py] AVERTISSEMENT : {hb_config['code']} "
                f"({hb_config.get('category')}) n'offre pas le fini {args.finish} au catalogue",
                file=sys.stderr,
            )
        hb_config["finish"] = spec["finish_label"]
        hb_config["finish_type"] = spec["finish_type"]
    hdri = REPO_ROOT / "hdris" / args.hdri
    if not hdri.is_file():
        hdri = REPO_ROOT / "hdris" / "brown_photostudio_02_2k.exr"
    # « Chêne blanc » : par défaut le SWATCH PHOTO RÉEL Dilamco (couleur exacte),
    # avec relief dérivé du grain (Bump). Sinon un set PBR ambientCG (--oak-set Wood0XX).
    if args.oak_set == "real":
        oak_diff = REPO_ROOT / "textures" / "chene_blanc_real.jpg"
        oak_normal = None
        oak_rough = REPO_ROOT / "textures" / "oak_veneer_01_rough_2k.jpg"
    else:
        oak_dir = REPO_ROOT / "textures" / f"{args.oak_set}_acg"
        oak_pref = f"{args.oak_set}_2K-JPG"
        oak_diff = oak_dir / f"{oak_pref}_Color.jpg"
        oak_normal = oak_dir / f"{oak_pref}_NormalGL.jpg"
        oak_rough = oak_dir / f"{oak_pref}_Roughness.jpg"
    if not oak_diff.is_file():
        oak_diff = REPO_ROOT / "textures" / "oak_veneer_01_diff_2k.jpg"
        oak_normal = None
        oak_rough = REPO_ROOT / "textures" / "oak_veneer_01_rough_2k.jpg"
    white_rough = REPO_ROOT / "textures" / "laminate_floor_02_rough_2k.jpg"
    white_nor = REPO_ROOT / "textures" / "laminate_floor_02_nor_gl_2k.jpg"
    # Intérieur fallback : texture_boxe.png. Le défaut réel est BlenderKit Plywood
    # si textures/blenderkit_plywood_2k.blend est disponible.
    # build_shelf_material n'utilise plus rough/normal ; ces chemins restent pour compat.
    shelf_dir = REPO_ROOT / "textures" / f"{args.shelf_set}_acg"
    shelf_pref = f"{args.shelf_set}_2K-JPG"
    shelf_diff = Path(args.shelf_diff) if args.shelf_diff else REPO_ROOT / "textures" / "texture_boxe.png"
    shelf_rough = shelf_dir / f"{shelf_pref}_Roughness.jpg"
    shelf_normal = shelf_dir / f"{shelf_pref}_NormalGL.jpg"
    if not shelf_diff.is_file():  # repli sur l'ancien set si le dossier manque
        shelf_diff = REPO_ROOT / "textures" / "Wood095_acg" / "Wood095_2K-JPG_Color.jpg"
        shelf_rough = REPO_ROOT / "textures" / "Wood095_acg" / "Wood095_2K-JPG_Roughness.jpg"
        shelf_normal = REPO_ROOT / "textures" / "Wood095_acg" / "Wood095_2K-JPG_NormalGL.jpg"
    hb_config.update(
        {
            "output": str(args.output),
            "door_profile": args.profile,
            "shaker_rail_m": DOOR_PROFILES[args.profile]["rail_m"],
            "samples": args.samples if args.samples > 0 else QUALITY_SAMPLES[args.quality],
            "adaptive_threshold": args.adaptive_threshold,
            "resolution": [args.resolution * args.supersample, args.resolution * args.supersample],
            "hdri": str(hdri) if hdri.is_file() else "",
            "hdri_strength": args.hdri_strength,
            "hdri_rotation_deg": args.hdri_rotation,
            "key_energy": args.key_energy,
            "key_size": args.key_size,
            "top_softbox_z": args.top_z,
            "top_softbox_mult": args.top_mult,
            "top_softbox_size": args.top_size,
            "exposure": args.exposure,
            "white_rgb": list(args.white_rgb),
            "oak_diff": str(oak_diff),
            "oak_rough": str(oak_rough),
            "oak_normal": str(oak_normal) if oak_normal else "",
            "oak_scale": args.oak_scale,
            "oak_sat": args.oak_sat,
            "oak_val": args.oak_val,
            "oak_hue": args.oak_hue,
            "oak_tint": list(args.oak_tint) if args.oak_tint else None,
            "material_lib": str(REPO_ROOT / "materials" / "dilamco_materials.blend"),
            "blenderkit_plywood_blend": (
                args.plywood_blend or str(REPO_ROOT / "textures" / "blenderkit_plywood_2k.blend")
            ),
            "blenderkit_plywood_material": args.plywood_mat or "Plywood",
            "blenderkit_plywood_sat": args.plywood_sat,
            "blenderkit_plywood_val": args.plywood_val,
            "blenderkit_plywood_hue": args.plywood_hue,
            "white_rough": str(white_rough),
            "white_nor": str(white_nor) if white_nor.is_file() else "",
            # Navi : échantillon photo réel (albédo) + leviers de calibration.
            "navi_diff": str(REPO_ROOT / "textures" / "navi_real_flat.png"),
            "navi_scale": args.navi_scale,
            "navi_sat": args.navi_sat,
            "navi_val": args.navi_val,
            "navi_hue": args.navi_hue,
            "shelf_diff": str(shelf_diff),
            "shelf_rough": str(shelf_rough),
            "shelf_normal": str(shelf_normal),
            "shelf_scale": args.shelf_scale,
            "drawerbox_diff": str(REPO_ROOT / "textures" / "drawer_textures.png"),
            "view": args.view,
            "shelf_sat": args.shelf_sat,
            "shelf_val": args.shelf_val,
            "shelf_hue": args.shelf_hue,
            "chant_tile": str(REPO_ROOT / "textures" / "birch_plywood_side.png"),
        }
    )

    blender = find_blender()
    args.output.parent.mkdir(parents=True, exist_ok=True)

    bootstrap = build_bootstrap(hb_config)
    with tempfile.NamedTemporaryFile(
        mode="w",
        suffix=".py",
        prefix="render_product_cabinet_",
        delete=False,
        encoding="utf-8",
    ) as f:
        f.write(bootstrap)
        bootstrap_path = Path(f.name)

    try:
        cmd = [
            str(blender),
            "--background",
            "--factory-startup",
            "--python",
            str(bootstrap_path),
        ]
        print(f"[render_product_cabinet.py] blender = {blender}", file=sys.stderr)
        print(
            "[render_product_cabinet.py] product = "
            f"{hb_config['code']} ({hb_config['cabinet_name']}, {hb_config['front_layout']})",
            file=sys.stderr,
        )
        proc = subprocess.run(cmd, check=False, capture_output=True, text=True, errors="replace")
        sys.stdout.write(proc.stdout)
        sys.stderr.write(proc.stderr)
        if proc.returncode == 0 and args.output.is_file():
            apply_shadow_postprocess(args.output, downscale=args.supersample)
            print("[render_product_cabinet.py] ombre atténuée (PIL)", file=sys.stderr)
        return proc.returncode
    finally:
        bootstrap_path.unlink(missing_ok=True)


if __name__ == "__main__":
    raise SystemExit(main())
