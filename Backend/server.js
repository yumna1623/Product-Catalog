// server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Product from "./models/Product.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ecommerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// Product data (optional: move this to a separate file)
const products = [
  { id: 1, name: "Body Scrub", category: "hand-and-body", price: "$25.00", image: "/HB1.avif" },
  { id: 2, name: "Coriander Seed Body Cleanser", category: "hand-and-body", price: "$30.00", image: "/HB2.avif" },
  { id: 3, name: "Geranium Leaf Body Scrub", category: "hand-and-body", price: "$18.00", image: "/HB3.avif" },
  { id: 4, name: "Body Balm", category: "hand-and-body", price: "$22.00", image: "/HB4.avif" },
  { id: 5, name: "Nurture Bar Soap", category: "hand-and-body", price: "$19.00", image: "/HB5.avif" },
  { id: 6, name: "Aurner Eau de Parfum", category: "Fragrance", price: "$45.00", image: "/F1.avif" },
  { id: 7, name: "Fragrance Anthology Volume I", category: "Fragrance", price: "$38.00", image: "/F2.avif" },
  { id: 8, name: "Fragrance Anthology Volume I", category: "Fragrance", price: "$50.00", image: "/F3.avif" },
  { id: 9, name: "Rōzu Eau de Parfum", category: "Fragrance", price: "$20.00", image: "/F4.avif" },
  { id: 10, name: "Musk Essence Drop", category: "Fragrance", price: "$35.00", image: "/F5.webp" },
  { id: 11, name: "Hydrating Face Mask", category: "skin-care", price: "$28.00", image: "/skd1.png" },
  { id: 12, name: "Damascan Rose Facial Treatment", category: "skin-care", price: "$33.00", image: "/skd3.avif" },
  { id: 13, name: "Damascan Rose Facial Treatment", category: "skin-care", price: "$26.00", image: "/sko1.avif" },
  { id: 14, name: "Facial Polishing Pair", category: "skin-care", price: "$21.00", image: "/sko2.avif" },
  { id: 15, name: "Parsley Seed Facial Cleanser", category: "skin-care", price: "$24.00", image: "/skc1.avif" },
  { id: 16, name: "Mandarin Facial Hydrating Cream", category: "skin-care", price: "$29.00", image: "/skd2.avif" },
];

// Route to seed products (run once)
// app.post("/api/seed-products", async (req, res) => {
//   try {
//     await Product.deleteMany(); // Clear existing
//     await Product.insertMany(products);
//     res.status(201).json({ message: "Products seeded!" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Get all products
// GET all hardcoded products without MongoDB
app.get("/api/products", (req, res) => {
  res.json(products);
});

// app.get("/api/products", async (req, res) => {
//   try {
//     const allProducts = await Product.find();
//     res.json(allProducts);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
