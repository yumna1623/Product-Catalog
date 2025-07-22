import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, clearCart, removeFromCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const shipping = subtotal > 200 ? 0 : subtotal * 0.2;
  const total = subtotal + tax + shipping;

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          🎉 <strong>Your order has been placed!</strong><br />
          Thank you for shopping with us.
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          🛒 Looks like you haven't added anything to your cart yet.
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-products">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={`http://localhost:5000${item.image}`} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-header">
                  <h4>{item.name}</h4>
                  <button className="delete-btn red" onClick={() => removeFromCart(item.id)}><FaTrash /></button>
                </div>
                <p>{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <p className="shipping-note">✅ Free shipping on orders over $200</p>
          <p className="return-policy">↩️ 30-day return policy</p>
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (5%): ${tax.toFixed(2)}</p>
          <p>Shipping: ${shipping.toFixed(2)}</p>
          <hr />
          <h4 className="total">Total: ${total.toFixed(2)}</h4>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
          <button onClick={() => window.location.href = "/shop"}>Continue Shopping</button>
          <button onClick={clearCart} style={{ backgroundColor: 'crimson', marginTop: '10px' }}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
