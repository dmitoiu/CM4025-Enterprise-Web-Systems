var mongoose = require("mongoose");

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

const Voucher = mongoose.model("Voucher", voucherSchema);

module.exports = Voucher;