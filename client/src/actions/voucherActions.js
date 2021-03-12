import {
  VOUCHER_DATA_FAIL,
  VOUCHER_DATA_REQUEST,
  VOUCHER_DATA_SUCCESS,
  VOUCHER_FAIL,
  VOUCHER_REQUEST,
  VOUCHER_SUCCESS
} from "../constants/voucherConstants";
import auth from "../helpers/authHelper";

/**
 * Voucher
 * Purpose: this function will increase the voucher that uses percentage as a name
 * @param voucherName
 * @returns {function(...[*]=)}
 */
const increaseVoucherClicks = (voucherName) => async (dispatch) => {
  try{
    dispatch({
      type: VOUCHER_REQUEST
    })

    const method = "POST";

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const data = {
      name: voucherName,
    }

    let response = await fetch("/api/vouchers/update", {
      method: method,
      headers: headers,
      body:JSON.stringify(data)
    });

    let result = await response.json();

    if(result.error == null){
      dispatch({
        type: VOUCHER_SUCCESS,
        payload: result
      })

    } else {
      dispatch({
        type: VOUCHER_FAIL,
        payload: result.error
      })
    }

  } catch (error) {
    console.log(error);
  }
}

const getVouchers = () => async (dispatch, getState) => {
  try{
    dispatch({
      type: VOUCHER_DATA_REQUEST
    })

    const method = "GET";

    const headers = {
      "Authorization": `Bearer ${auth.isAuthenticated().token}`,
    }

    let response = await fetch("/api/vouchers", {
      method: method,
      headers: headers,
    });

    let result = await response.json();

    if(result.error == null){
      dispatch({
        type: VOUCHER_DATA_SUCCESS,
        payload: result
      })

    } else {
      dispatch({
        type: VOUCHER_DATA_FAIL,
        payload: result.error
      })
    }

  } catch (error) {
    console.log(error);
  }
}

export {increaseVoucherClicks, getVouchers};