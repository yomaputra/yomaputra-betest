const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");
const authMiddleware = require("../middlewares/auth");

router.post("/authentication", authController.authentication);
router.get(
  "/dashboard",
  [authMiddleware.authorization],
  authController.dashboard
);

const users = require('./users');

router.use(users);

module.exports = router;
