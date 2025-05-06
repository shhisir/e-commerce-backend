 const mongoose = require("mongoose")

 const userSchema = mongoose.Schema({
     username :{
        type : String,
        required : true,
         },
        email :{
            type : String,
        required : true
    },
    role :{
        type : String,
        enum : ["buyer","seller"],
        validate:(value)=>{
            return value.tolowercase()
        }
    },
    password : {
        type : String,
        required : true
    }
    },
    {
        timestamps : true
    }
)

const User = moongoose.model("User",userSchema)
module.exports = User