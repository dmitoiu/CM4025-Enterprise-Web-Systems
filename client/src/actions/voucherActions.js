import {VOUCHER_FAIL, VOUCHER_REQUEST, VOUCHER_SUCCESS} from "../constants/voucherConstants";

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

    let response = await fetch("/api/vouchers", {
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

export {increaseVoucherClicks};