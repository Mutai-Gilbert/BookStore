import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books, onRemoveBook }) => (
  <ul>
    {books.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        onRemove={() => onRemoveBook(book.id)}
      />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default BookList;
