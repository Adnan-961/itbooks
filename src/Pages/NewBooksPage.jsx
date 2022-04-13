import React, { useState, useEffect } from "react";
import BookCard from "../Components/BookCard";
// import { useParams } from "react-router";
import SimilarBooks from "../Components/SimilarBooks";
import ReactLoading from 'react-loading';
export default function BooksPage({match}) {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((response) => response.json())
      .then((data) => setBooks(data.books));
  }, []);

  const Load = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
);

  return (
    <>

      <div className="header-container">
        <div className="header">
          <div className="header-title">
            <h1>Featured <span className="colored">Books</span></h1>
          </div>
        </div>
      </div>
      <div className="books-page">
        <div className="books-container">
          {books
            ? books
              .slice(1, 5)
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
