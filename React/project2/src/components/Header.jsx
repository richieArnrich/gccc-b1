import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">My Ecommerce</div>
        <div className="nav-links">
          <a href="">Home</a>
          <a href="">Register</a>
          <a href="">Login</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
