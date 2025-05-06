  const haddleError = (err,req,res,nexr) => {
    console.log("this is error",err)

    res.status(err.status).send(err)
  }

  module.exports ={ 
  haddleError}