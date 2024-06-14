const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { createProduct } = require("../controllers/product");
const multer = require("multer");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

// Configure multer for file uploads with custom storage settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      shortid.generate() + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productPictures", 10), // Adjust the field name and the max number of files
  createProduct
);

// Uncomment and use this if you need to get categories
// router.get("/product/getCategories", getCategories);

module.exports = router;
