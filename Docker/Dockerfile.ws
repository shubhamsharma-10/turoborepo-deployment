FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./pnpm-lock.yaml ./pnpm-lock.yaml
COPY ./pnpm-workspace.yaml ./pnpm-workspace.yaml

COPY ./packages ./packages
COPY ./apps/ws  ./apps/ws 

RUN pnpm install

RUN pnpm run db:generate

RUN pnpm run build 

EXPOSE 8081

CMD [ "pnpm", "run", "start:ws" ]