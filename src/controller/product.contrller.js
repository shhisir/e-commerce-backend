  const Joi = require("joi")
const Product = require("../Models/product.model")

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string(),
    createdBy: Joi.string(),
   
})

const createProduct = async (req, res, next) => {
    try{

        const{error,value}=productSchema.validate(req.body,{
            allowUnknown:true

        })
        if (error) {
            throw new Error(error)
        
        const product = await Product.create(value)
        res.status(201).send({message:"product created sucessfully"})
    } else{
        next(error)
    }
    }catch (error) {
        next(error)
    }
}    

const getProduct = async(req,res,next)=>{
try{const product = await Product.find().populalte("category").populate("createdBy",{password:0})
res.status(200).send(product)

} catch(error){
    next (error)
}
}
   

module.exports = {
    createProduct,
    getProduct  
}