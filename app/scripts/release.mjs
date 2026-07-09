// Copie le build autonome (dist/) vers la racine du dépôt en tant que
// index.html, pour qu'il soit ouvrable en double-clic sans serveur ni
// dossier à explorer — comme le fichier HTML statique de départ.
import { copyFileSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const appDir = dirname(dirname(fileURLToPath(import.meta.url)))
const repoRoot = dirname(appDir)

const files = [
  ['dist/index.html', 'index.html'],
  ['dist/favicon.svg', 'favicon.svg'],
]

for (const [from, to] of files) {
  const src = resolve(appDir, from)
  const dest = resolve(repoRoot, to)
  if (!existsSync(src)) {
    console.error(`Fichier manquant, avez-vous lancé "npm run build" ? ${src}`)
    process.exit(1)
  }
  copyFileSync(src, dest)
  console.log(`Copié : ${from} → ${to}`)
}
