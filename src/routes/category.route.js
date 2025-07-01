 const express = require("express")
 const { authenticate, isSeller } = require("../middlware/auth")
const { createCategory , getCategories } = require("../controller/category.controller")
 
  const router = express.Router();
 router
  .route("/")
  .get(getCategories)
  .post(authenticate, isSeller, createCategory);
 

 
 
 
  module.exports = router
  
 
 