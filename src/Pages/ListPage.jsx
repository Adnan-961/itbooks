import React, { useState, useEffect } from "react";
import BookCard from "../Components/BookCard";
// import { useParams } from "react-router";
import SimilarBooks from "../Components/SimilarBooks";
import TextField from "@mui/material/TextField";
import ReactLoading from 'react-loading';
import Fade from 'react-reveal/Fade';
export default function ListPage({ match }) {
  const [books, setBooks] = useState();
  const [category, setCategory] = useState("new");
  const [search, setSearch] = useState("");
  const [Load,setLoad] = useState(true);
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((response) => response.json())
      .then((data) => setBooks(data.books));
      setTimeout(() => {setLoad(false)}, 1800)
    }, [!search]);

  useEffect(() => {
    search &&
      fetch(`https://api.itbook.store/1.0/search/${search}`)
        .then((response) => response.json())
        .then((data) => setBooks(data.books));
  }, [search]);

// setTimeout(setLoad(false),1500)


  return (
    <>
    {Load ? <div className="loading"><ReactLoading type="bars" color={"#037c7c"} height={'10%'} width={'10%'} /> </div>: 
     <>
     <div className="header-container">
        <div className="header">
          <div className="header-title">

            <input type="search" id="search__books"onChange={(e) => setSearch(e.target.value)} placeholder="Search Books"/>
          </div>

          <div className="header-title">
            <h1>
              New <span className="colored">Books</span>
            </h1>
          </div>

          <div className="header-title">
            <select
              name="categories"
              id="categories"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="new">Category</option> 
              <option value="new">New</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
              <option value="free">Free</option>
            </select>{" "}
            
          </div>
        </div>
      </div>

      <div className="books-page">
        <div className="books-container">
          {/*Sort By New Books   */}

          {category === "new" &&
            books &&
            books.map((item, index) => (
              <Fade bottom><BookCard
                key={item.isbn13}
                title={item.title}
                image={item.image}
                price={item.price}
                subtitle={item.subtitle}
                isbn={item.isbn13}
              /></Fade>
            ))}

          {/*Sort By Ascending   */}
          {category === "Ascending" &&
            books &&
            books
              .sort(
                (a, b) =>
                  parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
              )
              .map((item, index) => (
                <Fade bottom> <BookCard
                  key={item.isbn13}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  subtitle={item.subtitle}
                  isbn={item.isbn13}
                /></Fade>
              ))}
          {/*Sort By Descending   */}
          {category === "Descending" &&
            books &&
            books
              .sort(
                (a, b) =>
                  parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
              )
              .map((item, index) => (
             <Fade bottom>   <BookCard
                  key={item.isbn13}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  subtitle={item.subtitle}
                  isbn={item.isbn13}
                /></Fade>
              ))}

          {/*Sort By Free Books  */}
          {category === "free" &&
            books &&
            books
              .filter((item) => item.price === "$0.00")
              .map((item, index) => (
              <Fade bottom>  <BookCard
                  key={item.isbn13}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  subtitle={item.subtitle}
                  isbn={item.isbn13}
                /></Fade>
              ))}
        </div>
      </div></>}
    </>
  );
}
