const jwt = require("jsonwebtoken")

const VerifyAuthentication = async(req,res,next)=>{
    if(!req?.cookies?.jwt) return res.status(403).json({message: "cookie not present"})
    const authHeaders = req.headers.authorization
    if(!authHeaders) return res.status(401).json({message: "authentication string not found"})
    const authToken = authHeaders.split(" ")[1]
    jwt.verify(authToken,process.env.ACCESS_JWT_SECRET,(err,payload)=>{
        if(err) return res.status(403).json({message: "authToken is invalide"})
    })
    next()
}

module.exports = VerifyAuthentication