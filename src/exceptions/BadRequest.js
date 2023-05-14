const BaseError = require("./BaseError");

class BadRequest extends BaseError {
  constructor(message, code, statusCode) {
    super(message, code, statusCode);
  }
}

module.exports = BadRequest;
