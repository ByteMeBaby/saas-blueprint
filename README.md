### Features

- Paaswordless authentication using Clerk

### Developement

You can use any package manager you want. Make sure to install the dependencies first using your package manager. I use pnpm.

```bash
# If you want to use docker
pnpm dockerup-f # rebuild, force recreate and up
pnpm dockerup # up
pnpm dockerdown # down

# or without docker
pnpm run dev
pnpm run build
pnpm run start
```

Or directly with docker-compose

```bash
docker compose up --build # force rebuild and up
```

### Built with

- TypeScript
- NextJS
- Clerk
- shadcn/ui
- TailwindCSS
- zod
- React Hook Form
- Docker
- Convex
- AWS DynamoDB
