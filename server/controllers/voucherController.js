var Voucher = require("../models/voucherModel");

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

const getVouchers = async (req, res) => {
  const vouchers = await Voucher.find({});
  res.json(vouchers);
}

module.exports = {updateVoucher, getVouchers};
