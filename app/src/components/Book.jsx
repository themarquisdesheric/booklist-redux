import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

const Book = ({ book }) => (
  <li>
    {book.title} <DeleteButton />
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
