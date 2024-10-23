FROM node:20

WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
EXPOSE 3000


