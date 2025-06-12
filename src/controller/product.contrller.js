const Joi = require("joi");
const Product = require("../Models/product.model");

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string(),
  createdBy: Joi.string(),
  image: Joi.string().required,
});

const getProduct = async (req, res, next) => {
  try {
    let priceFrom = parseFloat(req.querry.priceFrom) || 0;
    let priceto = parseFloat(req.querry.priceto) || 999999;
    let perPage = parseInt(req.querry.perPage) || 5;
    let page = parseInt(req.querry.page);

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
    const product = await Product.find(productFilter)
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
  if (req.file) {
    req.body.image = req.file.path;
  }
  try {
    const { error, value } = productSchema.validate(req.body, {
      allowUnknown: true,
    });
    if (!error) {
      const product = await Product.create(value);
      res.status(201).send({ message: "product created   sucessfully" });
    } else {
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getProduct,
};
