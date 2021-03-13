// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (users.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing libraries and utilities
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
