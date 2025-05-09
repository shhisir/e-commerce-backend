const express = require("express")
const { createUser } = require("../controller/user.controller")
const {createUser,login } = require("../controller/user.controller")
const router = express.Router()




router.post("./signup",createUser)



router.post("/login",(req,res) => {
    res.send()
})



// router.route("user/:id").delete().patch()






 module.exports = router

