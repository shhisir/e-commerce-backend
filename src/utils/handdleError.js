const { model } = require("mongoose");

const haddleError = (err, req, res, next) => {

  if (err.name == "Validator Error") {
      res.status(400).send(err);
  }else{
    console.log(err)
    res.status(500).send("internal server error",err)
  }

};

module.exports = {
  haddleError,
};
