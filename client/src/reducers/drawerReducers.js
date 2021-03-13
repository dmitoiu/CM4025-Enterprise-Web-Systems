// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (drawerReducers.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing constants
import {DRAWER_OPEN, DRAWER_CLOSE} from "../constants/drawerConstants";

/**
 * Drawer Reducer
 * @param state
 * @param action
 * @returns {{drawerOpen: boolean}|{}}
 */
const drawerReducer = (state = {}, action) => {
  if(action.type.match(DRAWER_OPEN)) {
    return {drawerOpen: true};
  } else if(action.type.match(DRAWER_CLOSE)) {
    return {drawerOpen: false};
  } else {
    return state;
  }
}

export {drawerReducer}
