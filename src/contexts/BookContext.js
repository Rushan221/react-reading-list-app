import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book1", author: "Rushan" },
    { id: 2, title: "Book2", author: "Ram" },
    { id: 3, title: "Book3", author: "Shyam" },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { id: uuid(), title: title, author: author }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
