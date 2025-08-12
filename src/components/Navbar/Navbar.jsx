import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import menu_icon from "../Assets/menu_icon.png";
import close_icon from "../Assets/close_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenuOpen = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-logo">
          {/* <img src={logo} alt="" /> */}
          <p> Logo</p>
        </div>

        <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li
            onClick={() => {
              setMenu("home");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("categories");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/categories" style={{ textDecoration: "none" }}>
              Categories
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("work");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/work" style={{ textDecoration: "none" }}>
              How it work
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("pricing");
              setMobileMenuOpen(false);
            }}
          >
            <Link to="/pricing" style={{ textDecoration: "none" }}>
              Pricing
            </Link>
          </li>
        </ul>

        <div className="nav-login-signup">
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
          <Link to="/signup">
            {" "}
            <button>Signup</button>
          </Link>
          <img
            src={mobileMenuOpen ? close_icon : menu_icon}
            alt="menu"
            className="nav-menu-toggle"
            onClick={toggleMobileMenuOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
