"""Validation loop for the custom HB5 cabinet types (Base Microwave, Base Spice
Rack). Run headless after any edit to the HB5 addon:

    "D:/Blender 5.1/blender.exe" --background --factory-startup \
        --python scripts/validate_hb5_cabinets.py

Exit code 0 = all checks pass, 1 = at least one failure. Prints PASS/FAIL per
check. Validates: (1) the addon loads with no registration error from our edits,
(2) each cabinet builds, (3) the built structure matches the spec (drawer/niche
placement, pullout front, pull position), (4) thumbnails exist.
"""
import os
import sys
import bpy

H = 0.8763  # cabinet height used for the test builds
THUMB_DIR = (r"C:\Users\gabri\AppData\Roaming\Blender Foundation\Blender\5.1"
             r"\extensions\blender_org\home_builder_5\product_libraries\frameless"
             r"\frameless_thumbnails")

results = []  # (ok: bool, msg: str)


def check(ok, msg):
    results.append((bool(ok), msg))
    print(("  PASS " if ok else "  FAIL ") + msg, flush=True)
    return ok


# --- (1) addon loads cleanly -------------------------------------------------
try:
    bpy.ops.preferences.addon_enable(module="bl_ext.blender_org.home_builder_5")
    from bl_ext.blender_org.home_builder_5 import hb_project, hb_utils
    from bl_ext.blender_org.home_builder_5.product_libraries.frameless.operators import (
        ops_placement as opl,
    )
    if not hasattr(bpy.types, "HB_FRAMELESS_OT_place_cabinet_script"):
        bpy.utils.register_class(opl.hb_frameless_OT_place_cabinet_script)
    scene = hb_project.ensure_main_scene()
    scene.hb_frameless.ensure_default_style()
    bpy.context.window.scene = scene
    check(True, "addon HB5 chargé sans erreur")
except Exception as exc:
    check(False, f"addon HB5 NE charge PAS: {exc}")
    print(f"\nRESULT: 1/{len(results)} pass", flush=True)
    sys.exit(1)

# --- (1b) library grid lists the new buttons --------------------------------
try:
    import inspect
    src = inspect.getsource(scene.hb_frameless.draw_cabinet_library_ui)
    check('"Base Microwave"' in src or "'Base Microwave'" in src,
          "grille library contient 'Base Microwave'")
    check('"Base Spice Rack"' in src or "'Base Spice Rack'" in src,
          "grille library contient 'Base Spice Rack'")
    check('"Base Garbage Pull-Out"' in src or "'Base Garbage Pull-Out'" in src,
          "grille library contient 'Base Garbage Pull-Out'")
    check('"Base Sink"' in src or "'Base Sink'" in src,
          "grille library contient 'Base Sink'")
except Exception as exc:
    check(False, f"introspection grille library: {exc}")


def zc(o):
    deps = bpy.context.evaluated_depsgraph_get()
    ev = o.evaluated_get(deps)
    try:
        me = ev.to_mesh()
    except Exception:
        return None
    if not me.vertices:
        ev.to_mesh_clear(); return None
    zs = [(o.matrix_world @ v.co).z for v in me.vertices]
    ev.to_mesh_clear()
    return (min(zs) + max(zs)) / 2.0


def build(name, width):
    for o in list(bpy.data.objects):
        if o.type in {"MESH", "EMPTY"}:
            bpy.data.objects.remove(o, do_unlink=True)
    bpy.ops.hb_frameless.place_cabinet_script(
        cabinet_name=name, cabinet_type="BASE",
        width=width, depth=0.61, height=H,
        location_x=0.0, location_y=0.0, location_z=0.0, quantity=1)
    cabs = [o for o in bpy.data.objects if o.get("IS_FRAMELESS_CABINET_CAGE")]
    if not cabs:
        return None
    cab = cabs[-1]
    hb_utils.run_calc_fix(bpy.context, cab, passes=2)
    return cab


def fronts(cab):
    return [o for o in cab.children_recursive if o.get("IS_CABINET_FRONT")]


def pulls(cab):
    return [o for o in cab.children_recursive if o.get("IS_CABINET_PULL")]


# --- (2/3) Base Microwave : 1 tiroir EN BAS + niche ouverte EN HAUT ----------
print("\n[Base Microwave]", flush=True)
cab = build("Base Microwave", 0.3)
if check(cab is not None, "Base Microwave se construit"):
    fr = fronts(cab)
    check(len(fr) == 1, f"exactement 1 façade (trouvé {len(fr)})")
    if fr:
        check("Drawer" in fr[0].name, f"la façade est un tiroir ('{fr[0].name}')")
        z = zc(fr[0]) or 0
        check(z < 0.45 * H, f"tiroir en BAS (z={z:.3f} < {0.45*H:.3f})")
    splits = [o for o in cab.children_recursive if o.name.startswith("Splitter Vertical")]
    check(len(splits) >= 1, "split vertical présent (tiroir + niche)")

# --- (2/3) Base Spice Rack : façade Pullout, poignée EN HAUT -----------------
print("\n[Base Spice Rack]", flush=True)
cab = build("Base Spice Rack", 0.1524)
if check(cab is not None, "Base Spice Rack se construit"):
    fr = fronts(cab)
    check(len(fr) == 1, f"exactement 1 façade (trouvé {len(fr)})")
    if fr:
        check("Pullout" in fr[0].name, f"la façade est un Pullout ('{fr[0].name}')")
    pl = pulls(cab)
    if check(len(pl) >= 1, "poignée présente"):
        z = zc(pl[0]) or 0
        check(z > 0.6 * H, f"poignée EN HAUT (z={z:.3f} > {0.6*H:.3f})")
    trays = [o for o in cab.children_recursive if o.name.startswith("Spice Tray")]
    check(len(trays) == 3, f"3 plateaux à épices (trouvé {len(trays)})")
    if len(trays) == 3:
        zs = sorted(round(zc(t) or 0, 3) for t in trays)
        check(len(set(zs)) == 3, f"plateaux à 3 hauteurs distinctes {zs}")

# --- (2/3) Base Garbage Pull-Out : tiroir EN HAUT + Pullout EN BAS ----------
print("\n[Base Garbage Pull-Out]", flush=True)
cab = build("Base Garbage Pull-Out", 0.4572)  # 18 po
if check(cab is not None, "Base Garbage Pull-Out se construit"):
    fr = fronts(cab)
    check(len(fr) == 2, f"exactement 2 façades (trouvé {len(fr)})")
    drawer_fr = [o for o in fr if "Drawer" in o.name]
    pullout_fr = [o for o in fr if "Pullout" in o.name]
    check(len(drawer_fr) == 1, f"1 façade tiroir ('{[o.name for o in drawer_fr]}')")
    check(len(pullout_fr) == 1, f"1 façade Pullout ('{[o.name for o in pullout_fr]}')")
    if drawer_fr and pullout_fr:
        zd = zc(drawer_fr[0]) or 0
        zp = zc(pullout_fr[0]) or 0
        check(zd > zp, f"tiroir AU-DESSUS du pull-out (z_tiroir={zd:.3f} > z_pullout={zp:.3f})")
        check(zd > 0.6 * H, f"tiroir EN HAUT (z={zd:.3f} > {0.6*H:.3f})")
    splits = [o for o in cab.children_recursive if o.name.startswith("Splitter Vertical")]
    check(len(splits) >= 1, "split vertical présent (tiroir + pull-out)")
    # Pas de plateaux à épices : le pull-out déchets est une boîte simple.
    trays = [o for o in cab.children_recursive if o.name.startswith("Spice Tray")]
    check(len(trays) == 0, f"aucun plateau à épices (trouvé {len(trays)})")

# --- (2/3) Base Drawer (témoin) : 3 tiroirs ---------------------------------
print("\n[Base Drawer (témoin)]", flush=True)
cab = build("Base Drawer", 0.45)
if check(cab is not None, "Base Drawer se construit"):
    check(len(fronts(cab)) == 3, f"3 tiroirs (trouvé {len(fronts(cab))})")

# --- (2/3) Base Sink : tablier d'évier EN HAUT + 2 portes DESSOUS ------------
print("\n[Base Sink]", flush=True)
cab = build("Base Sink", 0.8382)  # 33 po
if check(cab is not None, "Base Sink se construit"):
    fr = fronts(cab)
    check(len(fr) == 2, f"exactement 2 portes (trouvé {len(fr)})")
    check(all("Door" in o.name for o in fr), f"les façades sont des portes ('{[o.name for o in fr]}')")
    aprons = [o for o in cab.children_recursive
              if "Sink Apron" in o.name and not o.hide_render]
    if check(len(aprons) == 1, f"tablier d'évier visible (trouvé {len(aprons)})"):
        za = zc(aprons[0]) or 0
        zdoor = max((zc(o) or 0) for o in fr) if fr else 0
        check(za > 0.6 * H, f"tablier EN HAUT (z={za:.3f} > {0.6*H:.3f})")
        check(za > zdoor, f"tablier AU-DESSUS des portes (z_tablier={za:.3f} > z_porte={zdoor:.3f})")

# --- (4) thumbnails existent -------------------------------------------------
print("\n[Thumbnails]", flush=True)
for nm in ("Base Microwave", "Base Spice Rack", "Base Garbage Pull-Out", "Sink Cabinet"):
    p = os.path.join(THUMB_DIR, nm + ".png")
    check(os.path.exists(p) and os.path.getsize(p) > 1000, f"miniature '{nm}.png' présente")

# --- summary -----------------------------------------------------------------
npass = sum(1 for ok, _ in results if ok)
print(f"\nRESULT: {npass}/{len(results)} pass", flush=True)
sys.exit(0 if npass == len(results) else 1)
