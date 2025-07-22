import express from 'express' 
const router = express.Router();
import Product from "../models/Product"

// Add a new product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  // try {
  //   const products = await Product.find();
  //   res.json(products);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
    res.json(products); // ✅ Return the hardcoded array

});

module.exports = router;
