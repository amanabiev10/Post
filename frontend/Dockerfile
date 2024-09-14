# Frontend Dockerfile (Vite)

# Verwende das Node.js Basisimage
FROM node:20.16.0

# Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und package-lock.json (wenn vorhanden) und installiere Abhängigkeiten
COPY package.json package-lock.json ./
RUN npm install

# Kopiere den restlichen Code des Projekts
COPY . .

# Baue die Produktionsversion (optional)
RUN npm run build

# Exponiere den Port
EXPOSE 5173

# Starte den Vite-Entwicklungsserver
CMD ["npm", "run", "dev", "--", "--host"]
