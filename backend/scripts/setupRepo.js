// scripts/setupRepo.js
const { execSync } = require('child_process');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Charger les variables depuis .env
dotenv.config({ path: path.resolve(__dirname, '../backend/.env') });

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_REPO = process.env.GITHUB_REPO;

if (!GITHUB_USERNAME || !GITHUB_REPO) {
  console.error('Les variables GITHUB_USERNAME ou GITHUB_REPO ne sont pas définies dans .env');
  process.exit(1);
}

try {
  // Exécuter les commandes git
  execSync(`cd backend && git remote remove origin && git init && git remote add origin https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git`, { stdio: 'inherit' });

  // Créer .gitignore et y inscrire .env
  const gitignorePath = path.resolve(__dirname, '../backend/.gitignore');
  const gitignoreContent = '.env\n';

  if (!fs.existsSync(gitignorePath)) {
    fs.writeFileSync(gitignorePath, gitignoreContent, { encoding: 'utf8' });
    console.log('.gitignore créé et .env ajouté avec succès');
  } else {
    console.log('.gitignore existe déjà');
  }

  console.log('Dépôt Git configuré avec succès');
} catch (err) {
  console.error('Erreur lors de la configuration du dépôt Git :', err);
  process.exit(1);
}
