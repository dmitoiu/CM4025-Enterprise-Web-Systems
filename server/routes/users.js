var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
var authenticateUser = userController.authenticateUser;
var getUserProfile = userController.getProfile;
var protect = require("../middleware/authMiddleware");

router.post("/login", authenticateUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
