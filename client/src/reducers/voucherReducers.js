// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (voucherReducers.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing constants
import {
  VOUCHER_DATA_FAIL,
  VOUCHER_DATA_REQUEST,
  VOUCHER_DATA_SUCCESS,
  VOUCHER_FAIL,
  VOUCHER_REQUEST,
  VOUCHER_SUCCESS
} from "../constants/voucherConstants";

/**
 * Voucher Interest Increase Reducer
 * @param state
 * @param action
 * @returns {{loading: boolean}|{}|{loading: boolean, error: *}|{userInfo: *, loading: boolean}}
 */
const voucherReducer = (state = {}, action) => {
  if(action.type.match(VOUCHER_REQUEST)) {
    return {loading: true};
  } else if(action.type.match(VOUCHER_SUCCESS)) {
    return {loading: false, userInfo: action.payload}
  } else if(action.type.match(VOUCHER_FAIL)) {
    return {loading: false, error: action.payload}
  } else {
    return state;
  }
}

/**
 * Voucher Retrieve Interest Data Reducer
 * @param state
 * @param action
 * @returns {{loading: boolean}|{vouchers: []}|{vouchersInfo: *, loading: boolean}|{loading: boolean, error: *}}
 */
const voucherDataReducer = (state = {vouchers: []}, action) => {
  if(action.type.match(VOUCHER_DATA_REQUEST)) {
    return {loading: true};
  } else if(action.type.match(VOUCHER_DATA_SUCCESS)) {
    return {loading: false, vouchersInfo: action.payload}
  } else if(action.type.match(VOUCHER_DATA_FAIL)) {
    return {loading: false, error: action.payload}
  } else {
    return state;
  }
}

export {voucherReducer, voucherDataReducer}
