// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (VoucherView.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React from 'react';
import Voucher from "../components/Voucher";
import {increaseVoucherClicks} from "../actions/voucherActions";
import {useDispatch, useSelector} from "react-redux";

const VoucherView = () => {

  const userVoucher = useSelector(state => state.voucher);
  const {voucherInfo} = userVoucher;
  const dispatch = useDispatch();

  const onPercentVoucher = async () => {
    await dispatch(increaseVoucherClicks("20%"))
  }

  const onCurrencyVoucher = async () => {
    await(dispatch(increaseVoucherClicks("£20")))
  }

  return (
      <div>
        <Voucher discount={"20% OFF for any product."} code={"AB 123XCS"} onPercentVoucher={onPercentVoucher}/>
        <Voucher discount={"£20 OFF for any product."} code={"AB MN67SD"} onCurrencyVoucher={onCurrencyVoucher}/>
      </div>
  );
};

export default VoucherView;