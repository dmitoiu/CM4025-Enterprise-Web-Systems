// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (voucherModel.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing libraries and utilities
var mongoose = require("mongoose");

// Create voucher schema
const voucherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  interest: {
    type: Number,
    required: true,
    min: 0
  },
}, {
  timestamps: true
});

// Create voucher model
const Voucher = mongoose.model("Voucher", voucherSchema);

module.exports = Voucher;