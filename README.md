# Référent Digital · CJEPE-BENIN

Application web dynamique (React + Vite) présentant le programme de formation
**Référent Digital · Expert en Communication Digitale** de l'Institut CJEPE-BENIN.

## Fonctionnalités

- Sommaire latéral avec navigation par section (défilement automatique, mise en
  surbrillance de la section active).
- Recherche en temps réel filtrant modules, cartes et contenus.
- Mise en page responsive (menu rétractable sur mobile).

## Démarrer en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

## Structure

- `src/data/sections.js` — contenu du programme (13 sections, infos pratiques, contact).
- `src/components/` — Header, Sidebar, Section, Card, InfoPanel.
- `src/utils/filterSections.js` — logique de recherche/filtrage.
