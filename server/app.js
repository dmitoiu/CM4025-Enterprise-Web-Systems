// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (app.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing libraries and utilities
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require("dotenv");

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

dotenv.config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var discountsRouter = require('./routes/vouchers');

var app = express();

app.use(allowCrossDomain);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/users', usersRouter);
app.use("/api/vouchers", discountsRouter);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(path.resolve(), "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(path.resolve(), "client", "build", "index.html"))
  })
} else {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/', indexRouter);
}

module.exports = app;
