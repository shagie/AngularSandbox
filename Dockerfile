FROM node:alpine

RUN npm install -g http-server

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE 8080

CMD ["http-server", "-s"]
