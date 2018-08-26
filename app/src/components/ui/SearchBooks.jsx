import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Tabs from './Tabs';
import SearchForm from './SearchForm';
import { Book } from './Book';
import Pagination from './Pagination';

const SearchBooks = ({ suggestions, fetching, history, suggestBooks, addBook }) => {
  return (
    <div>
      <Route path="/suggestions" component={Tabs} />
      <SearchForm history={history} suggestBooks={suggestBooks} />
      <div className="spinner">
        <BeatLoader loading={fetching} color={'rgb(191, 55, 251)'} />
      </div>
      <Route 
        path="/suggestions"
        render={() => {
          window.scrollTo(0, 0);
          
          return (
            <ul>
              {suggestions.map( book => (
                <Book 
                  key={book.id} 
                  book={book} 
                  isSuggestion 
                  suggestBooks={suggestBooks} 
                  addBook={() => {
                    addBook(book);
                    history.push('reading-list');
                  }}
                />))}

              {!!suggestions.length && <Pagination />}
            </ul>
        )}}
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
