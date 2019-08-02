FROM node:10.9.0

WORKDIR /
COPY ./package*.json  ./
RUN npm install
COPY ./  ./
EXPOSE 3010

CMD ["npm", "start"]