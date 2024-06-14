const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    categoryImage: {
      type: String,
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true } // Corrected typo: should be "timestamps" instead of "timestamp"
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
