import PropTypes from 'prop-types';

const Book = ({ title, author, onRemove }) => (
  <li>
    {title}
    <span>{author}</span>
    <button type="button" onClick={onRemove}>Remove</button>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
