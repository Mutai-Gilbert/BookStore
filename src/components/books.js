import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../App.css';
import AddNewBook from './addNewBook';

const Books = () => {
  const theBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div className="books">
      <ul>
        {
          theBooks.map((book) => (
            <li key={book.id}>
              <div>
                <span className="title">{book.title}</span>
                <span className="author">{book.author}</span>
              </div>
              <button
                type="submit"
                className="removeBook"
                onClick={() => dispatch(removeBook(book.item_id))}
              >
                Remove
              </button>
            </li>
          ))
        }
      </ul>
      <AddNewBook />
    </div>
  );
};

export default Books;
