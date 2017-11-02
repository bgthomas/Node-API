FROM node:argon
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --global nodemon
COPY . /app
EXPOSE 3000
CMD ["nodemon", "/app"]
