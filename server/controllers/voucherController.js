// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (voucherController.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing libraries and utilities
var Voucher = require("../models/voucherModel");

/**
 * Increase Voucher Interest
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateVoucher = async (req, res) => {
  try{
    const voucherName = req.body.name;
    const voucherInterest = req.body.interest;
    const voucher = await Voucher.findOne({name: voucherName});
    if(voucher){
      Voucher.findOneAndUpdate({name: voucherName}, {$inc: {"interest": 1}},
          {new: true}, (err, doc) =>{
        console.log(doc);
            res.json(doc)
      })
      res.status(200)
    } else {
      res.status(401).json({
        error: "Voucher element is incorrect"
      })
    }
  } catch (e) {
    console.log(e);
  }
}

const resetVoucher = async (req, res) => {
  try{
    const voucherName = req.body.name;
    const voucher = await Voucher.findOne({name: voucherName});
    if(voucher){
      Voucher.findOneAndUpdate({name: voucherName}, {$set: {"interest": 0}},
          {new: true}, (err, doc) =>{
            console.log(doc);
            res.json(doc)
          })
      res.status(200)
    } else {
      res.status(401).json({
        error: "Voucher element is incorrect"
      })
    }
  } catch (e) {
    console.log(e);
  }
}

/**
 * Retrieves vouchers data
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getVouchers = async (req, res) => {
  const vouchers = await Voucher.find({});
  res.json(vouchers);
}

module.exports = {updateVoucher, getVouchers, resetVoucher};
