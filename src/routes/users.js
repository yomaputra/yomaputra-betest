const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth");
const userController = require("../controllers/user");

router.get("/users", [authMiddleware.authorization], userController.getAll);
router.get("/users/:userIdentity/detail", [authMiddleware.authorization], userController.getOne);
router.post("/users", [authMiddleware.authorization], userController.store);

module.exports = router;
