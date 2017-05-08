FROM mhart/alpine-node:7.10.0
MAINTAINER Awe <hilongjw@gmail.com>

WORKDIR /src
ADD . .

RUN npm install --production

EXPOSE 9999

ENTRYPOINT npm start