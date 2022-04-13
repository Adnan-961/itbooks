import React from "react";
import logo from "../assets/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="navbar__container">
        <div className="nav__inner">
          <div>
            <Link to="/">
              <img src={logo} className="logo" />
            </Link>
          </div>
          <div className="nav__dir">
            <Link to="/">
              {" "}
              <span className="nav__item">Home</span>
            </Link>
            <Link to="/books">
              {" "}
              <span className="nav__item">Books</span>
            </Link>
            <Link to="/cart">
              {" "}
              <span className="nav__item">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
