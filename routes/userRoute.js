const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Create user
router.post("/createUser", userController.createUser);

// Login user
router.post("/login", userController.login);

module.exports = router;