FROM node:17-buster-slim

COPY ./* ./

ENV NODE_ENV=production

RUN npm install --production

EXPOSE 8443

ENTRYPOINT ["node", "app.js"]
