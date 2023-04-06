import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleBookTitle = (e) => {
    setNewBook({ ...newBook, title: e.target.value });
  };
  const handleBookAuthor = (e) => {
    setNewBook({ ...newBook, author: e.target.value });
  };
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const nextBook = {
      item_id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
    };
    dispatch(addBook(nextBook));
    document.querySelector('form').reset();
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Book title..."
          name="title"
          value={newBook.title}
          onChange={handleBookTitle}
          required
        />
        <input
          type="text"
          placeholder="Book author..."
          name="author"
          value={newBook.author}
          onChange={handleBookAuthor}
          required
        />
        <input type="submit" onClick={handleBookSubmit} />
      </form>
    </>
  );
};

export default AddNewBook;
