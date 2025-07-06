import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={`http://localhost:5000${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-price">{product.price}</p>
      <div className="product-card-buttons">
        <button
          className="view-details-btn"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View Details
        </button>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)} // assuming you pass this prop
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
