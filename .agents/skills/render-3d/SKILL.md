---
name: render-3d
description: "Génère les images produit 3D des caissons Dilamco via le pipeline Blender local: renders catalogue, finis, profils, vues ouvertes, batchs, manifest et validation."
argument-hint: "[product <CODE> | batch | thumbnail <NomCaisson> | validate | add-cabinet]"
user-invocable: true
metadata:
  source: ".claude/skills/render-3d"
  category: dilamco-3d
---

# render-3d

Ce skill est un alias projet vers le skill canonique stocké dans:

`C:/laragon/www/dilamco-next/.claude/skills/render-3d/SKILL.md`

Avant toute action de rendu 3D, lire ce fichier canonique au complet et suivre
ses instructions. Les scripts, textures, HDRI, packages et sorties restent dans
le pipeline canonique:

`C:/laragon/www/dilamco-next/.claude/skills/render-3d/pipeline`

Workflow Blender live: utiliser BlenderMCP (`open_in_blender.py --mcp`) quand
Blender est déjà ouvert et connecté sur `localhost:9876`. Ne pas utiliser
`--launch` sauf demande explicite, car cela ouvre une nouvelle fenêtre Blender.
Si aucun serveur MCP n'écoute et qu'une instance contrôlable est acceptable,
utiliser `open_in_blender.py --mcp --ensure-mcp` pour lancer Blender avec
BlenderMCP démarré automatiquement.
Source locale BlenderMCP: `D:/blender-mcp-main`.
Matériaux récents à retenir: tiroirs bakés sur `textures/test32.png` preset V4;
intérieur caisson testé live sur `textures/texture_boxe.png` mais pas encore baké.

**Anti-régressions packshot** : lire impérativement la section **§ I (checklist)** et
**§ J (pièges custom/HB)** du skill canonique avant toute modif de
`render_product_cabinet.py` — surtout ordre `fy0`, normales minces, BMC/BBC42.

Ne pas dupliquer le pipeline dans `.agents/skills`. Ce wrapper sert seulement à
rendre le skill découvrable dans les skills projet de Codex.
