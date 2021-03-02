let jwt = require("jsonwebtoken");
let User = require("../models/userModel");

const protect = async (req, res, next) => {
  let token;
  let decoded;
  let user;
  let authorization = req.headers.authorization;
  if(authorization && authorization.startsWith("Active")){
    try{
      token = authorization.split(" ")[1];
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      user = await User.findById(decoded.id).select("-password");
      req.user = user;
      console.log(decoded);
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

module.exports = protect;