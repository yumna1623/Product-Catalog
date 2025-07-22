import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {products.map((product) => (
            <div key={product._id} style={{ border: "1px solid #ccc", padding: "16px" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>Price: ${product.price}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
