FROM node:13.12.0-alpine as builder
WORKDIR /frontend

COPY . ./

RUN npm i && npm cache clear --force && npm run build