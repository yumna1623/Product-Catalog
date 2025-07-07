import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebookMessenger, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="brand">Aesop <span>Nature</span></h2>
          <p>Experience the essence of nature with our botanical skin care collection, crafted to rejuvenate your skin naturally.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/shop">Shop</a>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <a href="/hand">Hand and Body</a>
          <a href="#">Fragrance</a>
          <a href="#">Skin Care</a>
        </div>

        <div className="footer-section">
          <h4>Account</h4>
          <a href="#">Sign Up</a>
          <a href="#">Sign In</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookMessenger /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
