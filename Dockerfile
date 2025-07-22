FROM node:20-alpine AS builder
WORKDIR '/app'
COPY ./client/package.json ./
RUN npm install
COPY ./client .
RUN npm run build
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3244
CMD [ "npm", "start" ]
