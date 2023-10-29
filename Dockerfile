FROM node: 10-alpine
WORKDIR /home/node/app
 COPY ..
 RUN npm install
EXPOSE 8083
CMD ["node","app.js"]