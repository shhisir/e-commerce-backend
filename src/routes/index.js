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
      route:Product 
  },
  {
    path :"/category",
    route:Category
}
  ]

  defaultRoutes.map((el)=>{
    router.use(el.path,el.route)
  })

  module.exports = router   