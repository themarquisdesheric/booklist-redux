import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books }) => (
  <div>
    <ul>
      {books.map(book => 
        <li key={book.title}>{book.title}</li>
      )}
    </ul>
  </div>
);

BookList.defaultProps = {
  books: []
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired
    })
  )
};

export default BookList;
