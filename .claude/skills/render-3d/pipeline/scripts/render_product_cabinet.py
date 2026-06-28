"""Render one catalog cabinet as a product image using Home Builder 5.

This script is a launcher. It runs normal Python first, loads one product from
the Dilamco catalog JSON, then starts Blender headless and executes the real
HB5 scene build inside Blender's Python.

Example:
    uv run python scripts/render_product_cabinet.py ^
      --product-code F9-B12 ^
      --catalog C:/laragon/www/dilamco_store/lib/catalog-products.json ^
      --output D:/dilamco_render/.smoke/F9-B12_hb5.png
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

DEFAULT_CATALOG = Path(r"C:/laragon/www/dilamco-next/lib/shop/catalog-products.json")

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
    # et diagonal). Géométrie custom : carcasse pleine largeur + porte shaker
    # (section ouvrante) + panneau aveugle SHAKER + toe-kick continu (base).
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
        # Tablier d'évier apparent via le prompt HB « Base Top Construction=Sink ».
        cabinet_type = "BASE"
        cabinet_name = "Base Door"
        front_layout = "DOUBLE_DOORS"
        extra = {"base_top": "sink"}
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

    # Finition : les SKU -muf sont en mélamine Chêne blanc (porte slab) ;
    # le reste est peint Blanc Pur (porte shaker 5 pièces).
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
from mathutils import Vector

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
    if CONFIG.get("finish_type") == "oak":
        # Mélamine Chêne blanc : porte SHAKER 5 pièces (cadre 1 po), comme le blanc
        # (préférence Gabriel : tous les caissons en shaker 1 po, blanc ET chêne).
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
    bsdf.inputs["Base Color"].default_value = (0.64, 0.635, 0.615, 1.0)
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
    # Mélamine Chêne blanc à partir des textures PBR Polyhaven (oak_veneer_01).
    # Projection box sur coordonnées objet : pas besoin d'UVs sur les meshes
    # générés par geonodes, et le grain reste vertical sur les façades.
    name = "Dilamco_Oak_Melamine"
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
    texco = nt.nodes.new("ShaderNodeTexCoord")
    mapping = nt.nodes.new("ShaderNodeMapping")
    mapping.inputs["Scale"].default_value = (0.8, 0.8, 0.8)

    diff = nt.nodes.new("ShaderNodeTexImage")
    diff.image = bpy.data.images.load(CONFIG["oak_diff"], check_existing=True)
    diff.projection = "BOX"
    diff.projection_blend = 0.25

    rough = nt.nodes.new("ShaderNodeTexImage")
    rough.image = bpy.data.images.load(CONFIG["oak_rough"], check_existing=True)
    rough.image.colorspace_settings.name = "Non-Color"
    rough.projection = "BOX"
    rough.projection_blend = 0.25

    nt.links.new(texco.outputs["Object"], mapping.inputs["Vector"])
    nt.links.new(mapping.outputs["Vector"], diff.inputs["Vector"])
    nt.links.new(mapping.outputs["Vector"], rough.inputs["Vector"])
    nt.links.new(diff.outputs["Color"], bsdf.inputs["Base Color"])
    nt.links.new(rough.outputs["Color"], bsdf.inputs["Roughness"])
    if "Specular IOR Level" in bsdf.inputs:
        bsdf.inputs["Specular IOR Level"].default_value = 0.3
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat



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


def assign_material(obj, mat):
    if not getattr(obj, "data", None):
        return
    if obj.data.materials:
        obj.data.materials[0] = mat
    else:
        obj.data.materials.append(mat)


def set_geonode_materials(obj, mat):
    # CABINET_PART meshes get their materials through GeoNodeCutpart modifier
    # inputs (Input_8..13), not material slots. Swap every Material-typed input.
    count = 0
    for mod in obj.modifiers:
        if mod.type != "NODES":
            continue
        for key in list(mod.keys()):
            try:
                val = mod[key]
            except Exception:
                continue
            if isinstance(val, bpy.types.Material):
                mod[key] = mat
                count += 1
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
    white = material("Dilamco_Product_White_Satin", (0.78, 0.775, 0.745, 1), 0.34, coat=0.10)
    # Érable clair (blonde), peu saturé — évite le rebond chaud sur le toe-kick.
    maple = material("Dilamco_Product_Maple_Interior", (0.74, 0.66, 0.50, 1), 0.55)
    black = material("Dilamco_Product_Matte_Black_Pull", (0.015, 0.015, 0.015, 1), 0.80, 0.0, specular=0.05)
    # Intérieur : BLANC pour un caisson blanc (mélamine blanche), érable clair pour
    # le chêne. Un caisson blanc n'a pas d'intérieur bois (sinon rebond beige).
    interior_mat = maple if CONFIG.get("finish_type") == "oak" else white

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

    # GeoNodeHardware gotcha (cf. CLAUDE.md): the geonode Object Info output
    # does not expose material slots, so slot assignments are invisible until
    # the modifier is baked to a raw mesh. Only safe on pulls — baking the
    # CABINET_PART geonodes destroys their driver-positioned geometry.
    for obj in cabinet.children_recursive:
        if obj.type != "MESH" or not _is_pull(obj):
            continue
        for mod in [m for m in obj.modifiers if m.type == "NODES"]:
            select_only(obj)
            try:
                bpy.ops.object.modifier_apply(modifier=mod.name)
            except Exception as exc:
                log("modifier_apply failed on " + obj.name + ": " + str(exc))

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
            assign_material(obj, black)
            log("mat black <- " + obj.name)
        elif "toe" in lname:
            # Same finish as the cabinet: the recess reads through its natural
            # shadow, not through a fake dark paint.
            finish_mat = build_oak_material() if CONFIG.get("finish_type") == "oak" else white
            swapped = set_geonode_materials(obj, finish_mat)
            log("mat finish <- " + obj.name + " (" + str(swapped) + " geonode inputs)")
        elif obj.get("IS_FRAMELESS_INTERIOR_PART") or any(k in lname for k in ("shelf", "back", "bottom", "interior")):
            assign_material(obj, interior_mat)
        elif obj.get("IS_CABINET_FRONT") or any(k in lname for k in ("door", "drawer", "front", "side", "stretcher")):
            assign_material(obj, white)
        else:
            log("mat unchanged <- " + obj.name + " (render=" + str(not obj.hide_render) + ")")

        if not any(m.type == "BEVEL" for m in obj.modifiers):
            bevel = obj.modifiers.new("product edge radius", "BEVEL")
            bevel.width = 0.0008
            bevel.segments = 2
            bevel.use_clamp_overlap = True
        if not any(m.type == "WEIGHTED_NORMAL" for m in obj.modifiers):
            obj.modifiers.new("product weighted normals", "WEIGHTED_NORMAL")

    # Injection du matériau dans les geonodes (le shader CabinetWood de HB ignore
    # nos réglages au rendu headless). Pièces EXTÉRIEURES → fini (chêne/blanc) ;
    # pièces INTÉRIEURES (tablettes, fond, dessous, boîtes/plateaux) → érable —
    # l'intérieur n'est JAMAIS au fini chêne de la façade.
    finish_mat = (
        build_oak_material()
        if CONFIG.get("finish_type") == "oak"
        else build_white_material()
    )
    for obj in cabinet.children_recursive:
        if obj.type != "MESH" or obj.get("IS_GEONODE_CAGE"):
            continue
        if _is_pull(obj):
            continue
        lname = obj.name.lower()
        is_interior = obj.get("IS_FRAMELESS_INTERIOR_PART") or any(
            k in lname for k in ("shelf", "back", "bottom", "interior")
        )
        inject = interior_mat if is_interior else finish_mat
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


def setup_camera(cabinet):
    bmin, bmax = world_bbox(cabinet)
    center = (bmin + bmax) * 0.5
    size = bmax - bmin
    # Slightly below mid-height, near-horizontal view: reads like a product
    # photo and keeps the open cabinet top mostly out of sight.
    target = Vector((center.x, center.y - size.y * 0.10, bmin.z + size.z * 0.48))
    # Empreinte horizontale projetée en vue 3/4 = diagonale du footprint ;
    # sans elle, les caissons larges (coins 42-48 po) sortent du cadre.
    horiz = math.sqrt(size.x * size.x + size.y * size.y)
    extent = max(size.z * 1.32, horiz * 1.30)
    half_fov_tan = 18.0 / 85.0  # 85mm lens, 36mm sensor
    distance = (extent / 2.0) / half_fov_tan
    # Vue à 15° de lacet : la façade domine, le côté donne le volume. Caméra
    # sous le dessus du caisson pour cacher la carcasse ouverte des modules du bas.
    # Angle de vue surchargeable (showcase multi-angles) ; défaut = 3/4 avant-droit.
    direction = Vector(CONFIG.get("cam_dir", (0.415, -1.55, 0.14))).normalized()
    loc = target + direction * distance

    bpy.ops.object.camera_add(location=loc)
    cam = bpy.context.object
    cam.name = "HB5_Product_Camera"
    cam.data.type = "PERSP"
    cam.data.lens = 85.0
    cam.data.dof.use_dof = False
    cam.rotation_euler = (target - cam.location).to_track_quat("-Z", "Y").to_euler()
    bpy.context.scene.camera = cam
    log("Camera loc=" + repr(tuple(round(v, 3) for v in loc)) + " dist=" + repr(round(distance, 3)))


def setup_lighting():
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
        # HDRI studio = source PRINCIPALE (softboxes → reflets propres + modelé sur
        # le blanc). Pleine force ; les lampes ci-dessous ne font que l'appoint.
        bg.inputs["Strength"].default_value = float(CONFIG.get("hdri_strength", 1.0))
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

    # Appoint léger par-dessus le HDRI studio : key douce pour un peu de modelé +
    # rim arrière pour détacher les arêtes. Volontairement faibles : le HDRI fait
    # l'essentiel (sinon on retombe dans le « flat » ou le sur-éclairé).
    area("Key_Soft", (-1.5, -1.1, 2.3), 35, 1.8, target=(0.0, 0.0, 0.50), cast_shadow=False)
    area("Rim_Edge", (1.5, 1.3, 2.5), 70, 0.9, target=(0.1, 0.0, 0.60), cast_shadow=False)


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
        scene.cycles.adaptive_threshold = 0.01
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
    scene.view_settings.exposure = float(CONFIG.get("exposure", -0.1))


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
    box.dimensions = dims
    assign_material(box, finish_mat)
    bevel = box.modifiers.new("edge radius", "BEVEL")
    bevel.width = 0.0012
    bevel.segments = 2
    bevel.use_clamp_overlap = True
    if parent is not None:
        box.parent = parent
        box.matrix_parent_inverse = parent.matrix_world.inverted()
    return box


def _shaker_door(width, height, thickness, center, mat, parent=None):
    # Porte shaker 5 pièces centrée sur `center`, face dans le plan X-Z,
    # épaisseur le long de Y (front du caisson = -Y).
    cx, cy, cz = center
    rw = min(CONFIG.get("shaker_rail_m", 0.0254), width / 3.0, height / 3.0)
    root = _flat_box("Door_Stile_L", (rw, thickness, height), (cx - width / 2.0 + rw / 2.0, cy, cz), mat, parent=parent)
    _flat_box("Door_Stile_R", (rw, thickness, height), (cx + width / 2.0 - rw / 2.0, cy, cz), mat, parent=root)
    inner = width - 2.0 * rw
    _flat_box("Door_Rail_T", (inner, thickness, rw), (cx, cy, cz + height / 2.0 - rw / 2.0), mat, parent=root)
    _flat_box("Door_Rail_B", (inner, thickness, rw), (cx, cy, cz - height / 2.0 + rw / 2.0), mat, parent=root)
    _flat_box("Door_Panel", (inner, max(thickness - 0.012, 0.006), height - 2.0 * rw), (cx, cy, cz), mat, parent=root)
    return root


def _bar_pull(center, length, mat, horizontal=True, parent=None):
    # Poignée barre noire mate. Horizontale (length = largeur) ou verticale.
    bar = 0.011  # section de la barre
    proj = 0.024  # avancée hors façade (le long de -Y) + profondeur visible
    dims = (length, proj, bar) if horizontal else (bar, proj, length)
    return _flat_box("Pull_Bar", dims, center, mat, parent=parent)


def build_pullout_cabinet():
    # Caisson coulissant (range-épices, déchets) : carcasse + UNE porte pleine
    # hauteur + poignée barre HORIZONTALE centrée EN HAUT (préférence Gabriel).
    W = float(CONFIG["width_m"])
    H = float(CONFIG["height_m"])
    D = float(CONFIG["depth_m"])
    finish = build_oak_material() if CONFIG.get("finish_type") == "oak" else build_white_material()
    black = material("Dilamco_Product_Matte_Black_Pull", (0.015, 0.015, 0.015, 1), 0.80, 0.0, specular=0.05)
    t = 0.0175
    tkh = 0.1143      # toe-kick 4.5 po (caisson BASE)
    setback = 0.0762  # recul du toe-kick 3 po
    # Carcasse : côtés pleine hauteur jusqu'au sol, fond/bas surélevés au-dessus
    # du toe-kick, panneau de toe-kick reculé à l'avant-bas.
    root = _flat_box("PO_Bottom", (W, D, t), (0.0, 0.0, tkh + t / 2.0), finish)
    _flat_box("PO_Top", (W, D, t), (0.0, 0.0, H - t / 2.0), finish, parent=root)
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
    finish = build_oak_material() if CONFIG.get("finish_type") == "oak" else build_white_material()
    black = material("Dilamco_Product_Matte_Black_Pull", (0.015, 0.015, 0.015, 1), 0.80, 0.0, specular=0.05)
    t = 0.0175
    open_h = min(0.4064, H * 0.45)  # niche micro-ondes ~16 po en bas
    root = _flat_box("MW_Bottom", (W, D, t), (0.0, 0.0, t / 2.0), finish)
    _flat_box("MW_Top", (W, D, t), (0.0, 0.0, H - t / 2.0), finish, parent=root)
    _flat_box("MW_Left", (t, D, H), (-W / 2.0 + t / 2.0, 0.0, H / 2.0), finish, parent=root)
    _flat_box("MW_Right", (t, D, H), (W / 2.0 - t / 2.0, 0.0, H / 2.0), finish, parent=root)
    _flat_box("MW_Back", (W - 2.0 * t, t, H), (0.0, D / 2.0 - t / 2.0, H / 2.0), finish, parent=root)
    _flat_box("MW_Shelf", (W - 2.0 * t, D - t, t), (0.0, -t / 2.0, open_h), finish, parent=root)
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
    finish_mat = (
        build_oak_material()
        if CONFIG.get("finish_type") == "oak"
        else build_white_material()
    )

    if CONFIG.get("flat_style") == "shaker":
        # Porte shaker 5 pièces : 2 montants + 2 traverses + panneau encastré.
        rw = CONFIG.get("shaker_rail_m", 0.0254)  # largeur du rail selon le profil
        rw = min(rw, width / 3.0, height / 3.0)
        root = _flat_box(
            "Dilamco_Door_Stile_L",
            (rw, thickness, height),
            (-width / 2.0 + rw / 2.0, 0.0, height / 2.0),
            finish_mat,
        )
        _flat_box(
            "Dilamco_Door_Stile_R",
            (rw, thickness, height),
            (width / 2.0 - rw / 2.0, 0.0, height / 2.0),
            finish_mat,
            parent=root,
        )
        inner_w = width - 2.0 * rw
        _flat_box(
            "Dilamco_Door_Rail_T",
            (inner_w, thickness, rw),
            (0.0, 0.0, height - rw / 2.0),
            finish_mat,
            parent=root,
        )
        _flat_box(
            "Dilamco_Door_Rail_B",
            (inner_w, thickness, rw),
            (0.0, 0.0, rw / 2.0),
            finish_mat,
            parent=root,
        )
        _flat_box(
            "Dilamco_Door_Panel",
            (inner_w, max(thickness - 0.012, 0.006), height - 2.0 * rw),
            (0.0, 0.0, height / 2.0),
            finish_mat,
            parent=root,
        )
        return root

    return _flat_box(
        "Dilamco_Flat_Panel",
        (width, thickness, height),
        (0.0, 0.0, height / 2.0),
        finish_mat,
    )


def add_shaker_frame_to_pullouts(cabinet):
    # Les façades Pullout (range-épices/déchets) sont des panneaux lisses (slab).
    # On superpose un cadre SHAKER 1 po (montants + traverses au fini du caisson)
    # pour qu'elles matchent les portes shaker. Le panneau central existant fait
    # office de panneau « recessé » derrière le cadre proéminent.
    fronts = [o for o in cabinet.children_recursive if o.get("IS_PULLOUT_FRONT")]
    if not fronts:
        return
    finish_mat = build_oak_material() if CONFIG.get("finish_type") == "oak" else build_white_material()
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
        ymin = min(p.y for p in pts)
        zmin = min(p.z for p in pts); zmax = max(p.z for p in pts)
        w = xmax - xmin
        h = zmax - zmin
        cx = (xmin + xmax) / 2.0
        cz = (zmin + zmax) / 2.0
        rw = min(CONFIG.get("shaker_rail_m", 0.0254), w / 3.0, h / 3.0)  # cadre shaker (profil)
        t = 0.008                            # proéminence du cadre (panneau recessé)
        ry = ymin - t / 2.0                  # devant la face avant (front = -Y)
        _flat_box("PO_Shaker_StileL", (rw, t, h), (xmin + rw / 2.0, ry, cz), finish_mat, parent=cabinet)
        _flat_box("PO_Shaker_StileR", (rw, t, h), (xmax - rw / 2.0, ry, cz), finish_mat, parent=cabinet)
        inner = w - 2.0 * rw
        _flat_box("PO_Shaker_RailT", (inner, t, rw), (cx, ry, zmax - rw / 2.0), finish_mat, parent=cabinet)
        _flat_box("PO_Shaker_RailB", (inner, t, rw), (cx, ry, zmin + rw / 2.0), finish_mat, parent=cabinet)
        log("Shaker frame overlay added on " + front.name)


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
    # Coin mort (blind corner) : UNE porte shaker sur la section ouvrante (gauche),
    # le RESTE OUVERT (pas de panneau) montrant l'intérieur. Carcasse pleine
    # largeur, toe-kick continu (base) ou rien (mural). Poignée sur la porte.
    W = float(CONFIG["width_m"])
    H = float(CONFIG["height_m"])
    D = float(CONFIG["depth_m"])
    is_base = CONFIG.get("cabinet_type") == "BASE"
    finish = build_oak_material() if CONFIG.get("finish_type") == "oak" else build_white_material()
    # Intérieur : blanc pour caisson blanc, érable clair pour chêne (pas de rebond chaud).
    if CONFIG.get("finish_type") == "oak":
        interior_mat = material("Dilamco_Product_Maple_Interior", (0.74, 0.66, 0.50, 1), 0.55)
    else:
        interior_mat = build_white_material()
    black = material("Dilamco_Product_Matte_Black_Pull", (0.015, 0.015, 0.015, 1), 0.80, 0.0, specular=0.05)
    t = 0.0175
    tkh = 0.1143 if is_base else 0.0
    setback = 0.0762
    # Carcasse : côtés pleine hauteur au sol, bas surélevé au-dessus du toe-kick.
    # Fond + plancher = intérieur (visible par la section ouverte).
    root = _flat_box("BC_Bottom", (W, D, t), (0.0, 0.0, tkh + t / 2.0), interior_mat)
    _flat_box("BC_Top", (W, D, t), (0.0, 0.0, H - t / 2.0), finish, parent=root)
    _flat_box("BC_Left", (t, D, H), (-W / 2.0 + t / 2.0, 0.0, H / 2.0), finish, parent=root)
    _flat_box("BC_Right", (t, D, H), (W / 2.0 - t / 2.0, 0.0, H / 2.0), finish, parent=root)
    _flat_box("BC_Back", (W - 2.0 * t, t, H - tkh), (0.0, D / 2.0 - t / 2.0, tkh + (H - tkh) / 2.0), interior_mat, parent=root)
    if is_base:
        _flat_box("BC_ToeKick", (W - 2.0 * t, t, tkh), (0.0, -D / 2.0 + setback, tkh / 2.0), finish, parent=root)
    # Étagère intérieure, visible par la section ouverte, à mi-hauteur.
    shelf_z = tkh + (H - tkh) * 0.5
    _flat_box("BC_Shelf", (W - 2.0 * t, D - 2.0 * t, t), (0.0, 0.0, shelf_z), interior_mat, parent=root)
    door_t = 0.019
    reveal = 0.003
    dcy = -D / 2.0 - door_t / 2.0
    front_h = (H - tkh) - 2.0 * reveal
    front_cz = tkh + (H - tkh) / 2.0
    # UNE porte sur la section ouvrante (gauche). Le reste reste OUVERT.
    door_w = min(0.46, W * 0.40)
    door_cx = -W / 2.0 + reveal + door_w / 2.0
    _shaker_door(door_w - reveal, front_h, door_t, (door_cx, dcy, front_cz), finish, parent=root)
    # Poignée verticale sur la porte, près du bord intérieur (côté ouvert).
    pull_y = dcy - door_t / 2.0 - 0.012
    pull_len = 0.10
    pull_z = (H - 0.09) if is_base else (tkh + 0.09)  # base : en haut ; mural : en bas
    pull_x = door_cx + door_w / 2.0 - 0.03
    _bar_pull((pull_x, pull_y, pull_z), pull_len, black, horizontal=False, parent=root)
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
        setup_lighting()
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
            finish_mat = (
                build_oak_material()
                if CONFIG.get("finish_type") == "oak"
                else build_white_material()
            )
            assign_material(fill, finish_mat)
            bevel = fill.modifiers.new("edge radius", "BEVEL")
            bevel.width = 0.0012
            bevel.segments = 2
            bevel.use_clamp_overlap = True
            log("Blind fill " + str(round(fill_w, 3)) + " m")

    if CONFIG.get("base_top") == "sink":
        # Tablier d'évier farmhouse : 0=Full Top, 1=Stretchers, 2=Sink.
        cabinet["Base Top Construction"] = 2
        bpy.context.view_layer.update()
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
    fit_pulls_to_fronts(cabinet)
    setup_shadow_catcher_floor(cabinet)
    setup_lighting()
    setup_camera(cabinet)
    configure_render()

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


SHADOW_FADE = 0.30  # opacité conservée de l'ombre plancher (0 = aucune ombre)


def apply_shadow_postprocess(png_path: Path, out_path: Path | None = None) -> None:
    """Atténue l'ombre plancher sans toucher au produit, et écrit le résultat
    (en .webp si out_path le demande — convention d'assets du site).

    Le caisson occupe les pixels opaques (alpha ≈ 255) ; l'ombre captée par le
    shadow catcher vit dans les pixels semi-transparents. On multiplie l'alpha
    de ces derniers par SHADOW_FADE : même forme d'ombre, même éclairage
    produit, ombre simplement plus discrète.
    """
    from PIL import Image

    img = Image.open(png_path).convert("RGBA")
    r, g, b, a = img.split()
    # 240+ = produit (et son antialiasing de bord) ; en dessous = ombre.
    a = a.point(
        lambda v: v if v >= 240 else int(v * SHADOW_FADE)
    )
    out = Image.merge("RGBA", (r, g, b, a))
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
    parser.add_argument("--resolution", type=int, default=1400)
    parser.add_argument(
        "--profile",
        choices=sorted(DOOR_PROFILES),
        default=DEFAULT_PROFILE,
        help="profil de porte (largeur du rail shaker) : shaker-1 (1 po) ou shaker-3 (3 po)",
    )
    parser.add_argument(
        "--hdri",
        type=str,
        default="studio_kontrast_03_2k.exr",
        help="nom du fichier HDRI dans pipeline/hdris/ (défaut: studio_kontrast_03)",
    )
    parser.add_argument("--hdri-strength", type=float, default=1.0)
    parser.add_argument("--exposure", type=float, default=-0.1)
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    product = load_product(args.catalog, args.product_code)
    hb_config = infer_hb_config(product)
    hdri = REPO_ROOT / "hdris" / args.hdri
    if not hdri.is_file():
        hdri = REPO_ROOT / "hdris" / "brown_photostudio_02_2k.exr"
    oak_diff = REPO_ROOT / "textures" / "oak_veneer_01_diff_2k.jpg"
    oak_rough = REPO_ROOT / "textures" / "oak_veneer_01_rough_2k.jpg"
    white_rough = REPO_ROOT / "textures" / "laminate_floor_02_rough_2k.jpg"
    white_nor = REPO_ROOT / "textures" / "laminate_floor_02_nor_gl_2k.jpg"
    hb_config.update(
        {
            "output": str(args.output),
            "door_profile": args.profile,
            "shaker_rail_m": DOOR_PROFILES[args.profile]["rail_m"],
            "samples": QUALITY_SAMPLES[args.quality],
            "resolution": [args.resolution, args.resolution],
            "hdri": str(hdri) if hdri.is_file() else "",
            "hdri_strength": args.hdri_strength,
            "hdri_rotation_deg": 235.0,
            "exposure": args.exposure,
            "oak_diff": str(oak_diff),
            "oak_rough": str(oak_rough),
            "white_rough": str(white_rough),
            "white_nor": str(white_nor) if white_nor.is_file() else "",
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
            apply_shadow_postprocess(args.output)
            print("[render_product_cabinet.py] ombre atténuée (PIL)", file=sys.stderr)
        return proc.returncode
    finally:
        bootstrap_path.unlink(missing_ok=True)


if __name__ == "__main__":
    raise SystemExit(main())
