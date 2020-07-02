FROM node:12.16.1-alpine

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json /home/node/app
RUN npm install

ADD . /home/node/app
RUN npm run build

CMD ["npm", "start"]
EXPOSE 3000
