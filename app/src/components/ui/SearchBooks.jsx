import React from 'react';
import PropTypes from 'prop-types';
import AddBook from './AddBook';
import { Book } from './Book';

const SearchBooks = ({ suggestions, suggestBooks }) => {
  return (
    <div>
      <AddBook suggestBooks={suggestBooks} />
      {suggestions && 
        <ul>
          {suggestions.map( (book, i) => 
            <Book key={book.id} book={book} isSuggestion />)}
        </ul>
      }
    </div>
  );
};

SearchBooks.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  suggestBooks: PropTypes.func.isRequired
};

export default SearchBooks;
