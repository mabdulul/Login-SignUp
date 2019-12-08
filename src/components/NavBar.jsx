import React from "react";
import "../Stylesheets/Nav.css";
import "../Stylesheets/global.css";
const NavBar = () => {
  return (
    <nav>
      <ul className="nav-one">
        <li>
          <a className="nav-left">About Us</a>
        </li>
        <li>
          <a href="">Members Login</a>
        </li>
        <li>
          <a href="">Sign Up</a>
        </li>
      </ul>
      <div className="logo">
        <h1>monroe's salon</h1>
      </div>
      <ul className="nav-two">
        <li className="nav-right">
          <a className="">Book a Consolation</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
