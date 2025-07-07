import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
            Aesop <span>Botanicals</span>
          </Link>
        </h1>
      </div>

      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/shop/hand-and-body">Hand and Body</Link>
        <Link to="/shop/fragrance">Fragrance</Link>
        <Link to="/shop/skin-care">Skin Care</Link>
      </div>

      <div className="navbar-right">
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/cart">Cart</Link>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
