class BaseError extends Error {
  constructor(message, code, statusCode) {
    super(message);

    this.code = code;
    this.statusCode = statusCode;
  }
}

module.exports = BaseError;
