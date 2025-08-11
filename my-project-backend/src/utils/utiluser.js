const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.GenerateToke = async (userId, secretKey) => {
  const token = jwt.sign(userId, secretKey);
  return token;
};

exports.ConvertEmailToLowercase = (email) => {
  const lowercasedEmail = email.toLowerCase();
  return lowercasedEmail;
};


// First code written for middleware

// exports.UserAuthMiddleware = async (req, res, err, next) => {
//   try {

//     console.log("This is the middleware being accessed");
//   } catch (err) {
//     console.log(err);
//   }

//   // console.log("This is the middleware being accessed")
//   // const header=req.headers[Authorization]
//   // console.log("This is the middleware being accessed", header)

//   next();
// };
