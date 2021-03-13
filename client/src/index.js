// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (index.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";
import "@material-ui/core";
import "@material-ui/icons";
import "fontsource-roboto";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
