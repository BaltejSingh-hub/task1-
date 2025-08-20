require("dotenv").config();
const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT;
const jwt = require("jsonwebtoken");

const UserMiddleware = (req, res, next) => {
    try{    
            
            const token=req.headers['authorization']
            
            if(!token){
                return res.status(403).json({msg:"Access denied."})
            }
            const filter_token=token.split(" ")[1]
            const decoded=jwt.verify(filter_token,SECRET_KEY_JWT)
            req.user=decoded
            console.log("token",token)
            next()
    }catch(err){
            console.log(err)
            res.status(401).json({msg:"Invalid token"})
    }
};

module.exports = UserMiddleware;
