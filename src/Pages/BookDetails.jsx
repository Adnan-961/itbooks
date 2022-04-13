import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Rating from "@mui/material/Rating";
import SimilarBooks from "../Components/SimilarBooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
const BookDetails = (isbn) => {
  const [book, setBook] = useState();
  const [AuthorsBooks, setAuthorsBooks] = useState();
  let favBooks = JSON.parse(localStorage.getItem("favBooks"))
    ? JSON.parse(localStorage.getItem("favBooks"))
    : [];
  const SaveFavBook = () => {
    favBooks.push(book);
    localStorage.setItem("favBooks", JSON.stringify(favBooks));
    toast.success("Book Added!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn.match.params.id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [isbn.match.params.id]);
  let authors = book && book.authors;

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/search/${authors}`)
      .then((response) => response.json())
      .then((data) => setAuthorsBooks(data));
  }, [authors]);
  // console.log(SimilarBooks)
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
      <div className="book-details-page">
        <Fade>
          {" "}
          <div className="book-details-container">
            <div className="book-img">
              <img
                src={
                  book
                    ? book.image
                    : "https://www.forewordreviews.com/books/covers/white-masks.jpg"
                }
                alt=""
                className="images"
              />
            </div>
            <div className="book-info">
              <div className="title">
                <h1>{book ? book.title : "Book Not Found"}</h1>{" "}
              </div>
              <div className="book-description">
                {book ? book.subtitle : ""}
              </div>
              <div className="title">
                <h2>
                  {book ? (book.price === "$0.00" ? "Free" : book.price) : ""}
                </h2>
                {book && (
                  <Rating
                    name="read-only"
                    value={book ? parseInt(book.rating) : ""}
                    readOnly
                  />
                )}{" "}
              </div>
              <div className="book-description">{book && book.desc}</div>
              <div className="title">
                {book && (
                  <h3>
                    {" "}
                    Published by:{" "}
                    <span className="colored">
                      {book ? book.publisher : ""}
                    </span>{" "}
                    in {book ? book.year : "Error"}{" "}
                  </h3>
                )}
                {book && (
                  <h3>
                    {" "}
                    Wrote by:{" "}
                    <span className="colored">
                      {book ? book.authors : "Error"}
                    </span>{" "}
                  </h3>
                )}{" "}
              </div>
              {book && (
                <button
                  id="landing__button"
                  style={{ color: "white" }}
                  onClick={SaveFavBook}
                >
                  Add To Cart
                </button>
              )}{" "}
            </div>
          </div>
        </Fade>
        <SimilarBooks books={AuthorsBooks ? AuthorsBooks.books : []} />
      </div>
    </>
  );
};
export default BookDetails;
