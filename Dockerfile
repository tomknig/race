FROM node:14.17-alpine

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

USER node
ENV MONGODB_URI "mongodb://mongo:27017/race"

RUN yarn install --frozen-lockfile
RUN yarn build

CMD ["yarn", "dev"]
