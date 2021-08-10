const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  code: String,
  description: String,
  date: String,
  dbStatus: Boolean,
});

const product = mongoose.model("product", productSchema);
module.exports = product;
