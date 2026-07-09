# Référent Digital · CJEPE-BENIN

Application web dynamique multi-pages (React + Vite + React Router) présentant
le programme de formation **Référent Digital · Expert en Communication
Digitale** de l'Institut CJEPE-BENIN.

## Pages

- `/` — Accueil : hero, statistiques clés, piliers de la formation.
- `/programme` — Grille des 26 modules, filtrable par pilier et par recherche.
- `/module/:id` — Détail d'un module (fiches de contenu, TP interactif, quiz
  noté), avec pagination précédent/suivant vers les modules voisins.
- `/infos` — Durée, tarifs et contact.

Le routing utilise `HashRouter` pour rester déployable sans configuration
serveur particulière (compatible hébergement statique type GitHub Pages).

## Fonctionnalités

- Navigation multi-pages avec liste de modules et fil d'ariane.
- Recherche en temps réel et filtres par pilier (Marketing Digital,
  Communication Digitale, Gestion de Communauté…) sur la page Programme.
- TP (checklist à cocher, progression affichée) et Quiz noté (correction
  visuelle, score, recommencer) à la fin de chaque module.
- Mise en page responsive (menu rétractable sur mobile).

## Ouvrir directement (sans serveur)

Le fichier [`dist/index.html`](dist/index.html) est un build autonome
(JS/CSS inlinés) : double-cliquez dessus pour lancer l'application
directement dans votre navigateur, sans installer Node ni lancer de
commande. C'est la version à jour du dernier `npm run build` committé.

## Démarrer en local (développement)

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

`npm run build` régénère `dist/index.html` en un seul fichier autonome
(grâce à `vite-plugin-singlefile`) — à recommitter après toute modification
du contenu si vous voulez que la version "double-clic" reste à jour.

## Structure

- `src/data/sections.js` — contenu des modules (fiches, TP, quiz).
- `src/data/categories.js` — classement des modules par pilier.
- `src/pages/` — Home, Programme, Module, Infos, NotFound.
- `src/components/` — NavBar, ModuleCard, ModuleNav, Section, Card, TP, Quiz, InfoPanel.
- `src/utils/filterSections.js` — logique de recherche/filtrage.
