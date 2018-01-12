import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import AddBook from './AddBook';

const BookList = ({ books }) => (
  <div>
    <ul>
      {books.map(book => 
        <Book key={book.title} book={book} />
      )}
    </ul>
    <AddBook />
  </div>
);

BookList.defaultProps = {
  books: []
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired
    })
  )
};

export default BookList;
