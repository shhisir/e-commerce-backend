const jwt = require("jsonwebtoken")
const {SELLER ,BUYER} = require("../constants")

const authenticate = (req, res, next) => {
    const token = req.header?.Authorization?.split(" ")[1] || null
 
    if (!token) {
        return res.status(401).send({ message: "please authenticate" })
    }

    const user = token.verify(token, process.env.JWT_SECRET)
    res.user = user
    
    next()
}

const isSeller=(req,res,next)=>{
if (req.user.role == SELLER)
    {
    next()
} else{
    res.send({message:"forbidden"})
}
}


const isBuyer=(req,res,next)=>{
    if (req.user.role == BUYER)  {
        next()
    } else{
        res.send({message:"forbidden"})
    }
    }




module.exports ={ 
    authenticate,
    isSeller,
    isBuyer
}



