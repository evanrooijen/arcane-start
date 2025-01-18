
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN corepack enable
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM base AS builder
COPY . /app
COPY --from=base /app/node_modules /app/node_modules

RUN pnpm run build

FROM cgr.dev/chainguard/node
ENV NODE_ENV=production

LABEL org.opencontainers.image.source=https://github.com/evanrooijen/arcane-start

WORKDIR /app
COPY --from=builder --chown=node:node /app/.output /app/.output

EXPOSE 3000
CMD [ ".output/server/index.mjs" ]