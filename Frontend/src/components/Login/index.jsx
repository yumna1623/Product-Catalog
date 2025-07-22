import React, { useState } from "react";
import "./AuthForm.css"; // Import the CSS file

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="tab-buttons">
          <button
            onClick={() => setIsSignUp(false)}
            className={!isSignUp ? "tab active" : "tab"}
          >
            LogIn
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={isSignUp ? "tab active" : "tab"}
          >
            Sign Up
          </button>
        </div>

        <form className="auth-form">
          {isSignUp && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your name" />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="submit-btn">
            {isSignUp ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="toggle-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button className="toggle-link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "LogIn" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
