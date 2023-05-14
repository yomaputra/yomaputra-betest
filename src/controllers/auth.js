const AuthorizeService = require("../services/AuthorizeService");

const controller = {};
const service = new AuthorizeService();

controller.authentication = async (req, res, next) => {
  try {
    const token = service.sign(req.body.username, req.body.password);

    res.status(200).json({
      token
    });
  } catch (error) {
    next(error);
  }
};

controller.dashboard = async (req, res, next) => {
  res.status(200).json({
    message: "Selamat datang"
  });
};

module.exports = controller;
