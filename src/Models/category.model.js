 const mongoose=require("mongoose")   
 const CategorySchema=mongoose.Schema({
     tittle:{
         type:String,
         require:true
     }
 },{
     timeStamp:true
    }
 
 )
 
 
 const User=mongoose.model("Category",CategorySchema)


 
 module.exports= CategorySchema
 