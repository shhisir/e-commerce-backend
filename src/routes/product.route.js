const express = require("express")
const { authenticate, isSeller } = require("../middlware/auth")

const{
    
    createProduct,getProducts,  
} = require("../controller/product.controller")
const router = express.Router()
.post (authenticate,isSeller,createProduct)


 module.exports = router

