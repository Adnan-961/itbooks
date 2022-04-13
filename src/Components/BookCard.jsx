import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
export default function BookCard({ image, title, subtitle, price, isbn }) {
  return (
    <>
      <Link to={`/books/${isbn}`}>
        <div className="container" style={{ background: ` url(${image})` }}>
          <div className="overlay">
            <div className="items"></div>
            <div className="items head">
              <p>{title}</p>
              <hr />
            </div>
            <div className="items price">
              <p className="new">{price === "$0.00" ? "Free" : price}</p>
            </div>
            <div className="items cart">
              <i className="fa fa-shopping-cart"></i>
              <span>{subtitle}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
