const mongoose = require("mongoose");
const { ref } = require("process");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
  {
    product: {
      type: ObjectId,
      ref: "Product",
    },
    reviewedBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = userSchema;
