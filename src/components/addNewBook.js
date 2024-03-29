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

  const handleBookCategory = (e) => {
    setNewBook({ ...newBook, category: e.target.value });
  };
  const handleBookSubmit = async () => {
    const bookInfo = {
      item_id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    };
    dispatch(addBook(bookInfo));
    setNewBook({ title: '', author: '', category: '' });
    dispatch(getBooks());
  };

  return (
    <>
      <form onSubmit={handleBookSubmit}>
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
          type="text"
          placeholder="Book Category..."
          name="Category"
          value={newBook.category}
          onChange={handleBookCategory}
          required
        />
        <button type="submit" className="updateProgress"> ADD BOOK</button>
      </form>
    </>
  );
};

export default AddNewBook;
