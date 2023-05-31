FROM node
WORKDIR /
COPY package*.json .
RUN npm install
EXPOSE 8001
COPY . .
CMD ["npm", "run", "dev"]