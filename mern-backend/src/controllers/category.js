const Category = require("../models/category");
const slugify = require("slugify");

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => !cat.parentId);
  } else {
    category = categories.filter((cat) => cat.parentId === parentId);
  }
  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      children: createCategories(categories, cate._id),
    });
  }
  return categoryList;
}

exports.addCategory = async (req, res) => {
  try {
    const { name, parentId } = req.body;
    const slug = slugify(name);
    const categoryObj = {
      name,
      slug,
      parentId,
    };

    if (req.file) {
      categoryObj.categoryImage = `${process.env.API}/public/${req.file.filename}`;
    }

    const category = new Category(categoryObj);
    const savedCategory = await category.save();
    res.status(201).json({ category: savedCategory });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (!categories.length) {
      return res.status(404).json({ error: "No categories found" });
    }
    const categoryList = createCategories(categories);
    res.status(200).json({ categoryList });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
