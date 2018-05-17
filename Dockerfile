FROM node:alpine

RUN npm install -g http-server

COPY . /app

WORKDIR /app

RUN yarn install

EXPOSE 8080

CMD ["http-server", "-s"]
