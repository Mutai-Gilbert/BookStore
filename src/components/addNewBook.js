import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, getBooks } from '../redux/books/booksSlice';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({ title: '', author: '', category: '' });

  const handleBookTitle = (e) => {
    setNewBook({ ...newBook, title: e.target.value });
  };
  const handleBookAuthor = (e) => {
    setNewBook({ ...newBook, author: e.target.value });
  };
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const nextBook = { item_id: uuidv4(), ...newBook };
    dispatch(addBook(nextBook));
    setNewBook({ title: '', author: '', category: '' });
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
        <input
          type="submit"
          onClick={() => {
            handleBookSubmit();
            dispatch(getBooks());
          }}
        />
      </form>
    </>
  );
};

export default AddNewBook;
