  const haddleError = (err,req,res,next) => {
    console.log("this is error",err)

    res.status(err.status).send(err)
  }

  module.exports ={ 
  haddleError}