import React from "react";
import NewBooksPage from "./NewBooksPage";
import { useParams } from "react-router";
import img from "../assets/girl3.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
const Landing = () => {
  return (
    <>
      <div className="landing__container">
        <div className="landing__header">
          <h2>~ Find Your Next Book ~</h2>

          <div className="landing__img">
            <img src={img} alt="logo" />
          </div>
          <Link to="/books">
            <button id="landing__button">
              <span style={{ color: "white" }}>Discover Books</span>
            </button>
          </Link>
        </div>
        <Whyus />
      </div>

      <div className="why">
        <div className="why__container">
          <Fade bottom>
            <div className="highlight">
              <div className="highlight__img">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bolt"
                  className="svg-inline--fa fa-bolt fa-w-10 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"
                  ></path>
                </svg>
              </div>
              <h3 className="highlight__subtitle">Easy and quick</h3>
              <p className="highlight__para">
                Get access to your books instantly
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="highlight">
              <div className="highlight__img">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="book-open"
                  className="svg-inline--fa fa-book-open fa-w-18 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
                  ></path>
                </svg>
              </div>
              <h3 className="highlight__subtitle">Easy and quick</h3>
              <p className="highlight__para">
                Books for All your favourite categories
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="highlight">
              <div className="highlight__img">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="tags"
                  className="svg-inline--fa fa-tags fa-w-20 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"
                  ></path>
                </svg>
              </div>
              <h3 className="highlight__subtitle">Free Options</h3>
              <p className="highlight__para">
                Free Books Options From All Categories
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <NewBooksPage />
      </Fade>
    </>
  );
};
export default Landing;

function Whyus() {
  return (
    <div className="whyus">
      <h1>Why Choose Us?</h1>
    </div>
  );
}
