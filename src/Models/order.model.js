const { required } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const orderSchema = mongoose.Schema(
  {
    product: {
      type: ObjectId,
      require: true,
      ref: "Product",
    },
    quantity: {
      type: Number,
      required: true,
    },
    OrderedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  {
    timeStamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
