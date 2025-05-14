const express = require("express")
const { createUser ,getUser, login } = require("../controller/user.controller")


const router = express.Router()




router.post("/signup",createUser)



router.post("/login",login)
router.get("/",getUser)


// router.route("user/:id").delete().patch()






 module.exports = router

