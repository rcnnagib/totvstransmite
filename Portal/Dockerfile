# Estagio 1 - Ser� responsavel em construir nossa aplica��o
FROM node:12-slim as node

WORKDIR /app

COPY package.json /app/

RUN npm i npm@latest -g

RUN npm install

COPY ./ /app/

ARG env=prod

RUN npm run build

# Estagio 2 - Ser� responsavel por expor a aplica��o

FROM nginx

COPY --from=node /app/dist/client /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
