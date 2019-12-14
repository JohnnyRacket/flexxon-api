FROM node:alpine

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install

# Copy all other source code to work directory
ADD . /usr/src/app

# TypeScript
RUN npm run tsc

# Start
WORKDIR /usr/src/dist
CMD [ "node", "server.js" ]
EXPOSE 3000