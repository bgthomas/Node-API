FROM node:argon
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY . /app
RUN cd /app && npm install
EXPOSE 3000
CMD [ "npm","start"]
