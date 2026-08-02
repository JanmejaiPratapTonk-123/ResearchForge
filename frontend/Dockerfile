FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY backend/package.json backend/package.json

RUN pnpm install --frozen-lockfile

COPY . .

WORKDIR /app/backend

EXPOSE 3000

CMD ["pnpm", "dev"]