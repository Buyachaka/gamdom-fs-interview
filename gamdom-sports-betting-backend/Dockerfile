FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN apt-get update && apt-get install -y netcat-openbsd

EXPOSE 3000

RUN chmod +x entrypoint.sh

CMD ["sh", "./entrypoint.sh"]