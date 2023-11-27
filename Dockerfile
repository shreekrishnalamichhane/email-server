FROM node:18.15.0-alpine3.17

WORKDIR /app
COPY . .
RUN yarn 
RUN yarn build

EXPOSE 5000

CMD ["yarn","start"]