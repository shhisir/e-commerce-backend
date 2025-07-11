const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      require: true,

      validate: {
        validator: async (value) => {
          let matached = await mongoose.models.User.findOne({ email: value });
          if (matached) {
            return false;
          }
        },
        message: "email already used ",
      },
    },

    role: {
      type: String,
      enum: ["buyer", "seller"],
    },

    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
