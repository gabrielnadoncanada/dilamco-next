# GEO / AI-Search Analysis — dilamco.com

_Analyse : 2026-07-07 · Cadre : Google AI Optimization Guide (mai 2026) — « le GEO, c'est du SEO appliqué aux surfaces IA »._
_Preuves : codebase (`seo/schema/`, `public/robots.txt`, `public/llms.txt`), HTML serveur prerendu (`.next/server/app/*.html`), pages live (`/`, `/espaces/cuisine`), robots.txt live._

---

## 1. GEO Readiness Score : **71 / 100**

| Dimension (poids) | Score | Verdict |
|---|---|---|
| Citabilité des passages (25) | 16 / 25 | Bonne structure Q/R, mais pas de définition « X est… » front-loadée ni donnée unique sourcée |
| Lisibilité structurelle (20) | 16 / 20 | Hiérarchie Hn propre, titres-questions, listes ✅ — manque tableaux comparatifs |
| Contenu multi-modal (15) | 8 / 15 | Images/renders ✅ — **aucune vidéo, aucun interactif** (YouTube = corrélat #1 des citations IA) |
| Autorité & signaux de marque (20) | 12 / 20 | Entité locale solide (schema + avis) — **`sameAs` sans Wikipedia/YouTube/Reddit**, aucune date de fraîcheur |
| Accessibilité technique (20) | 19 / 20 | SSR statique ✅, robots ouvert ✅, llms.txt ✅ — quasi parfait |

**Lecture** : fondation technique excellente (rare), mais la visibilité IA plafonne à cause de **deux leviers hors-page** — présence de marque sur les plateformes que les IA citent, et **signaux de fraîcheur**.

---

## 2. Répartition par plateforme

| Plateforme | Estimation | Pourquoi |
|---|---|---|
| **Google AI Overviews** | 🟢 Fort | Corrélé au ranking classique + SSR + schema riche. Dépend surtout de bien ranker. |
| **Google AI Mode** (Gemini 3.5 Flash) | 🟡 Moyen | Puise dans un pool plus large où **fraîcheur + autorité d'entité** priment sur la position → nos points faibles. |
| **ChatGPT** | 🔴 Faible | Cite Wikipedia à ~48 % ; **Dilamco n'a pas de page Wikipedia ni de présence Reddit**. |
| **Perplexity** | 🔴 Faible | Cite Reddit à ~47 % ; **aucune présence communautaire**. |
| **Bing Copilot** | 🟡 Moyen | Crawl autorisé ; dépend de l'index Bing (vérifier Bing Webmaster + IndexNow). |

> Rappel : AI Mode et AI Overviews ne citent la même URL que ~14 % du temps. Bien ranker nourrit AIO mais **pas** AI Mode.

---

## 3. Accès des crawlers IA — 🟢 OK

`robots.txt` live confirmé : `User-agent: * / Allow: /`. **Aucun blocage.** GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Bytespider tombent tous sous `*` → autorisés.

- ✅ Rien à corriger pour l'accès.
- 🟡 Option (défensif, pas SEO) : si un jour on veut refuser l'**entraînement** tout en gardant la **recherche** IA, ajouter des blocs explicites `Disallow` pour `CCBot` / `anthropic-ai` / `Bytespider` en gardant `GPTBot` + `OAI-SearchBot` + `ClaudeBot` + `PerplexityBot` en `Allow`. Non recommandé maintenant (on veut la visibilité).

---

## 4. llms.txt — 🟢 Présent et bien fait

`public/llms.txt` : titre, description-entité (qui/où/quoi), sections Espaces/Services/Matériaux/Contact avec liens annotés, renvoi EN. Conforme au standard.

> ⚠️ Cadrage honnête : les sources primaires (Mueller, Illyes, études SE Ranking 300k domaines) indiquent que `llms.txt` **n'est aujourd'hui pas un levier de citation** confirmé sur les grands moteurs IA. On le garde (coût nul, hygiène), mais **on ne compte pas dessus** — le vrai poids vient des sections 6-7.

---

## 5. Analyse des mentions de marque — 🔴 Principal frein

Rappel étude Ahrefs (75k marques) : les **mentions de marque corrèlent 3× plus** avec la visibilité IA que les backlinks.

| Signal | Corrélation citations IA | Dilamco |
|---|---|---|
| YouTube | ~0.74 (le + fort) | ❌ Absent |
| Reddit | Élevée | ❌ Absent |
| Wikipedia / Wikidata | Élevée | ❌ Absent |
| LinkedIn | Modérée | ✅ `sameAs` présent |
| Domain Rating (backlinks) | ~0.27 (faible) | — |

`sameAs` actuel (`seo/schema/site.ts`) : Google Maps, Facebook, LinkedIn. **C'est le trou le plus coûteux du profil GEO.** Voir §8.

---

## 6. Citabilité passage par passage

**Longueur optimale de bloc citable : 134-167 mots ; ~44 % des citations viennent des 30 % supérieurs de la page.**

Constats live :
- ✅ Les pages ont des **blocs FAQ Q/R** et des **titres-questions** (`/espaces/cuisine` : « Combien coûte une cuisine sur mesure ? », « Quelle est la différence avec des armoires standard ? »…). Excellent format d'extraction.
- ✅ **Fix SSR déployé** (commit `637f4ab`) : les réponses FAQ sont désormais dans le HTML serveur. **Avant ce fix, les réponses n'existaient pas dans le DOM rendu → zéro citabilité.** C'est le prérequis #1 qui vient d'être débloqué.
- 🔴 **Ouverture non-définitionnelle** : `/espaces/cuisine` commence par « Conception, fabrication contrôlée et installation… » (description de service), pas par une définition « X est… ». Les IA extraient mal.
- 🔴 **Aucune donnée unique sourcée** (statistique, chiffre propriétaire) → rien de « quotable » exclusif.
- 🟡 Réponses FAQ probablement **trop courtes** (< 60 mots) vs l'optimum 134-167.

---

## 7. Server-Side Rendering — 🟢 Excellent

- Site Next.js **exporté statiquement** → tout le contenu est dans le HTML serveur. Les crawlers IA **n'exécutent pas de JS** ; ici ce n'est pas un problème.
- Vérifié sur `.next/server/app/fr.html` : titres, paragraphes, listes et (post-fix) réponses FAQ présents en dur.
- **Régression corrigée aujourd'hui** : l'accordéon FAQ (Radix) démontait le contenu fermé → réponses absentes du HTML. Corrigé via `forceMount` dans `components/ui/accordion.tsx` (tous les accordéons du site).

---

## 8. Top 5 des changements à plus fort impact

1. **Créer une présence YouTube + Reddit/forums locaux** (High) — le levier #1 des citations IA (ChatGPT/Perplexity). 3-5 vidéos projet (avant/après, visite showroom Dorval, « comment choisir ses armoires ») + participation authentique sur r/montreal, r/HomeImprovement, forums réno QC. Ajouter les URLs dans `sameAs`.
2. **Ajouter des dates visibles + programme de rafraîchissement** (High/Medium) — le contenu < 3 mois est ~3× plus cité ; > 6 mois perd l'éligibilité. Afficher « Mis à jour le … » sur les pages espaces/services + refresh trimestriel. **Aucune date visible actuellement.**
3. **Front-loader une définition citable** (Quick) — 1re phrase de chaque page pilier en « Une cuisine sur mesure est… » / « Chez Dilamco, une vanité sur mesure désigne… » (40-60 mots, autonome).
4. **Étoffer les réponses FAQ à 134-167 mots** (Medium) — blocs autonomes avec un fait/chiffre concret (délai 9-15 sem., fourchette 30-65k, matériaux bouleau) → densité citable + alimente déjà le JSON-LD `FAQPage`.
5. **Viser une entité Wikidata** (High, long) — à défaut de Wikipedia, créer/renseigner une entrée **Wikidata** (NAP, sameAs, secteur) : socle de résolution d'entité pour ChatGPT et le Knowledge Graph.

---

## 9. Recommandations schema (pour la découvrabilité IA)

Déjà en place (solide) : `Organization`, `HomeAndConstructionBusiness` (+ `aggregateRating` 5★/11 + `review`), `FAQPage`, `Product`+`Offer` multi-variantes, `ItemList`, `BreadcrumbList`, `Service`, `WebSite`, `ImageObject`.

À ajouter / renforcer :
- **`sameAs` élargi** dès que YouTube/Reddit/Wikidata existent (§8-1, §8-5) — c'est là que le schema croise les mentions de marque.
- **`VideoObject`** sur les pages où une vidéo sera intégrée (fort multiplicateur : +156 % de sélection multi-modale).
- **`dateModified`** (et `datePublished`) sur les pages espaces/services — appuie le signal de fraîcheur du §8-2, lisible par AI Mode.
- **`Person`/`author`** si on publie du contenu éditorial (guides, blog) — signal E-E-A-T aujourd'hui absent.
- **`sameAs` sur les avis** : envisager d'exposer le lien GBP dans le markup review (déjà `googleReviewsUrl` en config).

---

## 10. Reformulations de contenu suggérées (exemples concrets)

**`/espaces/cuisine` — 1re phrase actuelle :**
> « Conception, fabrication contrôlée et installation précise de cuisines sur mesure… »

**→ Proposition (définition front-loadée) :**
> « Une cuisine sur mesure Dilamco est un ensemble d'armoires conçu, fabriqué et installé sur mesure pour votre espace, à Pierrefonds-Roxboro et dans le Grand Montréal. Contrairement aux modules standard, chaque caisson est dimensionné au millimètre, en bois massif de bouleau, avec fourchette d'investissement typique de 30 000 à 65 000 $. »
_(48 mots, autonome, avec chiffre concret → directement extractible.)_

**FAQ « Combien coûte une cuisine sur mesure ? » — étoffer à ~140 mots** avec : fourchette chiffrée, ce qui fait varier le prix (dimensions, îlot, matériaux, coordination), délai typique 9-15 semaines, et invitation à la soumission. Bénéfice double : bloc citable **et** enrichissement du `FAQPage` JSON-LD existant.

**Ajouter un tableau comparatif** (page `/materiaux/comparatif` ou `/espaces/cuisine`) : « Sur mesure vs modules standard » (matériaux, ajustement, durabilité, prix, délai). Les tableaux sont sur-sélectionnés par les IA pour les requêtes comparatives.

---

## Quick wins (cette semaine)

- [ ] Ajouter « Mis à jour le {date} » visible sur les pages espaces + services (+ `dateModified` schema).
- [ ] Réécrire la 1re phrase des 6 pages `/espaces/*` en définition « X est… » de 40-60 mots.
- [ ] Étoffer les réponses FAQ des pages piliers à 130-160 mots avec un chiffre concret.
- [x] ~~SSR des réponses FAQ~~ — **fait** (commit `637f4ab`).

## Chantiers de fond (ce trimestre)

- [ ] Chaîne YouTube (3-5 vidéos projet) → `sameAs`.
- [ ] Présence Reddit/forums réno QC authentique.
- [ ] Fiche Wikidata de l'entité Dilamco.
- [ ] 1er tableau comparatif « sur mesure vs standard ».
