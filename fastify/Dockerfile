FROM node:14-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install --silent --production
COPY ./ ./

EXPOSE 3000

CMD ["node", "src/index.js"]