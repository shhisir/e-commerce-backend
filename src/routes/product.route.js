const express = require("express")
const { authenticate, isSeller } = require("../middlware/auth")




const router = express.Router()
router.route("/").get((req,res)=>{
    resizeBy.send(" all products")
})
.post(authenticate,isSeller,)
// router.route("/:id").get().delete().patch()



 module.exports = router

