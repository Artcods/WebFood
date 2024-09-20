FROM node:18.20.4-alpine3.20

WORKDIR /app

COPY package*.json /app
RUN npm i

COPY . .

CMD npm run serve
