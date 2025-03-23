FROM node:22-alpine AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm i -g pnpm

WORKDIR /build

COPY biome.json index.html package.json pnpm-lock.yaml tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts ./
COPY public ./public/
COPY src ./src/

# Keep these separate layers to avoid reinstalling deps for each build
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM caddy:2.9.1-alpine

COPY --from=builder /build/dist /srv
