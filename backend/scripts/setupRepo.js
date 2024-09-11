const { execSync } = require('child_process');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_REPO = process.env.GITHUB_REPO;

if (!GITHUB_USERNAME || !GITHUB_REPO) {
  console.error('Les variables GITHUB_USERNAME ou GITHUB_REPO ne sont pas définies dans .env');
  process.exit(1);
}

try {
  try {
    execSync('git remote remove origin', { cwd: '..', stdio: 'ignore' });
  } catch (error) {
    console.log('Aucun remote nommé origin à supprimer.');
  }

  execSync('git init', { cwd: '..' });
  const remoteUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}.git`;
  execSync(`git remote add origin ${remoteUrl}`, { cwd: '..' });

  const gitignorePath = path.resolve(__dirname, '../.gitignore');
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
