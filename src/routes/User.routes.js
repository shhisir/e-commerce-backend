const express = require("express")
const { createUser ,getUser, login, getOwnInfo } = require("../controller/user.controller")
const { authenticate } = require("../middlware/auth")


const router = express.Router()




router.post("/signup",createUser)



router.route("/login",login)
router.route("/me").get(authenticate,getOwnInfo)


// router.route("user/:id").delete().patch()






 module.exports = router

