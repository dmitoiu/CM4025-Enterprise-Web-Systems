// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (store.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import {createStore} from "redux";
import {combineReducers} from "redux";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authLogInReducer, authRegisterReducer} from "./reducers/authReducers";
import {voucherReducer, voucherResetReducer} from "./reducers/voucherReducers";
import {voucherDataReducer} from "./reducers/voucherReducers";
import {drawerReducer} from "./reducers/drawerReducers";

// Get user information
const getUserInfoStorage = sessionStorage.getItem("authDetails") ?
    JSON.parse(sessionStorage.getItem("authDetails"))
    : null;

// Create Initial state
const initialState = {
  authLogIn: {userInfo: getUserInfoStorage},
  drawerOpen: false
}

// Create reducers
const reducers = combineReducers({
  authLogIn: authLogInReducer,
  authRegister: authRegisterReducer,
  voucher: voucherReducer,
  voucherData: voucherDataReducer,
  voucherReset: voucherResetReducer,
  drawerOpen: drawerReducer
});

// Create store using reducers and initial state
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
