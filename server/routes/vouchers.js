// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (vouchers.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing libraries and utilities
var express = require('express');
var router = express.Router();
var voucherController = require("../controllers/voucherController");
var authMiddleware = require("../middleware/authMiddleware");
var updateVoucher = voucherController.updateVoucher;
var getVouchers = voucherController.getVouchers;
var protect = authMiddleware.protect;
var admin = authMiddleware.admin;
var resetVoucher = voucherController.resetVoucher;

// Create api vouchers routes
router.route("/").get(protect, admin, getVouchers);
router.route("/reset").post(protect, admin, resetVoucher);
router.route("/update").post(updateVoucher);

module.exports = router;
