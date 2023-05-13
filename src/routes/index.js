const express = require("express");
const BadRequest = require("../exceptions/BadRequest")
const router = express.Router();

const authController = require("../controllers/auth")
const authMiddleware = require("../middlewares/auth")

router.get('/test-error', (req, res) => {
  throw new BadRequest("Test Error", "bad_request", 400)
});
router.post('/authentication', authController.authentication);
router.get('/dashboard', [authMiddleware.authorization], authController.dashboard);

module.exports = router;