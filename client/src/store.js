import {createStore} from "redux";
import {combineReducers} from "redux";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authLogInReducer, authRegisterReducer} from "./reducers/authReducers";

const getUserInfoStorage = localStorage.getItem("authDetails") ?
    JSON.parse(localStorage.getItem("authDetails"))
    : null;

const initialState = {
  authLogIn: {userInfo: getUserInfoStorage}
}

const reducers = combineReducers({
  authLogIn: authLogInReducer,
  authRegister: authRegisterReducer
});
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
