import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

const Book = ({ book, removeBook }) => (
  <li>
    {book.title} <DeleteButton removeBook={() => removeBook(book.id)} />
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired,
  removeBook: PropTypes.func.isRequired
};

export default Book;
