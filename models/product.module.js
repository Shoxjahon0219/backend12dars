const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: {
    type: Number,
    min: 0,
  },
  count: {
    type: Number,
    min: 0,
  },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = { Product };
