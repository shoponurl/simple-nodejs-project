FROM node:10-alpine

WORKDIR /root/hhhh/simple-nodejs-project

# Copy the local project directory into the container
COPY . .

RUN npm install

EXPOSE 8083

CMD ["node", "app.js"]
