import React from 'react';
import PropTypes from 'prop-types';
import VisibilityFilter from './VisibilityFilter';
import Book from './Book';
import AddBook from './AddBook';
import c from '../constants';

const BookList = ({ books, addBook, removeBook, toggleRead, setFilter }) => {
  const filters = {
    'All Books': c.SHOW_ALL,
    'Unread Books': c.SHOW_UNREAD,
    'Finished Books': c.SHOW_READ
  };

  return (
    <div>
      {Object.keys(filters).map(filter => 
        <VisibilityFilter key={filter} value={filter} setFilter={() => setFilter(filters[filter])} />
      )}
      <ul>
        {books.map(book => 
          <Book key={book.title} book={book} removeBook={removeBook} toggleRead={toggleRead} />
        )}
      </ul>
      <AddBook addBook={addBook} />
    </div>
  );
};

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
  removeBook: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default BookList;
