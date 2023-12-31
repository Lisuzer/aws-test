FROM node:18-alpine

# Create app directory
WORKDIR /app/dist

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "start" ]