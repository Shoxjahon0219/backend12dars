const express = require("express");
const { Product } = require("../models/product.module");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    let prods = await Product.find();
    res.json(prods);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

route.post("/", async (req, res) => {
  try {
    let newPrd = new Product(req.body);
    await newPrd.save();
    res.status(201).send(newPrd);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

route.patch("/:id", async (req, res) => {
  let body = req.body;
  let id = req.params.id;
  try {
    let upd = await Product.findByIdAndUpdate(id, body, { new: true });
    res.json(upd);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

route.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let del = await Product.findByIdAndDelete(id);
    res.json(del);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = route;
