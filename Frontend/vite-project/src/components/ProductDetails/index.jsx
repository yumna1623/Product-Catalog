import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((p) => p.id === Number(id));
        setProduct(selected);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-page">
      <div className="product-details-left">
        <img src={`http://localhost:5000${product.image}`} alt={product.name} />
      </div>
      <div className="product-details-right">
        <h2>{product.name}</h2>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Price:</strong> {product.price}
        </p>
        <p>
          <strong>Key Ingredients:</strong> Aloe Vera, Vitamin E
        </p>
        <p>
          <strong>Benefits:</strong> Hydration, Glow, Softening
        </p>
        <p>
          <strong>Total Buys:</strong> 1200+
        </p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>{" "}
      </div>
    </div>
  );
};

export default ProductDetails;
