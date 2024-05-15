# build stage
FROM node:20-alpine3.18 as build-stage

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm config set registry https://registry.npmmirror.com/

RUN pnpm install

RUN pnpm run build:serve

# production stage
FROM node:20-alpine3.18 as production-stage

COPY --from=build-stage /app/packages/mobile/dist /app
COPY --from=build-stage /app/packages/mobile/package.json /app/package.json

WORKDIR /app

RUN npm install -g pnpm

RUN pnpm config set registry https://registry.npmmirror.com/

RUN pnpm install --production

EXPOSE 3012

CMD ["node", "/app/main.js"]
