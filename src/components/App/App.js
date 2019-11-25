import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BookList from "../Books/BookList";
import Book from "../Books/Book";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Route exact path="/" component={BookList} />
        <Route path="/view/:id" component={Book} />
      </BrowserRouter>
    </div>
  );
}

export default App;
