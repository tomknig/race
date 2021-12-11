FROM node:16.9.1

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

ENV MONGO_URL "mongodb://mongo:27017/race"
ENV DB_NAME points
ENV COL_NAME dataPoints

RUN yarn

COPY . .

CMD ["yarn", "dev"]
