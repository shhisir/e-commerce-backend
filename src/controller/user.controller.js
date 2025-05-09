const Joi = require('joi')
const user = require("../Models/User.model")    
const bcryptjs = require("bcryptjs")
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
dotenv.config()


const schema = Joi.object({
    username: Joi.string() 
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .required(),


    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}
     })
})
    const loginSchema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().required()
    })


const createUser = async (req, res, next) => {
    try {
      const data = req.body;
      const { error, value } = schema.validate(data, {
        allowUnknown: true,
      });
      if (error) {
        throw new Error(error);
  
  
      }
      const password=value.password
      delete value.password

      const salt = await bcrypt.genSalt(10)
      const hashedpassword = await bcrypt.hash(password, salt)

      const user = await user.create({ ...value, password: hashedpassword })
      res.status(201).send("sighned successfully")
    } catch (error){
        next (error)

    }
}

const login = async (req, res, next) => {
    try{
        const {error,value} = loginSchema.validate(req.body)
    if (!error,value) {
        let user = await user.findOne({email:value.email})
        if  (!user){
            return res.status(403).send({message:"Wrong Credential"})
        }
   const check = await bcrypt.compare(value.password,user.password)
   if (!check) {
        return res.status(403).send({message:"Wrong Credential"})
    }

    user = {...user.toObject()}
    delete user.password


    let token = jwt.sign(user,process.env.JWT_SECRET)
    console.log(token)
    res.status(200).send({token})
    }

} catch (error) {
        next(error)
    }   
}


const getUser = async() =>{
    try{
        const data = await user.find()
        res.status(201).send(user.reverse())

        
    }catch(err){
        next(err)
    }
}



module.exports = {
    createUser,
    login,
    getUser

}