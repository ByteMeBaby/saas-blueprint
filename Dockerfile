FROM node:latest

ENV PNPM_HOME="/pnpm/" \
    PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json .pnpm-lock.yaml* ./
RUN pnpm install

COPY next.config.js ./next.config.js
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.ts ./tailwind.config.ts
COPY tsconfig.json ./tsconfig.json
COPY next-env.d.ts ./next-env.d.ts
CMD ["pnpm", "dev"]
