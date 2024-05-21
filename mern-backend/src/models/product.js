const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
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
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String, // Corrected typo: should be "description"
      required: true,
      trim: true,
    },
    offer: {
      type: Number,
    },
    productPictures: [
      {
        img: { type: String },
      },
    ],
    reviews: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId, // Corrected typo: should be "ObjectId"
          ref: "User",
        },
        review: String,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId, // Corrected typo: should be "ObjectId"
      ref: "Category",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // Corrected typo: should be "ObjectId"
      ref: "User",
      required: true,
    },
    updatedAt: Date,
  },
  { timestamps: true } // Corrected typo: should be "timestamps" instead of "timestamp"
);

const Product = mongoose.model("Product", productSchema); // Corrected model name

module.exports = Product; // Corrected export name
