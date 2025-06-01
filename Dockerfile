# Dockerfile
FROM node:18-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build Next.js app
RUN pnpm build

# Production image
FROM node:18-alpine AS runner

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["pnpm", "start"]
