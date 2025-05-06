 const express = require("express")

 const router = express.Router()

router.route("/user")
.get((req,res)=>{
    res.send("get all users")
})
.post((req,res)=>{
    res.send("add all user")
})

// router.route("user/:id").delete().patch()

// router.route("/:id")




 module.exports = router

