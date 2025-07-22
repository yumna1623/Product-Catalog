import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products", err));
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "white", minHeight: "100vh" }}>
      <h1>Admin Dashboard</h1>
      <h3>Total Products: {products.length}</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: "1px solid #ccc", padding: "16px" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
