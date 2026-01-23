FROM oven/bun:1 AS base
WORKDIR /app

RUN npm i -g pnpm

COPY package*.json ./
COPY bun.lock ./

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000

CMD [ "bun", "run", "start" ]