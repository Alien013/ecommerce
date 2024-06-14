const express = require("express");
const { addCategory, getCategories } = require("../controllers/category");
const { requireSignin, adminMiddleware } = require("../common-middleware");
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
  "/category/create",
  requireSignin,
  adminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/category/getCategories", getCategories);

module.exports = router;
