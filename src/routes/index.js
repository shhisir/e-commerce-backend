const Auth = require("./User.routes")
const Product = require("./product.route")
const Category = require("./category.route")  
const express = require("express")
const router = express.Router()
 

const defaultRoutes = [
    {
        path :"/user",
        route:Auth 
    },
    {
      path :"/product",
      route:product 
  },
  {
    path :"/category",
    route:this.call 
}
  ]

  defaultRoutes.map((el)=>{
    router.use(el.path,el.route)
  })

  module.exports = router   