  const express = require("express")
 const { authenticate, isBuyer,  } = require("../middlware/auth")
const { createOrder } = require("../controller/order.controller")
 
 
 const router = express.Router()
 
 router.post("/review",authenticate,isBuyer,createOrder)
 
 
  module.exports = router
 
 