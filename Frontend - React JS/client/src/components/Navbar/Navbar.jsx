import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header id="header">
      <div className="center">
        <div id="logo">
          <img
            src={require("../../assets/imaginebig-logo.jpg")}
            className="app-logo"
            alt="imaginebig-logo"
          />
          <span id="brand">
            <strong>ImagineBig</strong>
          </span>
        </div>
        <nav id="menu">
          <ul>
            <li>
              <a href="/">Productos</a>
            </li>
          </ul>
        </nav>
        <div className="clearfix"></div>
      </div>
    </header>
  );
};
