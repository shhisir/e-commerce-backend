const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
  },
  {
    timeStamp: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
module.exports =categorySchema ;
