import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';
import SearchForm from './SearchForm';
import { Book } from './Book';
import Pagination from './Pagination';

const SearchBooks = ({ results, fetching, match, history, getBooks, addBook }) => {
  const showResults = match.url === '/results';

  return (
    <div>
      <div className="spinner">
        <BeatLoader loading={fetching} color={'rgb(191, 55, 251)'} />
      </div>

      {showResults && (
        <ul>
          {results.map(book => (
            <Book 
              key={book.id} 
              book={book} 
              isSuggestion 
              getBooks={getBooks} 
              addBook={() => {
                addBook(book);
                history.push({
                  pathname: '/reading-list'
                });
              }}
            />))}

          {!!results.length && <Pagination />}
        </ul>
      )}

      <SearchForm getBooks={getBooks} />
    </div>
  );
};

SearchBooks.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.shape({}).isRequired,
  getBooks: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired
};

export default SearchBooks;
