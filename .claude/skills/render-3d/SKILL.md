---
name: render-3d
description: "Génère les images produit 3D des caissons Dilamco (catalogue + miniatures library Home Builder 5) via Blender. Pipeline headless (batch parallèle) + MCP Blender (live), mapping catalogue→caisson, finitions, géométrie custom, conversion WebP + manifest, et boucle de validation obligatoire. Utiliser quand on dit : générer/refaire une image produit, render caisson, rendu 3D, thumbnail caisson, miniature library HB5, batch de renders, ajouter un type de caisson."
argument-hint: "[product <CODE> | batch | thumbnail <NomCaisson> | validate | add-cabinet]"
user-invocable: true
metadata:
  author: Gabriel + Claude
  category: dilamco-3d
---

# render-3d — Pipeline d'images 3D Dilamco

Tout ce qu'il faut pour produire les images 3D des caissons Dilamco : rendus du
catalogue (`public/assets/products/renders/`) ET miniatures de la library Home
Builder 5. Deux moteurs : **headless** (batch, reproductible) et **MCP Blender**
(inspection/validation dans le Blender ouvert).

## 🔴 Règle d'or (feedback Gabriel) : VALIDER, ne jamais assumer
Après TOUTE modification touchant le rendu ou l'addon HB5, lancer la **boucle de
validation** et lire le résultat AVANT d'affirmer que c'est bon. Pour un rendu,
toujours OUVRIR l'image produite (Read) et la regarder — un script qui finit ≠
une image correcte. Observer la réalité → asserter → corriger → relancer.

```
cd .claude/skills/render-3d/pipeline
"D:/Blender 5.1/blender.exe" --background --factory-startup --python scripts/validate_hb5_cabinets.py
```
(exit 0 = OK, imprime PASS/FAIL par check.)

## Tout est embarqué dans le skill — `.claude/skills/render-3d/pipeline/`
Le pipeline complet vit DANS le skill (aucun pointage vers `D:\dilamco_render`) :
- `pipeline/scripts/` — `render_product_cabinet.py` (lanceur + bootstrap + `infer_hb_config`
  + matériaux + caméra), `batch_render_parallel.py`, `validate_hb5_cabinets.py`.
- `pipeline/hdris/brown_photostudio_02_2k.exr`, `pipeline/textures/` (chêne + laminate PBR) —
  résolus via `REPO_ROOT = pipeline/` dans les scripts.
- `pipeline/packages/kitchen-spec/src` + `pipeline/apps/worker/src` — styles de porte HB
  (`kitchen_spec.Style`, `worker.builders.style_builder.StyleBuilder`), ajoutés au `sys.path`
  du Blender headless via `WORKSPACE_SRCS`.
- `pipeline/pyproject.toml` — `uv run` fournit Pillow au lanceur (post-process ombre + webp).
  Lancer les scripts avec `cd .claude/skills/render-3d/pipeline && uv run python scripts/...`.

**Seules dépendances EXTERNES** (prérequis d'environnement, non embarquables) :
1. **Blender** `D:\Blender 5.1\blender.exe` (5.1, GPU OptiX RTX 4070).
2. **Addon HB5** installé dans Blender : `…\Blender\5.1\extensions\blender_org\home_builder_5`
   (= module `bl_ext.blender_org.home_builder_5`). Miniatures library :
   `…\product_libraries\frameless\frameless_thumbnails\<NomCaisson>.png` (540×540 RGBA).

**Entrées/sorties dans le site live `C:\laragon\www\dilamco-next`** (la cible du rendu) :
- Catalogue : `lib/shop/catalog-products.json` (généré du xlsx ; le **xlsx racine prime**).
  Champs : code, category, finish, w/h/d (pouces), doors, drawers, visible.
- Sortie : `public/assets/products/renders/<slug>_face.webp`.
- Manifest : `lib/shop/render-manifest.json` (code SKU → URL ; lu par `lib/shop/products.ts`).
  slug = code minuscule, `*`→x, séparateurs→tiret.
- (`dilamco_store` était l'ancienne cible ; catalogue identique. Le pipeline pointe
  désormais vers dilamco-next.)

## A. Rendre un produit du catalogue
```
cd .claude/skills/render-3d/pipeline
uv run python scripts/render_product_cabinet.py --product-code S8-DB12 \
  --output C:/laragon/www/dilamco-next/public/assets/products/renders/s8-db12_face.png \
  --quality preview --resolution 1200
```
- `--quality` : `fast`(24) `preview`(32) `standard`(64) `final`(256) samples. Pour le
  blanc/chêne, **preview suffit** (denoiser + adaptive). Le script applique l'ombre
  plancher atténuée et convertit en `.webp`.
- Puis (si PNG produit) : convertir en `.webp` (PIL), PUIS **cache-bust** —
  `uv run python scripts/stamp_manifest_hashes.py` regrave `?v=<hash-contenu>` sur
  chaque URL du manifest (sinon le navigateur ressert la vieille image en cache ;
  le nom de fichier ne change PAS). Le batch (B) fait ce stamping automatiquement.

## B. Batch parallèle (catalogue complet ou sous-ensemble) — PRÉFÉRÉ
```
cd .claude/skills/render-3d/pipeline
uv run python scripts/batch_render_parallel.py --workers 3 --quality preview --resolution 1200
# sous-ensemble : --only S8-DB12,S8-DB15   |  forcer re-render : --force
```
(`batch_render_parallel.py` écrit dans `public/assets/products/renders/` et le manifest
du projet — chemins `STORE_ROOT` absolus dans le script.)
- **N sessions Blender en parallèle** : la construction HB (CPU) d'un worker recouvre
  le rendu GPU d'un autre. **3 workers = optimum** sur la RTX 4070 (~4,8 s/img). 4+
  sur-sollicite le GPU unique (plus lent). Résumable (saute les `.webp` existants).
- Rend **chaque dimension individuellement** (un render par code, pas de réutilisation).
- Reconstruit le manifest À LA FIN depuis les fichiers (pas de course entre workers) et
  **élague** les entrées des produits visibles non-rendables (→ placeholder côté site).
- Conversion `.webp` faite dans le driver. Pas besoin de `npm run images:webp` ensuite.

### B.1 Profils de porte (style shaker) — `--profile`
Le style de porte (largeur du rail shaker) est paramétrable via le registre
`DOOR_PROFILES` (dans `render_product_cabinet.py`) : `shaker-1` (rail 1 po, DÉFAUT)
et `shaker-3` (rail 3 po). Ajouter un style = une ligne dans `DOOR_PROFILES`
(`rail_m`, `slug_suffix`, `manifest_view`). Le rail est threadé partout : style HB
(`shaker_rail_width`), overlay shaker des pullouts, et géométrie custom
(`_shaker_door`/`build_flat_panel`).
```
# tous les caissons BLANC en shaker 3 po (le chêne -muf reste shaker-1 only) :
uv run python scripts/batch_render_parallel.py --profile shaker-3 --workers 3
# rendu unique : render_product_cabinet.py --product-code S8-DB12 --profile shaker-3 --output ...
```
- Profil ≠ défaut → **fichiers suffixés** (`<slug>_s3_face.webp`), le défaut garde le
  slug nu : les rendus shaker-1 existants ne bougent pas.
- Manifest : défaut → `face` ; profil alt → **`face@<profil>`** (ex. `face@shaker-3`).
  `rebuild_manifest` est multi-profil (ne se clobbe pas entre profils ; préserve `technique`).
- Côté site : `galleryFor(code, profil)` (products.ts) lit `face@<profil>` avec repli
  sur `face` ; la couche variantes (`models.ts`) donne sa galerie propre à chaque
  variante profil ; la fiche (`produit-client`) affiche la galerie de la variante active
  → cliquer « Shaker 1 po ↔ 3 po » bascule l'image. Dispo des profils par couleur =
  `PROFIL_BY_COLOR` (models.ts) : blanc = 1+3 po, chêne = 1 po.

## C. Mapping catalogue → caisson (`infer_hb_config` dans `render_product_cabinet.py`)
- **Caissons HB** (place_cabinet_script) : `cabinet_type` BASE/UPPER/TALL + `front_layout`.
  - Muraux : `wall-cabinet*`, `upper-*` (dessus-frigo), `microwave`, `standard` (si nom
    « du haut » ou profondeur ≤14) → UPPER. `corner` (WBC) → UPPER coin aveugle.
  - Bas : `base-cabinet-*`, `bathroom-base-cabinet-*`, `base-microwave-cabinet`, `standard`
    (sinon) → BASE. `pantry`/`utility`/h≥70 → TALL.
- **Pièces plates** (FLAT_CATEGORIES) : `dummy-door`, `island-back/side-panel`,
  `wall-end-panel` rendues comme panneaux. ⚠️ Les **trims linéaires** (`fillers-base-wall-tall`,
  `moldings`, `panels`=coups-de-pied, `return-panels-appliance`) sont EXCLUS (lamelles
  illisibles → placeholder). Dims manquantes → placeholder.
- **Géométrie custom** (hors HB, `render_mode`) : `*-pull-out` → porte coulissante,
  poignée barre HORIZONTALE en haut ; `microwave` → niche ouverte + portes.
- **Finitions** : défaut = Blanc Pur (porte shaker 5 pièces) ; SKU `-muf` ou finish
  « Chêne blanc » = mélamine chêne (porte slab), matériau PBR Polyhaven injecté dans les
  geonodes (le shader CabinetWood de HB ne marche pas en headless).

## D. Réglages de rendu (déjà dans le script — ne pas régresser)
HDRI studio `brown_photostudio_02_2k.exr` (strength 0.9, rot 235°) ; key dédoublée
(ombre 3× plus pâle) ; caméra 85 mm, 15° de lacet, sous le dessus du caisson ; view
transform **Khronos PBR Neutral** (AgX délave les albédos) ; GPU OptiX + adaptive 0.01 ;
fond transparent (RGBA + film_transparent) + shadow catcher, ombre atténuée en post (PIL).
`fit_pulls_to_fronts` (après le cadre shaker) rétrécit toute poignée HB (longueur FIXE)
qui déborde la bande shaker d'une façade étroite — ex. range-épices 6" ; ne touche que
les poignées qui débordent vraiment (caissons larges + poignées verticales intacts).

## E. Ajouter un nouveau type de caisson à HB5 (apparaît dans la library)
4 points (détaillés dans la mémoire `hb5-add-cabinet-type`) — fichiers sous
`.../product_libraries/frameless/` :
1. `types_frameless.py` → `BaseCabinet.add_exterior` (nouveau `default_exterior`) + méthode `add_*`
   (inserts via `SplitterVertical`, `None` = ouverture ouverte ; classes dispo : `Doors`,
   `Drawer`, `Pullout` (poignée haut ; `tray_count>0` = N plateaux), `OpenWithShelves`, `CabinetShelves`).
2. `operators/ops_placement.py` → `get_cabinet_class` : `cabinet_name == '<X>'` ⇒ `default_exterior=...`.
   (Largeur par défaut : bloc « special cabinet types » de l'invoke, ~ligne 614.)
3. `props_hb_frameless.py` → `draw_cabinet_library_ui` : entrée `(label, cabinet_name, thumbnail)`.
4. Miniature `frameless_thumbnails/<thumbnail>.png` 540×540 — générée headless (voir F).
Déjà ajoutés : **Base Microwave** (niche haut + tiroir bas), **Base Spice Rack** (Pullout
étroit 6", 3 plateaux), **Base Garbage Pull-Out** (tiroir utilitaire en haut + Pullout
pleine largeur en bas pour les bacs, `default_exterior="Garbage Pullout"`, 18" ; catégorie
catalogue `base-cabinet-garbage-pull-out` routée AVANT le pull-out générique dans
`infer_hb_config`). **Redémarrer Blender** après modif (jamais juste re-enable/Reload
Scripts → structs RNA fantômes).

## F. Générer une miniature library HB5 (headless)
Script type (cf. ce qu'on a fait pour Microwave/Spice Rack) :
1. `addon_enable` HB5 → `register_class(ops_placement.hb_frameless_OT_place_cabinet_script)`
   (cet opérateur N'EST PLUS enregistré par l'addon — sous-classer un opérateur enregistré
   cassait le drag-drop interactif ; on l'enregistre nous-mêmes en headless).
2. `ensure_main_scene()` + `ensure_default_style()` → `place_cabinet_script(cabinet_name, cabinet_type, width, depth, height, location_x=-width/2, quantity=1)` → `hb_utils.run_calc_fix(ctx, cab, passes=2)`.
3. **Supprimer** les objets de scène hors caisson (sol/pièce HB par défaut, sinon ils
   remplissent le cadre en gris). Matériau gris ~(0.70,0.72,0.74), poignées noires.
4. **Cadrer avec la géométrie ÉVALUÉE** (`obj.evaluated_get(depsgraph).to_mesh()` → `matrix_world @ v.co`),
   JAMAIS `obj.bound_box` (faux pour les pièces geonodes → caméra collée).
5. Cycles + `film_transparent=True`, 540×540, copier dans `frameless_thumbnails/`.
Pour montrer un intérieur (ex. plateaux), masquer la façade (`IS_CABINET_FRONT`/`IS_PULLOUT_FRONT`/`IS_CABINET_PULL` → `hide_render=True`) et rendre.

## G. MCP Blender (Blender ouvert, live) — pour inspection/validation
Outils : `mcp__blender__get_scene_info`, `get_object_info`, `get_viewport_screenshot`,
`execute_blender_code` (exécute du Python dans le Blender ouvert). Prérequis : addon
BlenderMCP → panneau N → onglet **BlenderMCP** → « Connect to MCP server » (port 9876).
Usage : valider en direct un caisson placé interactivement (lire la scène, screenshot,
exécuter un check). Le **headless reste préférable pour les batchs** ; le MCP sert au
contrôle live et à la validation visuelle dans le Blender de l'utilisateur.

## H. Gotchas (déjà résolus — ne pas réintroduire)
- `obj.bound_box` faux pour geonodes → bbox via géométrie évaluée.
- `place_cabinet_script` est une sous-classe de `place_cabinet` : NE PAS la remettre dans
  la liste `classes` de l'addon (casse le drag-drop). L'enregistrer au runtime en headless.
- `Pullout` SE construit bien en headless SI `run_calc_fix(passes=2)` après placement.
- Matériaux des CABINET_PART passent par les inputs geonode (pas les slots) ; ne jamais
  baker ces parts. Pulls = geonode `GeoNodeHardware` → `modifier_apply` requis.
- Moteur : assigner `scene.render.engine="CYCLES"` directement (enum RNA statique).
- WebP : `public/assets` est 100 % WebP ; `npm run images:webp` ou conversion dans le batch.

## Validation (rappel) — exécuter et LIRE avant de conclure
`scripts/validate_hb5_cabinets.py` vérifie : addon charge sans erreur, library contient
les boutons, chaque caisson se construit avec la bonne structure (façades/tiroirs/niche/
plateaux/poignée par position z), miniatures présentes. L'étendre avec une assertion à
chaque nouveau caisson. Pour un rendu produit : Read l'image et confirmer visuellement.
