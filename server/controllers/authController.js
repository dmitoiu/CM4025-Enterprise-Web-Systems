var User = require("../models/userModel");
var jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
}

const logInUser = async (req, res) => {
  try{
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({username});
    if(user && (await user.comparePassword(password))){
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

const registerUser = async (req, res) => {
  try{
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const userExists = await User.findOne({
      $or: [
            {username: username},
            {email: email}
          ]
    });
    let error = "";
    if(userExists){
      if(userExists.username === username){
        error = "username ";
      }
      if(userExists.email === email){
        error += "email"
      }
      res.status(401).json({
        error: error
      });
      console.log("User exists already.");
    } else {
      const user = await User.create({
        name,
        username,
        email,
        password
      })
      if(user){
        res.status(201).json({
          _id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id)
        })
      } else {
        res.send(404);
        console.log("User not found.");
      }
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

module.exports = {logInUser, registerUser, getProfile};
