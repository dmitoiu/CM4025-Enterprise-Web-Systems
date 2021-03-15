// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (voucherActions.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import {
  VOUCHER_DATA_FAIL,
  VOUCHER_DATA_REQUEST,
  VOUCHER_DATA_SUCCESS,
  VOUCHER_FAIL,
  VOUCHER_REQUEST, VOUCHER_RESET_FAIL, VOUCHER_RESET_REQUEST, VOUCHER_RESET_SUCCESS,
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
    // Dispatch voucher reuest
    dispatch({
      type: VOUCHER_REQUEST
    })

    // Create request method
    const method = "POST";

    // Create request headers
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    // Create request body
    const data = {
      name: voucherName,
    }

    // Create complete request
    let response = await fetch("/api/vouchers/update", {
      method: method,
      headers: headers,
      body:JSON.stringify(data)
    });

    // Get result as json
    let result = await response.json();

    // IF there is no error, dispatch success
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

/**
 * Get all vouchers and their interest count
 * @returns {function(...[*]=)}
 */
const getVouchers = () => async (dispatch) => {
  try{
    // Get voucher data request
    dispatch({
      type: VOUCHER_DATA_REQUEST
    })

    // Crete request method
    const method = "GET";

    // Create request headers
    const headers = {
      "Authorization": `Bearer ${auth.isAuthenticated().token}`,
    }

    // Create complete request
    let response = await fetch("/api/vouchers", {
      method: method,
      headers: headers,
    });

    // Get result as json
    let result = await response.json();

    // If there is no error, dispatch success
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

/**
 * Reset voucher interest count using the name of the voucher
 * @param voucherName
 * @returns {function(...[*]=)}
 */
const resetVoucherInterest = (voucherName) => async (dispatch) => {
  try{
    // Dispatch voucher request
    dispatch({
      type: VOUCHER_RESET_REQUEST
    })

    // Create request method
    const method = "POST";

    // Create request headers
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${auth.isAuthenticated().token}`,
    }

    // Create request body
    const data = {
      name: voucherName,
    }

    // Create complete request
    let response = await fetch("/api/vouchers/reset", {
      method: method,
      headers: headers,
      body:JSON.stringify(data)
    });

    // Get result as json
    let result = await response.json();

    // IF there is no error, dispatch success
    if(result.error == null){
      dispatch({
        type: VOUCHER_RESET_SUCCESS,
        payload: result
      })
    } else {
      dispatch({
        type: VOUCHER_RESET_FAIL,
        payload: result.error
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export {increaseVoucherClicks, getVouchers, resetVoucherInterest};