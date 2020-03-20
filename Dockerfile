FROM node:10.13-alpine

COPY . /srv/app

WORKDIR /srv/app

#ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm install -g @angular/cli -y \
    && npm install

CMD ['ng','serve --open']
