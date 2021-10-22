import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="d-flex justify-content-between p-3 bg-primary text-white align-items-center">
      <p className="mb-0">LOGO</p>
      <ul className="d-flex justify-content-around mb-0">
        <Link to="/">
          <li className="ms-3  hovLink">Home</li>
        </Link>
        <Link to="/shop">
          <li className="ms-3  hovLink">Shop</li>
        </Link>
        <Link to="/counter">
          <li className="ms-3  hovLink">Counter</li>
        </Link>
        <Link to="/todo">
          <li className="ms-3  hovLink">Todo List</li>
        </Link>
        <Link to="/login">
          <li className="ms-3  hovLink">Login</li>
        </Link>
        <Link to="/register">
          <li className="ms-3  hovLink">Register</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
