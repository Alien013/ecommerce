const Product = require("../models/product");
const slugify = require("slugify");

exports.createProduct = async (req, res) => {
  try {
    const { name, price, quantity, description, category } = req.body;
    const slug = slugify(name);
    let productPictures = [];

    console.log("ahdkjfadfhkadkfa", req.files);

    if (req.files && req.files.length > 0) {
      productPictures = req.files.map((file) => {
        return { img: file.filename };
      });
    }

    // Creating a new product instance
    const product = new Product({
      name,
      slug,
      price,
      quantity,
      description,
      category,
      createdBy: req.user._id,
      productPictures,
    });

    // Saving the product to the database
    const savedProduct = await product.save();
    res.status(201).json({ product: savedProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
