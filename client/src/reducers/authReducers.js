// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (authReducers.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing constants
import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT, AUTH_REGISTER_FAIL,
  AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS
} from "../constants/authConstants";

/**
 * Log in Reducer
 * @param state
 * @param action
 * @returns {{loading: boolean}|{}|{loading: boolean, error: *}|{userInfo: *, loading: boolean}}
 */
const authLogInReducer = (state = {}, action) => {
  if(action.type.match(AUTH_LOGIN_REQUEST)) {
    return {loading: true};
  } else if(action.type.match(AUTH_LOGIN_SUCCESS)) {
    return {loading: false, userInfo: action.payload}
  } else if(action.type.match(AUTH_LOGIN_FAIL)) {
    return {loading: false, error: action.payload}
  } else if(action.type.match(AUTH_LOGOUT)) {
    return {}
  } else {
    return state;
  }
}

/**
 * Register Reducer
 * @param state
 * @param action
 * @returns {{loading: boolean}|{}|{loading: boolean, error: *}|{userInfo: *, loading: boolean}}
 */
const authRegisterReducer = (state = {}, action) => {
  if(action.type.match(AUTH_REGISTER_REQUEST)) {
    return {loading: true};
  } else if(action.type.match(AUTH_REGISTER_SUCCESS)) {
    return {loading: false, userInfo: action.payload}
  } else if(action.type.match(AUTH_REGISTER_FAIL)) {
    return {loading: false, error: action.payload}
  } else if(action.type.match(AUTH_LOGOUT)) {
    return {}
  } else {
    return state;
  }
}

export {authLogInReducer, authRegisterReducer};