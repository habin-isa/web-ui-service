FROM node:9.6.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV HTTP_PROXY "http://172.28.1.1:3000"

COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

CMD ["npm", "start"]