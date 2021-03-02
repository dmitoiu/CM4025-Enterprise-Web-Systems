var User = require("../models/userModel");
var jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
}

const authenticateUser = async (req, res) => {
  try{
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({username});
    if(user && password.match(user.password)){
      res.json({
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      })
      res.status(200)
    } else {
        res.status(401).json({
          error: "Email or password is incorrect."
        })
      }
  } catch (e) {
    console.log(e);
  }
}

const getProfile = async (req, res) => {
  let user = await User.findById(req.user._id);
  if(user){
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin
    })
  } else {
    res.send(404);
    console.log("Customer not found.");
  }
  res.send("success");
}

module.exports = {authenticateUser, getProfile};
