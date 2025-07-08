const { number } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
const ReviewSchema = mongoose.Schema(
  {
    product: {
      type: String,
      require: true,
    },
    reviewedBy: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = ReviewSchema;
