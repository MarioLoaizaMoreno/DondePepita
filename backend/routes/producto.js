const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/producto");

// GET, POST, PUT, DELETE
router.post("/registerProduct", ProductController.registerProduct);
router.get("/listProduct", ProductController.listProduct);

module.exports = router;
