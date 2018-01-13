import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import AddBook from './AddBook';

const BookList = ({ books, addBook, removeBook }) => (
  <div>
    <ul>
      {books.map(book => 
        <Book key={book.title} book={book} removeBook={removeBook} />
      )}
    </ul>
    <AddBook addBook={addBook} />
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
  ),
  addBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired
};

export default BookList;
