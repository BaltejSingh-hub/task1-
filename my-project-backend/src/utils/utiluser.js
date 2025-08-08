const jwt = require('jsonwebtoken');


exports.GenerateToke =async (userId,secretKey)=>{
    const token=jwt.sign(userId,secretKey)
    return token
}

exports.ConvertEmailToLowercase=(email)=>{
    const lowercasedEmail=email.toLowerCase()
    return lowercasedEmail
}
