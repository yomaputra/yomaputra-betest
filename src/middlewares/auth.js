const jwt = require("jsonwebtoken");
const BadRequest = require("../exceptions/BadRequest");

let middleware = {}

middleware.authorization = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new BadRequest("Unauthorized", "unauthorized", 403);
    }

    const token = authHeader.split(' ')[1];

    let decoded = jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    // throw err;
    next(err);
  }
}

module.exports = middleware;