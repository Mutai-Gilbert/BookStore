import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/booksSlice';
import '../App.css';
import AddNewBook from './addNewBook';

const Books = () => {
  const { isLoading } = useSelector((state) => state.books);
  const theBooks = useSelector((state) => state.books.books);

  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const displayBooks = () => {
    if (Object.keys(theBooks).length > 0) {
      return Object.keys(theBooks).map((id) => {
        const [mybook] = theBooks[id];
        const { author, title, category } = mybook;

        return (
          <li key={id}>
            <div>
              <span className="title  ">{title}</span>
              <span className="author">{author}</span>
              <span className="category">{category}</span>
            </div>
            <button
              type="submit"
              className="removeBook"
              onClick={() => handleRemoveBook(id)}
            >
              Remove
            </button>
          </li>
        );
      });
    }
    return <h1>No books yet</h1>;
  };

  return (
    <div className="books">
      <AddNewBook />
      <ul>{displayBooks()}</ul>
    </div>
  );
};

export default Books;
