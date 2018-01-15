import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import FinishedButton from './FinishedButton';

const Book = ({ book, removeBook, toggleRead }) => (
  <li style={book.read ? { textDecoration: 'line-through' } : null}>
    {book.title}
    <DeleteButton removeBook={() => removeBook(book.id)} />
    <FinishedButton toggleRead={() => toggleRead(book.id)} />
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired
};

export default Book;
