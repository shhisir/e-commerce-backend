const Joi = require("joi");
const Category = require("../Models/category.model");



  const categorySchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
  
  })
 
  const createCategory = async (req, res, next) => {
    console.log(req.body)
    try{
        const {error,value} = categorySchema.validate(req.body)     
        if (!error){
            await Category.create(value)

            res.status(200).send("category createed")
        }
        else 
        {
            throw new Error(error)
        }
    } catch(error){
console.log(error)
        next (error)
    }
}
  


const getCategories = async(req,res)=>{
    try{
        const data = await Category.find()
        res.status(201).send(data)
    } catch(error){
        next (error)
    }
}


module.exports = {
    createCategory,
    getCategories   
} 

