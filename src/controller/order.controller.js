const Joi = require("joi");
const Order = require("../Models/order.model");

const OrderSchema = Joi.object({
  product: Joi.string().required(),
  quantity: Joi.string().required(),
  OrderedBy: Joi.string().required(),
});
const createOrder = async (req, res, next) => {
  try {
    const { error, value } = OrderSchema.validate(req.body, {
      allowUnknown: true,
    });
    if (error) {
      throw new Error(error);

      await Order.create(value);
      res.status(201).send({ message: "Order  created sucessfully" });
    } else {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder
};
