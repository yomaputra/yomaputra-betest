const AuthorizeService = require("../services/AuthorizeService");

let controller = {};
let service = new AuthorizeService;

controller.authentication = async (req, res, next) => {
  try {
    let token = service.sign(req.body.username, req.body.password);

    res.status(200).json({
      "token": token
    });
  } catch (error) {
    return next(error)
  }
}

controller.dashboard = async (req, res, next) => {
  res.status(200).json({
    message: "Selamat datang"
  });
}

module.exports = controller;