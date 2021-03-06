import {VOUCHER_FAIL, VOUCHER_REQUEST, VOUCHER_SUCCESS} from "../constants/voucherConstants";

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

export {voucherReducer}
