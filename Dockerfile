FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./

RUN bun install
COPY . .
RUN bun run build

FROM gcr.io/distroless/cc-debian12:nonroot
WORKDIR /app

COPY --from=build /usr/local/bin/bun /usr/local/bin/bun
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

EXPOSE 3000

ENTRYPOINT [ "/usr/local/bin/bun", "server.js" ]