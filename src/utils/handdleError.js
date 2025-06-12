  const { model } = require("mongoose")
  
  const haddleError = (err,req,res,next) => {
    console.log(err.errors)
    if (err.name == "Validator Error"){

    }
    res.send(400).send(

    )
   
  }

  module.exports = { 
  haddleError 

}

 