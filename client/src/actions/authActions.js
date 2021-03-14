// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (authActions.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing utilities
import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_REGISTER_FAIL, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS
} from "../constants/authConstants";
import auth from "../helpers/authHelper";

/**
 * Authentication Log In Post request
 * Purpose: Log in a user
 * @param formUsername
 * @param formPassword
 * @returns {function(...[*]=)}
 * Reference: https://github.com/bradtraversy/proshop_mern/blob/master/frontend/src/actions/userActions.js
 * Reference: Lab 6 Part 1 - http://campusmoodle.rgu.ac.uk/mod/resource/view.php?id=3853318
 * Reference: Lab 6 Part 2 - http://campusmoodle.rgu.ac.uk/mod/resource/view.php?id=3868900
 * Adapted using the above references
 */
const logIn = (formUsername, formPassword) => async (dispatch) => {
  try{
    // Create login request dispatch
    dispatch({
      type: AUTH_LOGIN_REQUEST
    })

    // Create request method
    const method = "POST";

    // Crete request headers
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    // Create request body
    const data = {
      username: formUsername,
      password: formPassword
    }

    // Create complete request
    let response = await fetch("/api/users/login", {
      method: method,
      headers: headers,
      body:JSON.stringify(data)
    });

    // Get response as json
    let result = await response.json();

    // If there is no error, user data is found and dispatch success
    if(result.error == null){
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: result
      })
      // Store user data in session store
      auth.authenticate(result);
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

/**
 * Authentication Register Post Request
 * Purpose: Registers a user
 * @param formName
 * @param formUsername
 * @param formEmail
 * @param formPassword
 * @returns {function(...[*]=)}
 * Reference: https://github.com/bradtraversy/proshop_mern/blob/master/frontend/src/actions/userActions.js
 * Reference: Lab 6 Part 1 - http://campusmoodle.rgu.ac.uk/mod/resource/view.php?id=3853318
 * Reference: Lab 6 Part 2 - http://campusmoodle.rgu.ac.uk/mod/resource/view.php?id=3868900
 * Adapted using the above references
 */
const register = (formName, formUsername, formEmail, formPassword) => async (dispatch) => {
  try{
    // Create register dispatch request
    dispatch({
      type: AUTH_REGISTER_REQUEST
    })

    // Create method of request
    const method = "POST";

    // Create request headers
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    // Create request body
    const data = {
      name: formName,
      username: formUsername,
      email: formEmail,
      password: formPassword
    }

    // Create complete request
    let response = await fetch("/api/users", {
      method: method,
      headers: headers,
      body:JSON.stringify(data)
    });

    // Get response as json
    let result = await response.json();

    // If there is no error, dispatch success
    if(result.error == null){
      dispatch({
        type: AUTH_REGISTER_SUCCESS,
        payload: result
      })
      // Store user data in session store
      auth.authenticate(result);
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

/**
 * Authentication Log out
 * Purpose: logs out the user
 * @returns {function(...[*]=)}
 */
const logOut = () => (dispatch) => {
  // Delete user data from session store
  auth.clearJWT();
  // Dispatch log out
  dispatch({type: AUTH_LOGOUT});
}

export {logIn, register, logOut};