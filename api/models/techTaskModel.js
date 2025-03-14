const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TechTaskSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    subdomain: {
      type: [String],
      required: true,
    },
    question1: {
      type: [String],
      validate: {
        validator: function (value) {
          return value.every((item) => {
            if (item === null) return true;
            return item.trim().split(/\s+/).length <= 2000;
          });
        },
        message: "Maximum word limit exceeded (2000 words).",
      },
      required: true,
    },
    question2: {
      type: [String],
      validate: {
        validator: function (value) {
          return value.every((item) => {
            if (item === null) return true;
            return item.trim().split(/\s+/).length <= 2000;
          });
        },
        message: "Maximum word limit exceeded (2000 words).",
      },
      required: true,
    },
    question3: {
      type: [String],
      validate: {
        validator: function (value) {
          return value.every((item) => {
            if (item === null) return true;
            return item.trim().split(/\s+/).length <= 2000;
          });
        },
        message: "Maximum word limit exceeded (2000 words).",
      },
      required: true,
    },
    question4: {
      type: [String],
      validate: {
        validator: function (value) {
          return value.every((item) => {
            if (item === null) return true;
            return item.trim().split(/\s+/).length <= 2000;
          });
        },
        message: "Maximum word limit exceeded (2000 words).",
      },
      required: true,
    },
    question5:{
      type: [String],
      validate: {
        validator: function (value) {
          return value.every((item) => {
            if (item === null) return true;
            return item.trim().split(/\s+/).length <= 2000;
          });
        },
        message: "Maximum word limit exceeded (2000 words).",
      },
      required: true,
    },

    isDone: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

  module.exports = mongoose.model("TechTask", TechTaskSchema);
