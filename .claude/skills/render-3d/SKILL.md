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
3. **BlenderMCP local** : `D:\blender-mcp-main` (source du serveur MCP Python et de
   `addon.py`). Le pipeline peut utiliser `scripts/blender_mcp_client.py` directement
   contre l'addon qui écoute sur `localhost:9876`; pour le serveur MCP officiel, lancer
   `uv run --project D:\blender-mcp-main blender-mcp`.

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
# plusieurs images pour un même produit : --views face,open
```
(`batch_render_parallel.py` écrit dans `public/assets/products/renders/` et le manifest
du projet — chemins `STORE_ROOT` absolus dans le script.)
- **N sessions Blender en parallèle** : la construction HB (CPU) d'un worker recouvre
  le rendu GPU d'un autre. **3 workers = optimum** sur la RTX 4070 (~4,8 s/img). 4+
  sur-sollicite le GPU unique (plus lent). Résumable (saute les `.webp` existants).
- Rend **chaque dimension individuellement** (un render par code, pas de réutilisation).
- `--views face,open` rend plusieurs vues pour chaque produit demandé. `face` reste le
  défaut; `open` est limité aux caissons à tiroirs/pull-outs pour éviter des images
  ouvertes absurdes sur panneaux/accessoires.
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
- Côté site : `galleryFor(code, profil, couleur?)` (products.ts) lit `face@<profil>` avec repli
  sur `face` ; la couche variantes (`models.ts`) donne sa galerie propre à chaque
  variante profil ; la fiche (`produit-client`) affiche la galerie de la variante active
  → changer de profil bascule l'image. Dispo des profils par couleur =
  `PROFIL_BY_COLOR` (models.ts) : shaker-1 seulement depuis 2026-07 (le 3 po est
  retiré de la vente ; ses renders `face@shaker-3` restent dans le manifest).

### B.2 Finis alternatifs (navi) — `--finish`
Registre `FINISH_VARIANTS` (render_product_cabinet.py) : un fini rendu PAR-DESSUS le
même code catalogue (pas de ligne xlsx, contrairement au chêne `-muf`). `navi` =
mélamine bleu marine, texture RÉELLE `textures/navi_real_flat.png` (= échantillon
navi.png DÉLIGHTÉ par haute-passe gaussienne r=80 — la photo brute rend « nuagé » sur
les grandes façades). Matériau `build_navi_material` : priorité librairie .blend
(`Dilamco_Navi_Melamine`), fallback photo box-mappée, **MAT roughness 0.60-0.68 +
specular 0.05** (tout spéculaire éclaircit le CÔTÉ en rasant sur un foncé et inverse
la hiérarchie façade>côté — ne pas « satiner »). Leviers : `--navi-scale/sat/val/hue`.
```
# les ~84 caissons du bas + vanités en navi (refuse -muf et shaker-3) :
uv run python scripts/batch_render_parallel.py --finish navi --workers 3
# rendu unique : render_product_cabinet.py --product-code S8-FB30 --finish navi --output ...
```
- Fichiers suffixés `<slug>_navi_face.webp` ; manifest → vue **`face@navi`** (rebuild
  multi-vues : profils + finis, ne se clobbent pas). Batch borné aux catégories
  `category_prefixes` (`base-`, `bathroom-base-`).
- Côté site : couleur « Navi » (id `navi`) générée dans `models.ts` sur le code blanc
  (`NAVI_CATEGORY_PREFIXES`, prix = blanc + `NAVI_PRICE_DELTA`) ; `galleryFor(code,
  profil, "navi")` lit `face@navi` SANS repli sur la face blanche (placeholder sinon) ;
  pastille = crop réel `public/assets/products/swatch-navi.webp`.
- Ajouter un fini = 1 entrée `FINISH_VARIANTS` + un builder matériau + la couleur
  boutique (patron navi).

### B.3 Vue « open » (tiroirs/pull-outs ouverts) — `--view open`
Direction Gabriel 2026-07-12 : le packshot fermé = « cabinet générique » ; la force
Dilamco = MATÉRIAU/solidité → vue tiroirs ouverts qui montre les caisses.
```
uv run python scripts/render_product_cabinet.py --product-code S8-DB15 --view open --output ...
uv run python scripts/open_in_blender.py --code S8-DB15 --view open --mcp      # visualiser dans Blender ouvert
```
- `open_drawers()` (après add_face_frame) : façades **ET** caisses sont dé-parentées
  par add_face_frame → appariement façade↔caisse par centre Z (<20 cm), translation
  monde -Y en escalier **35/51/68 %** de la profondeur ; ré-parentage au caisson
  (transform conservé) pour que caméra/lumières voient les tiroirs sortis. Caméra
  vue open : `cam_dir (0.78,-1.35,0.50)` pour une vue plus latérale/plongeante
  qui lit mieux les trois caisses de tiroirs.
- Pour les caissons `DOOR_DRAWER` (1 tiroir + 1 porte), la vue ouverte doit rester
  plus proche d'une vraie photo produit : porte du bas fusionnée en **une seule**
  façade pleine largeur (HB génère deux panneaux), porte ouverte à ~102°, caméra
  plus basse/frontalisée `cam_dir (0.50,-1.55,0.24)` + lens 95 mm. Ne pas ajouter
  de quincaillerie, trous, vis, charnières ou coulisses décoratives pour le moment.
- `open_pullouts()` : pour les range-épices/poubelles coulissantes, la façade shaker
  reconstruite est taggée (`IS_RENDER_PULLOUT_FRONT`), les plateaux HB procéduraux sont
  masqués, puis un rack visuel est généré et déplacé avec la façade. Range-épices validé
  contre photos showroom : le rack a bien un panneau plein avant
  (`PulloutRack_FrontPanel`) et un panneau plein arrière (`PulloutRack_BackPanel`) qui
  le tiennent à la devanture et au fond du rack, plus les grands rails horizontaux,
  les ouvertures rectangulaires et le bouleau lisse (pas l'ancien `test32` patchwork).
  Ne pas ajouter de quincaillerie visible pour le moment : pas de coulisses métal,
  charnières, vis, trous ou poignées décoratives. Les niveaux sont des **bacs ouverts** (fond + lèvres
  latérales/front/back), pas des tablettes plates. Positionner les 3 bacs sur le
  panneau du rack : bac bas collé au bas du panel, bac milieu centré, bac haut collé
  au haut du panel (`z0 + floor/2`, `fcz - rail_h/2`, `z1 - rail_h - floor/2`).
  La largeur du rack doit être calculée depuis l'ouverture intérieure entre `Left Side`
  et `Right Side`, pas depuis la façade : limiter `rack_w` à l'ouverture intérieure
  moins ~8 mm de jeu total, sinon les bacs débordent dans les côtés du caisson.
  En vue ouverte, tirer le rack à **75 % de sa propre
  profondeur** (`rack_d * 0.75`), pas à la profondeur maximale du caisson : le
  `PulloutRack_BackPanel` doit rester encore dans le caisson. Caméra pull-out open
  validée plus basse mais encore latérale : `cam_dir (0.78, -1.35, 0.36)`.
  Le module HB d'origine sous `Pullout` (`Pullout Front`, `Spice Tray*`,
  `Overlay Prompt Obj`, descendants) doit être supprimé après reconstruction de la
  vraie façade shaker : avec le rack custom, ces objets ne doivent plus rester dans le
  `.blend` ni dans le caisson.
  Ne pas modéliser ça comme 3 boîtes empilées ni comme une cage de petits rails.
  Ne pas réutiliser directement les `Spice Tray*`
  HB en vue open : leurs offsets procéduraux donnent des plateaux séparés au lieu d'une
  unité coulissante.
- **Palette bois PBR** (2026-07-12) : intérieur/tablettes et caisses de tiroir
  utilisent par défaut `textures/blenderkit_plywood_2k.blend`, matériau
  BlenderKit `Plywood` 2K. Le shader est forcé en projection BOX/Object avec
  `projection_blend=0.22` pour éviter les UV incohérents des meshes HB générés.
  `texture_boxe.png` et `drawer_textures.png` restent seulement des fallbacks si
  le `.blend` BlenderKit manque. Chants = `birch_plywood_side.png`, HSV
  `0.5/0.68/1.06`, scale de plis `2.3`. S'applique à TOUTES les vues (visible
  par le dessus ouvert en vue face).
- **🔴 VÉRITÉ PRODUIT : le bois des caisses/intérieur est du BOULEAU** — jamais
  proposer/tester de l'érable (« maple ») : essayé 2026-07-14, rejeté (« c du
  bouleau nous autre »). **Calibration bouleau APPROUVÉE 2026-07-14** : le
  Plywood 2K natif rendait terne/sombre ((188,176,165) sat 15 %) vs les photos
  sample `public/assets/sample/drawer.jpg` = cible (208,195,177) sat 24 %.
  Leviers `--plywood-sat/val/hue` (HSV inséré avant le Base Color du matériau
  importé) ; défauts bakés **sat 1.4 / val 1.28** (CLI + fallbacks
  `load_blenderkit_plywood_material` + batch `texture_paths`) → rendu
  (198,178,159) sat 25 %. Toute retouche = re-vérifier contre les photos sample,
  pas à l'œil.
- Façades shaker render-only : ne pas garder les fronts HB `Door Style` tels quels pour
  les packshots. Le node HB génère des cellules/arêtes aux jonctions rail/montant
  (couture visible aux coins). `add_face_frame()` remplace les fronts HB par
  `replace_hb_fronts_with_clean_shaker()` : cadre shaker unionné en un seul mesh +
  panneau encastré enfant, flags `IS_DRAWER_FRONT`/`IS_CABINET_FRONT` conservés.
  `_shaker_door()` et les portes plates utilisent aussi ce cadre unionné; ne pas revenir
  à 4 boîtes séparées `Door_Stile_*`/`Door_Rail_*`.
- Vue open seulement : lampe `Open_Boxes_Fill` (key×0.28, au-dessus des caisses
  sorties) + bounce doux `Open_Interior_Bounce` (key×0.10) — sans elles l'intérieur
  des caisses tombe dans l'ombre (brun sale).
- **Supersampling DÉSACTIVÉ** (`SUPERSAMPLE = 1`, 2026-07-14). A/B mesuré : rendu
  Cycles 2400px = ~146 s vs ~37 s à 1200px (4× — le RENDU domine, pas le build :
  test 400px=14 s → build ~12 s fixe + rendu ~25 s à 1200px). Les bords natifs
  1200px sont déjà propres (AA Cycles à 32 samples) ; zoom 6× toe-kick natif vs
  supersamplé = indiscernable à 100 %. Ne PAS remettre à 2 sans prouver un
  crénelage visible à taille réelle par crop. Fait passer le batch de ~36 s/img
  à ~7-8 s/img (catalogue complet ~50 min au lieu de ~3 h 45).
- Branché : batch `--views face,open`, fichiers `<slug>_open.webp`, clés manifest
  `open` / `open@<profil>` / `open@<fini>`, galerie site qui ajoute l'image ouverte
  à côté du packshot fermé pour la variante active. Limites connues :
  pas de queues d'aronde/festonnage (géométrie), pas de coulisses.

### B.4 Boucle matériau live via BlenderMCP — rapide, sans modifier le code
NB : `open_in_blender.py` produit par défaut un **.blend FIGÉ** (meshes statiques,
sans geonodes/drivers/props HB) — indispensable pour le GUI : les handlers HB5
du Blender de Gabriel détruisent les pièces mutées au chargement (boîtes de
tiroir disparues, 2026-07-12), et en statique les matériaux sont des SLOTS
normaux (drag-drop BlenderKit fonctionnel). `--parametric` pour l'ancien
comportement (geonodes vivants, headless seulement).
Pour tester un matériau sans baker dans le pipeline :
1. Charger la vue ouverte via MCP :
   `uv run python scripts/open_in_blender.py --code S8-DB15 --view open --mcp`
2. Appliquer le matériau en session avec `scripts/blender_mcp_client.py` (`execute_code`)
   sur les objets ciblés.
3. Rendre un PNG de contrôle dans `pipeline/tmp/` depuis `HB5_Product_Camera`
   (`samples=32`, 900×900) et l'inspecter.
4. Itérer HSV/mapping/roughness/bump jusqu'à validation visuelle.
5. Baker ensuite seulement les valeurs validées dans `render_product_cabinet.py` et
   `batch_render_parallel.py`. Ne pas lancer de batch massif tant que Gabriel n'a pas
   validé le rendu.

Derniers réglages validés :
- Palette bois PBR bakée : BlenderKit `Plywood` 2K pour l'intérieur/tablettes et
  les caisses/plateaux, projection BOX/Object. Fallbacks : `texture_boxe.png`,
  `drawer_textures.png`, `birch_plywood_side.png`. Contrôle headless :
  `tmp/s8-db24-navi-blenderkit-box-baked.png`.

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
  poignée barre HORIZONTALE en haut ; `microwave` (mural) → niche ouverte + portes ;
  **`blind_corner`** → coin mort custom (`build_blind_corner_cabinet`, ex. `S8-BBC42`) ;
  **`base-microwave-cabinet`** → HB `Base Microwave` + post-traitement obligatoire
  (§ J.5 — ne jamais se fier à la hauteur tiroir HB seule).
- **Évier de ferme** (`base-cabinet-farmhouse-sink`) : caisson HB dédié `Base Sink`
  (cabinet_name), `front_layout="NONE"` (la classe `BaseSinkCabinet` bâtit ses façades) :
  tablier d'évier apparent en haut (Base Top Construction=Sink) + 2 portes shaker DESSOUS.
- **Finitions** : défaut = Blanc Pur ; SKU `-muf` ou finish « Chêne blanc » =
  mélamine chêne, matériau PBR Polyhaven injecté dans les geonodes (le shader
  CabinetWood de HB ne marche pas en headless) ; `--finish navi` = mélamine marine
  (B.2), dispatch central `build_finish_material()`. Dans TOUS les cas la porte est
  **shaker 5 pièces, rail 1 po** (préférence Gabriel : jamais de slab).
- **Intérieur = contreplaqué BOULEAU** (réalité Dilamco : caisson bouleau, extérieur
  peint/mélaminé, intérieur bois brut). Fond/tablettes/tiroirs/dessus carcasse = bouleau
  via `normalize_product_materials`. Les **côtés + plancher** sont des geonodes peints au
  fini sur toutes leurs faces → `apply_birch_interior(cabinet)` (appelé dans `run_one`
  après `hide_all_pulls`) APPLIQUE le geonode en mesh puis ré-assigne la **face tournée
  vers le centre** (côtés) et la **face du dessus** (plancher) au bouleau ; la face
  extérieure reste au fini. Visible par le dessus ouvert des caissons du bas. Ne PAS
  peindre tout le côté en bouleau (l'extérieur doit rester au fini).

## D. Réglages de rendu (déjà dans le script — ne pas régresser)
**HIÉRARCHIE DES FACES (exigence Gabriel 2026-07-03) : la FAÇADE est LA face la plus
claire, le côté +X plus sombre.** Recette Y2 : HDRI `studio_kontrast_03_2k.exr` tourné à
**270°** et force 0.5, **key frontale 42 W / size 2.2**, `Top_Softbox` z=1.9 à key×0.5,
exposure -0.15, PAS de rim (supprimé : il rasait le côté). Blanc base RGB
`0.72/0.716/0.705` (0.75 saturait la façade au niveau du fond 241). Mesures cibles (luma,
bande 45-60 % du bbox) : blanc ~236/194-211, chêne ~158/134, navi ~36/33 — vérifier
`façade > côté` sur CHAQUE fini après toute retouche (`--hdri-rotation`, `--key-energy`
existent pour re-scanner) ; toute modif du rig ⇒ re-render COMPLET du catalogue.
Caméra 85 mm, 15° de lacet, sous le dessus du caisson ; view
transform **Khronos PBR Neutral** (AgX délave les albédos) ; GPU OptiX + adaptive 0.01 ;
fond transparent (RGBA + film_transparent) + shadow catcher, ombre atténuée en post (PIL)
et contour nettoyé par supersampling ×2 + alpha prémultiplié.
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
`infer_hb_config`). **Base Sink** (évier de ferme, `BaseSinkCabinet(BaseCabinet)`,
33" ; `add_properties_base_top` force Base Top Construction=Sink → tablier apparent,
`add_doors` réserve `inch(5.9)` en haut du bay (open) et met les portes dessous ;
miniature `Sink Cabinet.png` déjà présente). **Redémarrer Blender** après modif
(jamais juste re-enable/Reload Scripts → structs RNA fantômes).

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

## G. MCP Blender (Blender ouvert, live) — workflow par défaut pour inspection
Blender contient l'addon **BlenderMCP**. Pour éviter d'ouvrir une nouvelle fenêtre à
chaque itération, privilégier le chargement dans le Blender déjà ouvert via MCP.
Source locale BlenderMCP : `D:\blender-mcp-main`.

Priorité d'utilisation :
1. Si un serveur BlenderMCP écoute sur `localhost:9876`, utiliser MCP pour charger,
   inspecter et modifier la scène live.
2. Si le serveur n'écoute pas, demander/indiquer de lancer **Connect to MCP server**
   dans Blender (panneau N → BlenderMCP). Sans serveur déjà démarré, Codex ne peut pas
   démarrer ce serveur dans une fenêtre Blender existante, car il n'a encore aucun canal
   de contrôle vers cette instance.
3. Si l'utilisateur veut que Codex démarre MCP automatiquement, utiliser
   `--mcp --ensure-mcp` : cela lance Blender avec un script qui active BlenderMCP,
   démarre le serveur et ouvre le `.blend` généré. Ce fallback peut ouvrir une nouvelle
   fenêtre, car il n'existe pas de canal pour contrôler une fenêtre Blender déjà ouverte
   tant que MCP n'écoute pas.
4. N'utiliser `--launch` que si l'utilisateur demande explicitement d'ouvrir une nouvelle
   fenêtre Blender ou si aucun Blender existant ne doit être réutilisé.

Le pipeline inclut un client TCP JSON local (`scripts/blender_mcp_client.py`) compatible
avec l'addon BlenderMCP (`execute_code`, `get_scene_info`, etc.). Le MCP sert au contrôle
live et à la validation visuelle; le headless reste préférable pour batch/render.

### G.1 Ouvrir N'IMPORTE QUEL caisson dans Blender (debug visuel) — `open_in_blender.py`
Pour déboguer le visuel d'un caisson : monter la scène packshot COMPLÈTE (caisson +
matériaux + rig lumière/caméra + view transform Khronos) et la sauver en `.blend`,
puis l'ouvrir dans le Blender de l'utilisateur. Bien plus rapide que re-rendre à chaque
essai — on itère sur les matériaux/la géométrie en direct.
```
cd .claude/skills/render-3d/pipeline
uv run python scripts/open_in_blender.py --code S8-SP06 --mcp      # monte + CHARGE dans Blender ouvert
uv run python scripts/open_in_blender.py --code S8-FB30 --finish navi
uv run python scripts/open_in_blender.py --code S8-DB15 --view open --mcp     # tiroirs ouverts
uv run python scripts/open_in_blender.py --code S8-DB15 --mcp --ensure-mcp    # démarre BlenderMCP si besoin
uv run python scripts/open_in_blender.py --code S8-DB12 --profile shaker-3
```
- `--mcp` charge le `.blend` généré dans le Blender déjà ouvert via `localhost:9876`, sans
  créer de nouvelle fenêtre. Si le port n'écoute pas, connecter BlenderMCP dans Blender puis
  relancer la commande.
- `--mcp --ensure-mcp` lance Blender avec BlenderMCP connecté si aucun serveur n'écoute.
  Utiliser ce fallback quand l'utilisateur accepte une instance contrôlable.
- `--launch` ouvre une nouvelle fenêtre Blender. Ne pas l'utiliser par défaut.
- Vérifier rapidement le socket avant une action live :
  `uv run python -c "from scripts.blender_mcp_client import is_running; print(is_running())"`.
  Si `True`, utiliser `--mcp`; si `False`, demander à Gabriel de cliquer
  `N > BlenderMCP > Connect to MCP server` ou utiliser `--mcp --ensure-mcp`.
- Pour que Claude voie l'état/les changements de Gabriel : garder l'addon **BlenderMCP
  connecté** (panneau N → Connect, port 9876) → Claude lit/édite la scène live ; sinon
  Gabriel sauve le .blend (Ctrl+S) et donne le chemin. Réglage validé dans Blender → Claude le bake.
- Écrit `blends/<slug>.blend` (+ chemin dans `blends/_last.txt`). Config IDENTIQUE au
  batch (`infer_hb_config` + `texture_paths` + profil/fini), donc ce que tu vois = le
  packshot réel.
- Repose sur l'option `save_blend` de `run_one` (dans `render_product_cabinet.py`) :
  si `CONFIG["save_blend"]` est posé, la scène montée est sauvée et le rendu est sauté.
- Ouvrir ensuite dans le Blender live (MCP) se fait automatiquement avec `--mcp` via :
  `bpy.ops.wm.open_mainfile(filepath=r"...\blends\<slug>.blend")` — l'addon BlenderMCP
  survit au chargement (il est app-level). Caméra = `HB5_Product_Camera`. Rendre depuis
  cette caméra reproduit exactement le packshot.
- Le `.blend` est en **CYCLES** (comme le packshot) ; le viewport peut aliaser les
  textures fines sur les faces minces (artefact viewport, filtré au rendu final).

## H. Gotchas (déjà résolus — ne pas réintroduire)
- `obj.bound_box` faux pour geonodes → bbox via géométrie évaluée.
- `place_cabinet_script` est une sous-classe de `place_cabinet` : NE PAS la remettre dans
  la liste `classes` de l'addon (casse le drag-drop). L'enregistrer au runtime en headless.
- `Pullout` SE construit bien en headless SI `run_calc_fix(passes=2)` après placement.
- Matériaux des CABINET_PART passent par les inputs geonode (pas les slots) ; ne jamais
  baker ces parts. Pulls = geonode `GeoNodeHardware` → `modifier_apply` requis.
- Moteur : assigner `scene.render.engine="CYCLES"` directement (enum RNA statique).
- **Géométrie custom (`_flat_box`) — staleness `matrix_world`** : en headless, `parent.matrix_world`
  n'est PAS rafraîchi après avoir posé la scale du parent. Or `matrix_parent_inverse =
  parent.matrix_world.inverted()` est STOCKÉ → un mpi périmé persiste jusqu'au rendu (bug
  observé : `Door_Panel` de la 2e porte du micro-ondes mural ressortait en cube de 1 m). Fix :
  `bpy.context.view_layer.update()` AVANT de lire `parent.matrix_world` dans `_flat_box`. Poser
  aussi la taille via `box.scale` (cube unité) plutôt que `box.dimensions` (dépend du bound_box).
- WebP : `public/assets` est 100 % WebP ; `npm run images:webp` ou conversion dans le batch.

## I. Checklist packshot — NE PAS publier sans ces étapes
Après **chaque** modif de `render_product_cabinet.py` touchant géométrie, matériaux ou
cadre de façade :

1. **Render + Read l'image** (pas seulement `BATCH_OK`). Zoomer mentalement sur :
   toe-kick, joints plancher/côtés, dessus ouvert, alignement façade/cadre.
2. **`validate_hb5_cabinets.py`** (exit 0) — ne couvre pas le visuel custom, mais
   détecte les régressions HB.
3. **Spot-check obligatoire** si la catégorie touchée l'est :
   - `base-cabinet-corner` → `S8-BBC42`
   - `base-microwave-cabinet` → `S8-BMC27`
   - caisson HB générique → `S8-DB12`
4. **Publier** (`webp` + `stamp_manifest_hashes.py`) seulement après validation visuelle.
5. **MCP live** (`open_in_blender.py --code … --mcp`) si doute sur un joint ou un débord.

## J. Géométrie custom & post-traitement HB — pièges à ne JAMAIS réintroduire

### J.1 Ordre des opérations (`add_face_frame` / `run_one`)
Le pipeline HB exécute (entre autres) :
`normalize` → `run_calc_fix` → `apply_birch_interior` → `fix_stretchers` → **`add_face_frame`**.

Règle : **toute retouche de façade overlay doit se faire APRÈS le cadre**, quand `fy0`
(face avant du cadre) est connu. Ne jamais recréer une façade shaker custom **avant**
`add_face_frame` puis compter sur `front_shift` + `replace_hb_fronts` pour corriger —
double décalage = façade décalée en Y, cadre « croche », débordements.

Pattern validé (base micro-ondes) :
1. **Tôt** : repositionner la géométrie carcasse (ex. splitter niche/tiroir).
2. **Dans `add_face_frame`** : cadre + `front_shift` + `replace_hb_fronts`.
3. **En dernier** : `finalize_*_drawer_front(cabinet, finish, fy0, …)` — dos façade
   **exactement** sur `fy0` (`cy = fy0 - door_t/2` pour `_shaker_door`).

### J.2 Façade overlay vs ouverture vs caisse de tiroir
Trois hauteurs distinctes — ne pas les confondre :

| Élément | Règle |
|--------|--------|
| **Ouverture tiroir** | Hauteur nette entre traverses (ex. BMC = **10,75″**) |
| **Façade overlay** | Ouverture + traverses recouvertes + reveal (ex. BMC ≈ **13,5″**) |
| **Caisse de tiroir** | Hauteur d'**ouverture** seulement — jamais la hauteur overlay |

Si la caisse suit la hauteur overlay → bouleau/blanc visible dans le toe-kick ou à
l'arrière. En vue `face` sur BMC : masquer la caisse (`hide_render`) après placement.

### J.3 Normales sur panneaux minces (`_flat_box`, scale ~0,0175 m)
`nrm = mw.to_3x3() @ poly.normal` **sans `.normalize()`** écrase `nrm.x` sous le
seuil de détection (< 0,45) sur les côtés minces ; seul le dessus (Z) passe → intérieur
reste au fini blanc. **Toujours normaliser** après `matrix_world` avant tout test
`nrm.x / nrm.z > seuil`. Voir `_paint_flat_side_carcass` et `_paint_flat_bottom_carcass`.

### J.4 Intérieur bouleau — zones à exclure
- **Toe-kick** : face intérieure du montant visible dans le vide du plintheau = **fini
  extérieur**, pas bouleau. Pattern blind corner : montants raccourcis au-dessus du
  toe-kick + `BC_* ToeReturn` 100 % fini ; ou seuil `floor_z` sur peinture intérieure.
- **Plancher intérieur** : peindre le **dessus** de `BC_Bottom` (ou équivalent) en
  bouleau ; un « liner » mal positionné laisse une **ligne blanche** au joint côté.
- **Base micro-ondes** : niche + parois latérales niche = **fini extérieur** (blanc/chêne),
  pas bouleau (`apply_birch_interior` : `microwave=True` saute les côtés). Ne pas peindre
  la caisse de tiroir au fini blanc par erreur dans `normalize_product_materials`.

### J.5 Base micro-ondes (`base-microwave-cabinet`, ex. `S8-BMC27`)
Plan technique Dilamco (MDB) — dimensions **fixes**, pas celles sorties par HB (~7″) :

| Zone | Hauteur |
|------|---------|
| Ouverture niche | **14,75″** |
| Traverse niche/tiroir | **1,5″** (FW = 0,0381 m) |
| Ouverture tiroir | **10,75″** |
| Total au-dessus toe-kick | **27″** (34,5″ − 4,5″ toe − 3″ traverses haut/bas) |

Fonctions dans `render_product_cabinet.py` :
- `reposition_base_microwave_splitter()` — splitter + traverse intermédiaire du cadre
- `finalize_base_microwave_drawer_front()` — façade overlay **après** cadre, dos @ `fy0`

Ne matcher que `IS_DRAWER_FRONT` (pas `"drawer front" in name` — attrape
`Drawer Front_Panel` → `StructRNA removed`).

### J.6 Coin mort (`render_mode: blind_corner`, ex. `S8-BBC42`)
Géométrie entièrement custom (`build_blind_corner_cabinet`) — **pas** HB. Ne pas
appeler `apply_birch_interior` (early return dans `run_one`). Peinture explicite :
`_paint_flat_side_carcass`, `_paint_flat_bottom_carcass`. Vérifier toe-kick + joint
plancher après chaque changement de layout blind.

### J.7 Symptômes → causes probables (debug rapide)
| Symptom | Cause la plus fréquente |
|---------|-------------------------|
| Intérieur côtés blancs | Normales non normalisées sur panneau mince |
| Ligne blanche plancher | Dessus `Bottom` au fini ; liner mal aligné |
| Bouleau dans toe-kick | Montant pleine hauteur + intérieur bouleau visible |
| Façade déborde devant cadre | Façade créée avant `fy0` / double `front_shift` |
| Bloc blanc/bouleau sur côté | Caisse tiroir trop haute ou mal peinte ; reparent KO |
| `StructRNA removed` | `_remove_object_tree` sur parent + enfant listé deux fois |

## Validation (rappel) — exécuter et LIRE avant de conclure
`scripts/validate_hb5_cabinets.py` vérifie : addon charge sans erreur, library contient
les boutons, chaque caisson se construit avec la bonne structure (façades/tiroirs/niche/
plateaux/poignée par position z), miniatures présentes. L'étendre avec une assertion à
chaque nouveau caisson. Pour un rendu produit : Read l'image et confirmer visuellement.
