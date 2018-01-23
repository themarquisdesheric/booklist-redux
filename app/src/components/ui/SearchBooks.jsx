import React from 'react';
import PropTypes from 'prop-types';
import AddBook from './AddBook';

const SearchBooks = ({ suggestBooks }) => {
  return (
    <div>
      <AddBook suggestBooks={suggestBooks} />
    </div>
  );
};

SearchBooks.propTypes = {
  suggestBooks: PropTypes.func.isRequired
};

export default SearchBooks;
