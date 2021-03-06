var express = require('express');
var router = express.Router();
var updateVoucher = require("../controllers/voucherController");

router.route("/").post(updateVoucher);

module.exports = router;
