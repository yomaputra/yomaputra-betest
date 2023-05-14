const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth");
const userController = require("../controllers/user");

// router.get("/users/list",);
// router.get("/users/:userIdentity/detail",);
router.post("/users", [authMiddleware.authorization], userController.store);

module.exports = router;
