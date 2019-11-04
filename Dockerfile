FROM node:10

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./
COPY /src/ ./src/

RUN apt update && apt install -y yarn stress
RUN yarn install && yarn build

COPY . .

EXPOSE 80

CMD [ "node", "dist/index.js"]
