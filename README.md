# Référent Digital · CJEPE-BENIN

Application web dynamique multi-pages (React + Vite + React Router) présentant
le programme de formation **Référent Digital · Expert en Communication
Digitale** de l'Institut CJEPE-BENIN.

## Ouvrir le cours (sans rien installer)

Double-cliquez sur [`index.html`](index.html), à la racine du dépôt — comme
le fichier de départ. Tout le JS/CSS est intégré dans ce fichier unique,
aucun serveur ni installation n'est nécessaire.

## Pages

- `/` — Accueil : hero, statistiques clés, piliers de la formation.
- `/programme` — Grille des 26 modules, filtrable par pilier et par recherche.
- `/module/:id` — Détail d'un module (fiches de contenu, TP interactif, quiz
  noté), avec pagination précédent/suivant vers les modules voisins.
- `/infos` — Durée, tarifs et contact.

Le routing utilise `HashRouter` : il fonctionne aussi bien en ouverture
directe du fichier (`file://`) qu'une fois hébergé en ligne.

## Fonctionnalités

- Navigation multi-pages avec liste de modules et fil d'ariane.
- Recherche en temps réel et filtres par pilier (Marketing Digital,
  Communication Digitale, Gestion de Communauté…) sur la page Programme.
- TP (checklist à cocher, progression affichée) et Quiz noté (correction
  visuelle, score, recommencer) à la fin de chaque module.
- Mise en page responsive (menu rétractable sur mobile).

## Développement

Le code source vit dans [`app/`](app/) ; la racine du dépôt ne contient que
le résultat prêt à ouvrir (`index.html` + `favicon.svg`).

```bash
cd app
npm install
npm run dev          # serveur de développement (http://localhost:5173)
```

## Mettre à jour le fichier ouvrable

Après toute modification du contenu ou du code, régénérez `index.html` à la
racine :

```bash
cd app
npm run release       # build + copie dist/index.html vers ../index.html
```

Puis committez `index.html` (et `favicon.svg` si modifié) avec vos autres
changements.

## Structure

```
index.html            ← fichier ouvrable en double-clic (généré)
favicon.svg
legacy/                ← ancienne version HTML statique, conservée pour référence
app/                   ← code source (React + Vite)
  src/data/sections.js  — contenu des modules (fiches, TP, quiz)
  src/data/categories.js — classement des modules par pilier
  src/pages/            — Home, Programme, Module, Infos, NotFound
  src/components/       — NavBar, ModuleCard, ModuleNav, Section, Card, TP, Quiz, InfoPanel
  src/utils/filterSections.js — logique de recherche/filtrage
  scripts/release.mjs   — copie le build vers la racine du dépôt
```
