const express = require("express")
const { authenticate, isSeller } = require("../middlware/auth")
const { createProduct } = require("../controller/product.contrller")


const router = express.Router()

router.post("/product",authenticate,isSeller,createProduct)


 module.exports = router

