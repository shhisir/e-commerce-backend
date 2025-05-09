const express = require("express")
const { createUser ,getUser } = require("../controller/user.controller")


const router = express.Router()




router.post("./signup",createUser)



router.post("/".get(getUser))
 


// router.route("user/:id").delete().patch()






 module.exports = router

