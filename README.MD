# Jenius Backend Test

the purpose of this test is to create a microservice with (Node JS - Express) for CRUD operations of user data and stored in the database (MongoDB)

## Tasks to be done
- [x] CRUD Operations
- [x] Store data to `MongoDB`
- [x] Logging using `winston-daily-rotate`
- [x] Validate authorization using `JWT`
- [x] Implement cache strategy using `Redis` for user data
- [x] Deploy into `docker`

## Setup

#### Installing
- Run `npm install` or `yarn install` to install all dependencies
- Run the app using `npm run start` or `yarn start`

#### Building and Deploying
- Run `docker-compose --build -d` on root folder for build and run with docker

#### Credentials
- To get JWT token use the following credentials `username`: `yoma` and `password`: `password`

## List of Dependencies
- [body-parser](https://github.com/expressjs/body-parser)
- [dotenv](https://github.com/motdotla/dotenv)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [mongodb](https://github.com/mongodb/node-mongodb-native)
- [redis](https://github.com/redis/node-redis)
- [winston](https://github.com/winstonjs/winston)
- [winston-daily-rotate-file](https://github.com/winstonjs/winston-daily-rotate-file)
- [yup](https://github.com/jquense/yup)