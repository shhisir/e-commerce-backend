  const dotenv = require("dotenv")
  dotenv.config()

  const mongoose = require("mongoose")
  const app = require("./app")


    const port = process.env.PORT 


    mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("connected to db")
    return new Promise((resolve)=>{
      app.listen(port,() =>{
        console.log(`server is listing to port ${port}`)
        resolve()
      })

     
    })
    })
   

