// const express = require('express');

const Init = require("./init");

const server = new Init;
server.listenServer();

process.on("SIGINT", (signal) => {
  server.stopServer(signal);
});
process.on("SIGTERM", (signal) => {
  server.stopServer(signal);
});