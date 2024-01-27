FROM node:20.11.0-slim

WORKDIR /app

RUN apt update && apt install -y git curl

COPY package.json package-lock.json ./
RUN npm install