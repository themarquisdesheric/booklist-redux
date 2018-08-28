import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks } from '../../actions';

const PaginationLink = ({ query, getBooks, history, index }) => {
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
          // history.push(`/results?${search}&page=${page}`);
          getBooks(query, pageStartIndex);
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

const mapStateToProps = state => ({
  query: state.query
});

const mapDispatchToProps = dispatch => ({
  getBooks: (query, pageStartIndex) => 
    dispatch(getBooks(query, pageStartIndex))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaginationLink));
