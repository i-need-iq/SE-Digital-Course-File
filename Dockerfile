FROM node:latest

MAINTAINER Ragul

RUN echo "Tryin to build my first application"

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE 4000

ENTRYPOINT ["npm","start"]