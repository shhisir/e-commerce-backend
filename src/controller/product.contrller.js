const Joi = require("joi");
const Category = require("../Models/category.model");
const Product = require("../Models/product.model");
const mongoose = require("mongoose");

const path = require("path");

const productSchema = Joi.object({
  productName: Joi.string().required(),

  price: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string(),
  createdBy: Joi.string(),
  image: Joi.string().required(),
});
const updateSchema = Joi.object({
  productName: Joi.string(),
  price: Joi.string(),
  description: Joi.string(),
  category: Joi.string(),
  createdBy: Joi.string(),
  image: Joi.string(),
});
const getProducts = async (req, res, next) => {
  try {
    let sort = req.query.sort || "dateDesc";
    let priceFrom = parseFloat(req.query.priceFrom) || 0;
    let priceTo = parseFloat(req.query.priceTo) || 9999999999;
    let perPage = parseInt(req.query.perPage) || 5;
    let page = parseInt(req.query.page) || 1;

    let sortBy = {
      createdAt: -1,
    };

    if (sort == "priceAsc") {
      sortBy = { price: 1 };
    } else if (sort == "priceDesc") {
      sortBy = { price: -1 };
    } else if (sort == "titleAsc") {
      sortBy = { title: 1 };
    } else if (sort == "titleDesc") {
      sortBy = { title: -1 };
    }

    let productFilter = {
      name: new RegExp(req.query.search, "i"),

      $and: [{ price: { $gte: priceFrom } }, { price: { $lte: priceTo } }],
    };
    const product = await Product.find()
      .populate("category")
      .sort(sortBy)
      .skip((page - 1) * perPage)
      .limit(perPage)
      .populate("createdBy", { password: 0, role: 0 });
    res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
 

    try {
      const { error, value } = productSchema.validate(req.body, {
        allowUnknown: true,
      });

      console.log(value)

      if (!error) {
        await Product.create(value);
        res.status(200).send({ message: "Product created sucessfully" });
      } else {
        throw error;
      }
    } catch (err) {
      // req.files.map((el) => {
      //   deleteImage(el.filename)
      // });
      next(err);
    }
  }


const getSingleProduct = async (req, res, next) => {
  try {
    const product_id = req.params.id;

    const id = new mongoose.Types.ObjectId(product_id);
    const productDetails = await Product.findById(id);
    res.status(200).send(productDetails);
  } catch (err) {
    next(err);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const product_id = req.params.id;
    const id = new mongoose.Types.ObjectId(product_id);
    const productDetails = await Product.findByIdAndDelete(id);
    res.status(200).send({ message: "Product deleted successfully" });
  } catch (err) {
    next(err);
  }
};
const updateProduct = async (req, res, next) => {
  try {
    const product_id = req.params.id;
    const id = new mongoose.Types.ObjectId(product_id);

    const { error, value } = updateSchema.validate(req.body, {
      allowUnknown: true,
    });
    if (!error) {
      const updatePro = await Product.findByIdAndUpdate(id, value);
      console.log(updatePro);
      res.status(200).send(updatePro);
    } else {
      console.log(error);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
