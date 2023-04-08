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
    return (
      <h1>Loading...</h1>
    );
  }

  const displayBooks = () => {
    if (Object.keys(theBooks).length > 0) {
      return (
        <ul className="bookList">
          {Object.keys(theBooks).map((id) => {
            const [mybook] = theBooks[id];
            const { author, title, category } = mybook;

            return (
              <li key={id} id={id} className="bookItem">
                <div className="bookDetails">
                  <span className="author">{author}</span>
                  <span className="title">{title}</span>
                  <span className="category">{category}</span>
                </div>
                <button
                  type="submit"
                  className="removeBookButton"
                  onClick={() => {
                    handleRemoveBook(id);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      );
    }
    return <h1 className="noBooksMessage">No books yet</h1>;
  };

  return (
    <div className="books">
      <ul>
        {displayBooks()}
      </ul>
      <AddNewBook />
    </div>
  );
};

export default Books;
