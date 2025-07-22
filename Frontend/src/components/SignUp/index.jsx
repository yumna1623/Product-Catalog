import React, { useState } from "react";
import "./AuthForm.css"; // Import the CSS file

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle sign up
      console.log("Sign Up:", formData);
    } else {
      // Handle login
      console.log("Login:", {
        email: formData.email,
        password: formData.password,
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="tab-buttons">
          <button
            onClick={() => setIsSignUp(false)}
            className={!isSignUp ? "tab active" : "tab"}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={isSignUp ? "tab active" : "tab"}
          >
            Sign Up
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {isSignUp ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="toggle-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            className="toggle-link"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
