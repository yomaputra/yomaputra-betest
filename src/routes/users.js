const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth");
const userController = require("../controllers/user");
const schema = require("../middlewares/validations/userValidation");
const validate = require("../middlewares/validations");

router.get("/users", [authMiddleware.authorization], userController.getAll);

router.get(
  "/users/:userIdentity/",
  [authMiddleware.authorization],
  userController.getOne
);

router.post(
  "/users",
  [authMiddleware.authorization, validate(schema)],
  userController.store
);

router.patch("/users/:userIdentity", [authMiddleware.authorization, validate(schema)], userController.update);
router.delete("/users/:userIdentity", [authMiddleware.authorization], userController.delete);

module.exports = router;
