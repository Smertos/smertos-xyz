FROM node:22-alpine AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /build

COPY index.html package.json pnpm-lock.yaml postcss.config.cjs tailwind.config.cjs tsconfig.json tsconfig.node.json vite.config.ts ./
COPY public ./public/
COPY src ./src/

RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM caddy:2.9.1-alpine

COPY --from=builder /build/dist /srv
