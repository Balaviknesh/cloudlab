FROM node:12.16.1-alpine

# Create app directory
RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app/

# Install app dependencies
WORKDIR /usr/src/app
RUN npm install --only=production

# Bundle app source
COPY dist /usr/src/app

EXPOSE 8080
CMD [ "npm", "run", "start:prod" ]
