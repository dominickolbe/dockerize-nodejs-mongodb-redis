FROM node:12

WORKDIR /app

COPY . .

RUN yarn

CMD [ "npm", "start" ]