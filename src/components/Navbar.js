import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export default function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <>
      <nav className="navbar">
        <h1>My Reading list</h1>
        <p>Total books in reading list: {books.length}</p>
      </nav>
    </>
  );
}
