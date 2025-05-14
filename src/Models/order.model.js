  const mongoose=require("mongoose")
  
  const Schema =mongoose.Schema
  const ObjectId=Schema.Types.ObjectId    
  const orderSchema=mongoose.Schema({
      product:{
          type:String,
          require:true
      },

      quantity:{
          type:String,
          required:true
      },
      orderby:{
          type:String,
         }
  },{
      timeStamp:true
  }
  
  )
  
  
  const Order=mongoose.model("Order",orderSchema)
  
  
  
  module.exports =  Order
  