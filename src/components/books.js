import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/booksSlice';
import '../App.css';
import AddNewBook from './addNewBook';

const Books = ({ book }) => {
  const { isLoading } = useSelector((state) => state.books);
  const theBooks = useSelector((state) => state.books.books);
  const [progress, setProgress] = useState(50);

  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.id));
  };

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }
  const handlePercentage = () => {
    let percentage = progress;
    if (percentage < 100) {
      setProgress(percentage += 1);
    }
  };

  const displayBooks = () => {
    if (Object.keys(theBooks).length > 0) {
      return (
        <ul>
          {Object.values(theBooks).map((id) => {
            const [mybook] = theBooks[id];
            const { author, title, category } = mybook;

            return (
              <li key={id} id={id} className="book">
                <div className="design">
                  <div className="detail-actions">
                    <div className="bookDetails">
                      <span className="author">{author}</span>
                      <span className="title">{title}</span>
                      <span className="category">{category}</span>
                    </div>
                  </div>
                  <div className="actions">
                    <button type="button" className="comment actionBtn">Comments</button>
                    <button
                      type="button"
                      className="removeBook actionBtn"
                      onClick={() => { handleRemoveBook(id); }}
                    >
                      Remove
                    </button>
                    <button type="button" className="actionBtn">Edit</button>
                  </div>
                </div>

                <div className="percentage">
                  <CircularProgressbar
                    value={progress}
                    className="progressBar"
                  />
                  <div className="numberPercentage">
                    <span>
                      {progress}
                      %
                    </span>
                    <p>Completed</p>
                  </div>
                </div>
                <div className="progressSection">
                  <h2 className="currentChapter">CURRENT CHAPTER</h2>
                  <p className="chapter">Chapter 5</p>
                  <button
                    type="button"
                    onClick={handlePercentage}
                    className="updateProgress"
                  >
                    UPDATE PROGRESS
                  </button>
                </div>
                <div />
              </li>
            );
          })}
        </ul>
      );
    }
    return <h1 className="noBooksMessage">No books yet</h1>;
  };

  return (
    <div className="booksContainer">
      <div className="bookList">
        <ul>
          {displayBooks()}
        </ul>
      </div>
      <div className="newBook">
        <h3 className="addNewBook">ADD NEW BOOK</h3>
        <AddNewBook />
      </div>
    </div>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
