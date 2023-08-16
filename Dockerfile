FROM node:17.7.2

WORKDIR /app

RUN npm i -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD [ "yarn", "start" ]