import React, { useState, useEffect } from "react";
import BookCard from "../Components/BookCard";
import Fade from "react-reveal/Fade";
export default function BooksPage({ books }) {
  console.log();
  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="header-title">
            <h1>
              Books By The Same <span className="colored">Authors</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="books-page">
        <div className="books-container">
          {books
            ? books
                .slice(0, 5)
                .map((item, index) => (
                  <BookCard
                    key={item.isbn13}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    subtitle={item.subtitle}
                    isbn={item.isbn13}
                  />
                ))
            : "error"}
        </div>
      </div>
    </>
  );
}
