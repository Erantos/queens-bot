# Image officielle Node
FROM node:24-alpine

# Dossier de travail
WORKDIR /app

# Copier package.json + lock
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste du projet
COPY . .

RUN npm run build

# Lancer le bot
CMD ["node", "dist/index.js"]