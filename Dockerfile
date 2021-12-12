FROM node:14.17-alpine

RUN apk update && apk add python3 g++ make && rm -rf /var/cache/apk/*
RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

USER node
ENV MONGODB_URI "mongodb://mongo:27017/race"

RUN yarn install --frozen-lockfile
RUN yarn build

CMD ["yarn", "dev"]
