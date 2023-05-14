const UserRepository = require("../repositories/UserRepository");

const repositories = (req, res, next) => {
  const { db, logger } = req.app.locals;

  res.locals.userRepository = new UserRepository(db, logger);

  return next();
}

module.exports = repositories;