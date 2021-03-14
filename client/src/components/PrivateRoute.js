// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (PrivateRoute.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React from 'react';
import auth from "../helpers/authHelper";
import { Route, Redirect } from 'react-router-dom'

/**
 * Private Route towards a specific component
 * Purpose: Restricts access to a specific route
 * @param Component
 * @param rest
 * @returns {*}
 * Reference: Lab 6 Part 1 - http://campusmoodle.rgu.ac.uk/mod/resource/view.php?id=3853318
 * Reference: Lab 6 Part 2 - http://campusmoodle.rgu.ac.uk/mod/resource/view.php?id=3868900
 * @constructor
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
              pathname: '/login',
            }}/>
        )
    )}/>
)

export default PrivateRoute;