// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (userModel.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing libraries and utilities
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

// Create user schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
}, {
  timestamps: true
});

/**
 * Compare given password with hashed password
 * @param password
 * @returns {Promise<boolean>}
 */
userSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password);
}

/**
 * Hash the user password
 */
userSchema.pre("save", async function(next){
  if(!this.isModified("password")){
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

// Create User model
const User = mongoose.model("User", userSchema);

module.exports = User;