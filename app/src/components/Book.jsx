import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <li>
    {book.title}
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
};

export default Book;
