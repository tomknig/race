FROM node:16.9.1

WORKDIR /usr/src/app

COPY package*.json ./

ENV MONGO_URL "mongodb://mongo:27017"
ENV DB_NAME points
ENV COL_NAME dataPoints

RUN yarn

COPY . .

CMD ["yarn", "dev"]
