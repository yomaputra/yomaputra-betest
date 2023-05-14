require("dotenv").config();
const jwt = require("jsonwebtoken");
const BadRequest = require("../exceptions/BadRequest");

class AuthorizeService {
  #secret;

  constructor() {
    this.#secret = process.env.SECRET;
  }

  sign(username, password) {
    if (username === "yoma" && password === "password") {
      const token = jwt.sign({ name: "Yoma Putra" }, this.#secret, {
        expiresIn: "30m"
      });

      return token;
    }

    throw new BadRequest("Wrong credentials", "wrong_credentials", 400);
  }
}

module.exports = AuthorizeService;
