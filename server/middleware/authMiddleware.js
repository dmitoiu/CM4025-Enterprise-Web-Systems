// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (authMiddleware.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing libraries and utilities
let jwt = require("jsonwebtoken");
let User = require("../models/userModel");

/**
 * Verify user authorization based on the user token
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 * Author Brad Traversy
 * Reference: https://github.com/bradtraversy/proshop_mern/blob/master/backend/middleware/authMiddleware.js
 * Adapted from the reference above
 */
const protect = async (req, res, next) => {
  // Declare variables
  let token;
  let decoded;
  let user;
  // Get Authorization token from request headers
  let authorization = req.headers.authorization;
  // If the request starts with "Bearer", continue...
  if(authorization && authorization.startsWith("Bearer")){
    try{
      // Split the data by space and get token at position 1
      token = authorization.split(" ")[1];
      // Verify the token using the secret string
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get the user data, except the password
      user = await User.findById(decoded.id).select("-password");
      // Assign the user to req.user
      req.user = user;
      next();
    } catch (e) {
      res.send(401);
      console.log(e);
    }
  } else {
    res.send(401);
    console.log("Token not found.");
  }
}

/**
 * Verify if the user is an admin
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 * Author Brad Traversy
 * Reference: https://github.com/bradtraversy/proshop_mern/blob/master/backend/middleware/authMiddleware.js
 * Code used from the reference mentioned above
 */
const admin = async (req, res, next) => {
  try{
    // If the request presents am user and it is an admin, continue...
    if(req.user && req.user.isAdmin){
      // Continue...
      next();
    } else {
      res.send(401);
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = {protect, admin};