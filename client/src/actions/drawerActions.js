// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (drawerActions.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import {DRAWER_OPEN, DRAWER_CLOSE} from "../constants/drawerConstants";

const selectDrawerOpen = (value) => async (dispatch) => {
  try{
    // Open Drawer dispatch
    dispatch({
      type: DRAWER_OPEN,
      value
    })
  } catch (error) {
    console.log(error);
  }
}

const selectDrawerClose = (value) => async (dispatch) => {
  try{
    // Close drawer dispatch
    dispatch({
      type: DRAWER_CLOSE,
      value
    })
  } catch (error) {
    console.log(error);
  }
}

export {selectDrawerOpen, selectDrawerClose};