const  express = require('express')
const Auth = require('./user.route')
const router=express.Router()
const Product = require('./product.route')
const Order = require('./order.route')
const Category = require('./category.route')
const defaultRoutes=[
    {
        path:"/user",
        route:Auth
    },
    {
        path:"/product",
        route:Product
    },
    {
        path:"/order",
        route:Order
    },
    {
        path:"/category",
        route:Category
    },
    


]

defaultRoutes.map((el)=>{
    router.use(el.path,el.route)
})

module.exports=router