var express = require('express');
var router = express.Router();
const authController = require("../controllers/userController")
var registerUser = authController.registerUser;
var logInUser = authController.logInUser;
var getUserProfile = authController.getProfile;
var protect = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.post("/login", logInUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
