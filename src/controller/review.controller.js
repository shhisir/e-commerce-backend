const Joi = require("joi");
const Product = require("../Models/review.model");

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string(),
  createdBy: Joi.string(),
});
