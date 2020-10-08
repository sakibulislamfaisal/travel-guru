import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Resources/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white fixed-top py-2 ">
      <div className="container header-part">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="travel guru logo" />
        </Link>

        <input
          type="text"
          name="name"
          className="form-control search"
          placeholder="Search"
        />
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link text"
              style={{
                textDecoration: "none",
                color: "black",
                padding: "20px",
                fontSize: "24px",
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/destination"
              className="nav-link text"
              style={{
                textDecoration: "none",
                color: "black",
                padding: "20px",
                fontSize: "24px",
              }}
            >
              Destination
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
