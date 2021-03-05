import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_REGISTER_FAIL, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS
} from "../constants/authConstants";
import auth from "../helpers/authHelper";

const logIn = (formUsername, formPassword) => async (dispatch) => {
  try{
    dispatch({
      type: AUTH_LOGIN_REQUEST
    })

    const method = "POST";

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const data = {
      username: formUsername,
      password: formPassword
    }

    let response = await fetch("http://127.0.0.1:5000/api/users/login", {
      method: method,
      headers: headers,
      body:JSON.stringify(data)
    });

    let result = await response.json();

    if(result.error == null){
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: result
      })
      auth.authenticate(result.token);
    } else {
      dispatch({
        type: AUTH_LOGIN_FAIL,
        payload: result.error
      })
    }

  } catch (error) {
    console.log(error);
  }
}

const register = (formName, formUsername, formEmail, formPassword) => async (dispatch) => {
  try{
    dispatch({
      type: AUTH_REGISTER_REQUEST
    })

    const method = "POST";

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    const data = {
      name: formName,
      username: formUsername,
      email: formEmail,
      password: formPassword
    }

    let response = await fetch("http://127.0.0.1:5000/api/users", {
      method: method,
      headers: headers,
      body:JSON.stringify(data)
    });

    let result = await response.json();

    if(result.error == null){
      dispatch({
        type: AUTH_REGISTER_SUCCESS,
        payload: result
      })
      auth.authenticate(result.token);
    } else {
      dispatch({
        type: AUTH_REGISTER_FAIL,
        payload: result.error
      })
    }

  } catch (error) {
    console.log(error);
  }
}

const logOut = () => (dispatch) => {
  auth.clearJWT();
  dispatch({type: AUTH_LOGOUT});
}

export {logIn, register, logOut};