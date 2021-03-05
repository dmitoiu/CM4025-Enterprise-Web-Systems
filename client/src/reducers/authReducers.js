import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT, AUTH_REGISTER_FAIL,
  AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS
} from "../constants/authConstants";

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