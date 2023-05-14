const BaseError = require("./BaseError");

const handler = (err, req, res, next) => {
  const { logger } = req.app.locals;

  if (err instanceof BaseError) {
    logger.error({
      statusCode: err.statusCode,
      code: err.code,
      error: err.message,
    });

    res.status(err.statusCode).json({
      code: err.code,
      message: err.message,
    },);
  } else {
    logger.error(err);

    res.status(500).json({
      code: "internal_error",
      message: err.message,
    });
  }
};

module.exports = handler;
