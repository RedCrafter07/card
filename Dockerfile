FROM node:23.7.0

WORKDIR /app

RUN npm i -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD [ "yarn", "start" ]