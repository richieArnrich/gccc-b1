import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">My Ecommerce</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <a href="">Login</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
