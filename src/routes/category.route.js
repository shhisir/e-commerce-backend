 const express = require("express")
 const { authenticate, isSeller } = require("../middlware/auth")
const { createCategory } = require("../controller/category.controller")
 
 
 
 
 const router = express.Router()
 router.route("/category").get((req,res)=>{
     resizeBy.send(" all products")
 })
 .post(authenticate,isSeller, createCategory)



 // router.route("/:id").get().delete().patch()
 
 
 
  module.exports = router
 
 