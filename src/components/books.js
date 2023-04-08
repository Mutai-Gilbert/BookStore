import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook, getBooks } from '../redux/books/booksSlice';
import '../App.css';
import AddNewBook from './addNewBook';

const Books = () => {
  const { isLoading } = useSelector((state) => state.books);
  const theBooks = useSelector((state) => state.books.books);
  const [progress, setProgress] = useState(50);

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
  const handlePercentage = () => {
    let percentage = progress;
    if (percentage < 100) {
      setProgress(percentage += 1);
    }
  };

  const displayBooks = () => {
    if (Object.keys(theBooks).length > 0) {
      return (
        <ul className="bookList">
          {Object.keys(theBooks).map((id) => {
            const [mybook] = theBooks[id];
            const { author, title, category } = mybook;

            return (
              <li key={id} id={id} className="book">
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
      <ul>
        {displayBooks()}
      </ul>
      <div className="newBook">
        <h3 className="addNewBook">ADD NEW BOOK</h3>
        <AddNewBook />
      </div>
    </div>
  );
};

export default Books;
