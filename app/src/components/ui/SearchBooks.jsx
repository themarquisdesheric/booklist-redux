import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import SearchForm from './SearchForm';
import { Book } from './Book';

const SearchBooks = ({ suggestions, fetching, history, suggestBooks, addBook }) => {
  return (
    <div>
      <SearchForm history={history} suggestBooks={suggestBooks} />
      {fetching && 'loading...'}
      <Route 
        path="/suggestions"
        component={() => (
          <ul>
            {suggestions.map( (book, i) => (
              <Book 
                key={book.id} 
                book={book} 
                isSuggestion 
                addBook={() => {
                  addBook(book);
                  history.push('reading-list');
                }} 
              />))}
          </ul>
        )} 
      />
    </div>
  );
};

SearchBooks.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  suggestBooks: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired
};

export default SearchBooks;
