var express = require('express');
var router = express.Router();
const authController = require("../controllers/authController")
var registerUser = authController.registerUser;
var logInUser = authController.logInUser;
var getUserProfile = authController.getProfile;
var authMiddleware = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.post("/login", logInUser);
router.route("/profile").get(authMiddleware.protect, getUserProfile);

module.exports = router;
