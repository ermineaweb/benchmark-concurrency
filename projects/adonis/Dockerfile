FROM node:14-alpine
WORKDIR /app
COPY ./package*.json ./
COPY ./.env.example ./env
RUN npm install --silent --production
COPY ./ ./

EXPOSE 3000

CMD ["node", "server.js"]
