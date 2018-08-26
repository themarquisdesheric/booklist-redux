import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import SearchForm from './SearchForm';
import { Book } from './Book';
import Pagination from './Pagination';

const SearchBooks = ({ results, fetching, history, getBooks, addBook }) => {
  return (
    <div>
      <div className="spinner">
        <BeatLoader loading={fetching} color={'rgb(191, 55, 251)'} />
      </div>
      
      <Route 
        path="/results"
        render={() => {
          window.scrollTo(0, 0);
          
          return (
            <ul>
              {results.map( book => (
                <Book 
                  key={book.id} 
                  book={book} 
                  isSuggestion 
                  getBooks={getBooks} 
                  addBook={() => {
                    addBook(book);
                    history.push('reading-list');
                  }}
                />))}

              {!!results.length && <Pagination />}
            </ul>
        )}}
      />
      
      <SearchForm history={history} getBooks={getBooks} />
    </div>
  );
};

SearchBooks.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  getBooks: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired
};

export default SearchBooks;
