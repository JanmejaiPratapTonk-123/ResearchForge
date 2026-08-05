FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# Include other workspace package manifests so pnpm can resolve workspaces from the repo root
COPY backend/package.json backend/package.json
COPY frontend/package.json frontend/package.json

RUN pnpm install --frozen-lockfile

COPY . .

WORKDIR /app/frontend

EXPOSE 3000

CMD ["pnpm", "dev","--","--hostname", "0.0.0.0"]
