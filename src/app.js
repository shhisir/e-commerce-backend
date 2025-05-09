
const port = process.env.PORT 
const router = require("./routes/index")
const dotenv = require("dotenv")    
dotenv.config()
const express = require("express")
const{haddleError} = require("./utils/handdleError")
const app = express()
app.use(express.json()) 

app.use((req,res)=>{
    res.send("server is listening")
})


app.use(express.json())
app.use("/api/v1",router)

app.use(haddleError)


module.exports=app