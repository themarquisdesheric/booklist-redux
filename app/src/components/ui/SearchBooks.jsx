import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import { Book } from './Book';

const SearchBooks = ({ suggestions, suggestBooks, addBook }) => {
  return (
    <div>
      <SearchForm suggestBooks={suggestBooks} />
      {suggestions && 
        <ul>
          {suggestions.map( (book, i) => 
            <Book key={book.id} book={book} isSuggestion addBook={addBook} />)}
        </ul>
      }
    </div>
  );
};

SearchBooks.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  suggestBooks: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired
};

export default SearchBooks;
