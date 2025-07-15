const express = require("express");
const { authenticate, isSeller } = require("../middlware/auth");
const {
  createProduct,
  getProducts,
  updateProduct,
} = require("../controller/product.contrller");

const router = express.Router();

router.post("/", authenticate, isSeller, createProduct);
router.patch("/:id", authenticate, isSeller, updateProduct);
router.get("/", getProducts);




module.exports = router;
