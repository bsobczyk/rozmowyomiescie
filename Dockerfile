# Użyj oficjalnego obrazu Node.js jako obrazu bazowego
FROM node:20-slim AS base

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Zainstaluj pnpm - jeśli używasz npm lub yarn, możesz pominąć ten krok
# RUN npm install -g pnpm

# Sklonuj zależności
COPY package.json ./
COPY package-lock.json ./

# Zainstaluj zależności produkcyjne
RUN npm install --production

# Skopiuj resztę plików aplikacji
COPY . .

# Zbuduj aplikację
RUN npm run build

# Uruchom aplikację
CMD ["npm", "start"]
