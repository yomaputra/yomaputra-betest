FROM node:18-alpine3.17

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copying source files
COPY . /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN yarn install --frozen-lockfile

EXPOSE 3000

# Running the app
CMD "yarn" "start"