// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static("public"));

const products = [
  // hand-and-body
  {
    id: 1,
    name: "Body Scrub",
    category: "hand-and-body",
    price: "$25.00",
    image: "/HB1.avif",
  },
  {
    id: 2,
    name: "Coriander Seed Body Cleanser",
    category: "hand-and-body",
    price: "$30.00",
    image: "/HB2.avif",
  },
  {
    id: 3,
    name: "Geranium Leaf Body Scrub",
    category: "hand-and-body",
    price: "$18.00",
    image: "/HB3.avif",
  },
  {
    id: 4,
    name: " Body Balm",
    category: "hand-and-body",
    price: "$22.00",
    image: "/HB4.avif",
  },
  {
    id: 5,
    name: "Nurture Bar Soap",
    category: "hand-and-body",
    price: "$19.00",
    image: "/HB5.avif",
  },

  // Fragrance
  {
    id: 6,
    name: "Aurner Eau de Parfum",
    category: "Fragrance",
    price: "$45.00",
    image: "/F1.avif",
  },
  {
    id: 7,
    name: "Fragrance Anthology Volume I",
    category: "Fragrance",
    price: "$38.00",
    image: "/F2.avif",
  },
  {
    id: 8,
    name: "Fragrance Anthology Volume I",
    category: "Fragrance",
    price: "$50.00",
    image: "/F3.avif",
  },
  {
    id: 9,
    name: "Rōzu Eau de Parfum",
    category: "Fragrance",
    price: "$20.00",
    image: "/F4.avif",
  },
  {
    id: 10,
    name: "Musk Essence Drop",
    category: "Fragrance",
    price: "$35.00",
    image: "/F5.webp",
  },

  {
    id: 11,
    name: "Hydrating Face Mask",
    category: "skin-care ",
    price: "$28.00",
    image: "/skd1.png",
  },
  {
    id: 12,
    name: "Damascan Rose Facial Treatment",
    category: "skin-care ",
    price: "$33.00",
    image: "/skd3.avif",
  },

  // Skin Care - Oily Skin
  {
    id: 13,
    name: "Damascan Rose Facial Treatment",
    category: "skin-care",
    price: "$26.00",
    image: "/sko1.avif",
  },
  {
    id: 14,
    name: "Facial Polishing Pair",
    category: "skin-care",
    price: "$21.00",
    image: "/sko2.avif",
  },

  // Skin Care - Combination Skin
  {
    id: 16,
    name: "Mandarin Facial Hydrating Cream",
    category: "skin-care",
    price: "$29.00",
    image: "/skd2.avif",
  },
  {
    id: 15,
    name: "Parsley Seed Facial Cleanser",
    category: "skin-care",
    price: "$24.00",
    image: "/skc1.avif",
  },

  
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
