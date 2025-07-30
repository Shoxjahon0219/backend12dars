const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: {
    type: Number,
    min: 0,
  },
  count: {
    type: Number,
    min: 0,
  },
  image: String,
});

const Product = mongoose.model("product", ProductSchema);

module.exports = { Product };
