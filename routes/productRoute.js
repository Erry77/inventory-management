const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const { verifyToken, authorizeRoles } = require("../middleware/roleMiddleware");

// Protect all routes
router.use(verifyToken);

// Create product (admin only)
router.post(
  "/createProduct",
  authorizeRoles("admin"),
  productController.createProduct
);

// Get all products (any logged-in user)
router.get("/getProduct", productController.getProducts);

// Update product
router.put(
  "/updateProduct/:id",
  authorizeRoles("admin"),
  productController.updateProduct
);

// Delete product
router.delete(
  "/deleteProduct/:id",
  authorizeRoles("admin"),
  productController.deleteProduct
);

module.exports = router;