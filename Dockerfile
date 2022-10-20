FROM node:17.7.2

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]