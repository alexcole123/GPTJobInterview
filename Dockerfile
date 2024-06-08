
#Install Linux Alpine OS + Node.js
FROM node:20-alpine3.19

#Create /app folder (and make this foldern the current directory):
WORKDIR /app

#Copy only package.json so we could install requirements as soon as posible
COPY package.json /app

#Install package.json:
RUN npm i

#Copy entire project into /app:
COPY . /app

#Run project
ENTRYPOINT npm start

