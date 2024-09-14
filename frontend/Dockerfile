# Frontend Dockerfile (Vite)

# Verwende das Node.js Basisimage
FROM node:20.16.0

# Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und yarn.lock und installiere Abhängigkeiten
COPY package.json package.json
RUN npm install

# Kopiere den restlichen Code des Projekts
COPY . .

# Baue die Produktionsversion
RUN npm build

# Exponiere den Port
EXPOSE 5173

# Vite Server starten
CMD ["npm", "dev", "--host"]
