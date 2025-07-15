const express = require("express")
const { createUser , login, getOwnInfo } = require("../controller/user.controller")
const { authenticate } = require("../middlware/auth")


const router = express.Router()




router.post("/signup",createUser)



router.post("/login",login)
// router.get("/me",authenticate,getOwnInfo)
// ,

// router.route("user/:id").delete().patch()






 module.exports = router

