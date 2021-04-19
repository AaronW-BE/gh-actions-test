FROM node:latest

RUN mkdir -p /home/www/node
WORKDIR /home/www/node
COPY . /home/www/node

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["start"]
