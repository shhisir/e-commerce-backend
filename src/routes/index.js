const Auth = require("./User.routes")
const Product = require("./product.route")
const Category = require("./category.route")
const express = require("express")
const { required } = require("joi")
const Order = require("./order.route")
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
},
 { path:"/order",
  route : Order
}
]

  defaultRoutes.map((el)=>{
    router.use(el.path,el.route)
  })

  module.exports = router   