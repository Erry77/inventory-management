const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// GET all products
router.get("/", productController.getProducts);

// POST create product
router.post("/", productController.createProduct);

// PUT update product
router.put("/:id", productController.updateProduct);

// DELETE product
router.delete("/:id", productController.deleteProduct);

module.exports = router;