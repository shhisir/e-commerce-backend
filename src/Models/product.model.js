const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  {
    timeStamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

