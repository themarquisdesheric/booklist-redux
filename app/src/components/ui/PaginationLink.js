import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const PaginationLink = ({ getBooks, history, index }) => {
  const page = index + 1;
  // we're paginating by 10 so the start index needs to reflect that
  const pageStartIndex = index ? `${index}0` : 0;

  return (
    <li>
      <a 
        // ! need this to reflect curent page, can be pulled off history once in query string
        className={`pagination-link ${index || 'is-current'}`} 
        aria-label={`Goto page ${page}`}
        onClick={() => {
          const params = queryString.parse(history.location.search);
  
          getBooks(params.search, pageStartIndex);
        }}
      >
        {page}
      </a>
    </li>
  );
}

PaginationLink.propTypes = {
  getBooks: PropTypes.func,
  history: PropTypes.object,
  index: PropTypes.number
};

export default PaginationLink;
