const express = require("express");
const { authenticate, isSeller } = require("../middlware/auth");
const {
  createProduct,
  getProducts,
} = require("../controller/product.contrller");

const router = express.Router();

router.post("/", authenticate, isSeller, createProduct);
router.get("/", getProducts);


module.exports = router;
