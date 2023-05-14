const UserService = require("../services/UserService")

const services = (req, res, next) => {
  const { userRepository } = res.locals;
  const { logger } = req.app.locals;

  res.locals.userService = new UserService(userRepository, logger);

  return next();
}

module.exports = services;