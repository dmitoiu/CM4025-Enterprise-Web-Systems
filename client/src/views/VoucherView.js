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

  // Get voucher state
  const userVoucher = useSelector(state => state.voucher);
  // Get voucher data
  const {voucherInfo} = userVoucher;
  // Create dispatcher
  const dispatch = useDispatch();

  /**
   * Increase percent voucher interest for Alpha Beta Testing
   * @returns {Promise<void>}
   */
  const onPercentVoucher = async () => {
    await dispatch(increaseVoucherClicks("20%"))
  }

  /**
   * Increase currency voucher interest for Alpha Beta Testing
   * @returns {Promise<void>}
   */
  const onCurrencyVoucher = async () => {
    await(dispatch(increaseVoucherClicks("£20")))
  }

  return (
      <div>
        {/* Create vouchers */}
        <Voucher discount={"20% OFF for any product."} code={"AB 123XCS"} onPercentVoucher={onPercentVoucher}/>
        <Voucher discount={"£20 OFF for any product."} code={"AB MN67SD"} onCurrencyVoucher={onCurrencyVoucher}/>
      </div>
  );
};

export default VoucherView;