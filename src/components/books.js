import React, { useState } from 'react';
import '../App.css';
import Booklist from './booklist';

const Books = () => {
  const [books, setBooks] = useState([
    { title: 'Beyond Order', author: 'Jordan Peterson' },
    { title: 'Maps of Meaning', author: 'Jordan Peterson' },
    { title: '12 Rules for Life', author: 'Jordan Peterson' },
    { title: 'Sapiens', author: 'Yuval Harrari' },
  ]);

  const handleRemoveBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const newBooks = [...books, { title, author }];
    setBooks(newBooks);
    event.target.reset();
  };

  return (
    <div className="books">
      <Booklist books={books} onRemoveBook={handleRemoveBook} />
      <form onSubmit={handleAddBook}>
        <input type="text" placeholder="Book title..." name="title" />
        <input type="text" placeholder="Book author..." name="author" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Books;
