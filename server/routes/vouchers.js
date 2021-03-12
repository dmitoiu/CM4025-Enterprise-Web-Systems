var express = require('express');
var router = express.Router();
var voucherController = require("../controllers/voucherController");
var authMiddleware = require("../middleware/authMiddleware");
var updateVoucher = voucherController.updateVoucher;
var getVouchers = voucherController.getVouchers;
var protect = authMiddleware.protect;
var admin = authMiddleware.admin;

router.route("/").get(protect, admin, getVouchers);
router.route("/update").post(updateVoucher);

module.exports = router;
