const Joi = require("joi");


  const CategorySchema  =  require("../Models/category.model")

  const categorySchema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
  
  })
 
  const createCategory = async (req, res, next) => {
    try{
        const {error,value} = categorySchema.validate(req.body)     
        if (!error){
            await CategorySchema.create(value)
            res.status
        }
    } catch(error){
        next (error)
    }
}
  


const getCategories = async()=>{
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

