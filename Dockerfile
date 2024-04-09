FROM node:20-alpine3.18
WORKDIR /app
COPY package*.json ./
RUN yarn 
COPY . .
RUN chmod +x entrypoint.sh
EXPOSE 3000
CMD ["sh","entrypoint.sh"]