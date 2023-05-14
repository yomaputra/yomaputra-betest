const UserService = require("../services/UserService");

const services = (req, res, next) => {
  const { userRepository } = res.locals;
  const { logger, redis } = req.app.locals;

  res.locals.userService = new UserService(userRepository, redis, logger);

  return next();
};

module.exports = services;