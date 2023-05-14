const express = require("express");
const bodyParser = require("body-parser",);
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const config = require("../../config");
const errorHandler = require("../exceptions/handler");
const router = require("../routes");
const services = require("../middlewares/services");
const repositories = require("../middlewares/repositories");
const { MongoClient } = require("mongodb");

const optsWinstonDaily = {
  filename: `logs/${config.name}-%DATE%.log`,
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "7d",
};

class Init {
  /**
   * Class construtor
   */
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.port = config.port;

    this.logger = winston.createLogger({
      level: "verbose",
      format: winston.format.json(),
      defaultMeta: { service: "ms-yomaputra-betest", },
      transports: [new DailyRotateFile(optsWinstonDaily,)],
    });

    if (config.env !== "production") {
      this.logger.add(
        new winston.transports.Console({
          level: "info",
          format: winston.format.simple(),
        },)
      );
    }

    const mongoUri = "mongodb://localhost:27017/db_yomaputra_betest";
    const client = new MongoClient(mongoUri);

    const database = client.db('db_yomaputra_betest');
    this.app.locals.db = database;

    this.app.use(repositories);
    this.app.use(services);

    this.app.use(router);
    this.app.use(errorHandler);

    this.app.locals.config = this.config;
    this.app.locals.logger = this.logger;

    this.server = null;
  }

  /**
   * Function to listen server
   */
  async listenServer() {
    this.server = this.app.listen(this.port, () => {
      this.logger.info(`${config.name} listening on port ${this.port}`);
    });
  }

  async stopServer(signal) {
    this.logger.info(`Shutdown ${config.name} with signal: ${signal}`);

    if (this.server) {
      this.server.close();
    }
  }
}

module.exports = Init;
