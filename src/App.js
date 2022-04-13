import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Pages/Landing";
import ListPage from "./Pages/ListPage";
import NewBooksPage from "./Pages/NewBooksPage";
import BookCard from "./Components/BookCard";
import BookDetails from "./Pages/BookDetails";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { useParams } from "react-router";
import { initializeApp } from "firebase/app";

function App() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBOVVYBJnjaWKxNaBBbd-8-ZPwMLwIPyZ0",
    authDomain: "itbook-fb968.firebaseapp.com",
    projectId: "itbook-fb968",
    storageBucket: "itbook-fb968.appspot.com",
    messagingSenderId: "896211584699",
    appId: "1:896211584699:web:57bc48d4e74ea9f1ce8b9e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/books/:id" component={BookDetails} />
        <Route path="/" component={Landing} exact />
        <Route path="/books" component={ListPage} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </Router>
  );
}

export default App;
