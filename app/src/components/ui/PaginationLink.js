import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getBooks } from '../../actions';

const PaginationLink = ({ query, getBooks, history, location: { pathname, search }, index }) => {
  const { page: pageFromUrl } = queryString.parse(search);  
  const page = index + 1;
  // eslint-disable-next-line
  const active = (page == pageFromUrl);

  return (
    <li>
      <a 
        className={`pagination-link ${active ? 'is-current' : ''}`} 
        aria-label={`Goto page ${page}`}
        onClick={() => {
          const newUrl = `/results/${query}?page=${page}`;
          // don't reload if already on same page of results
          if (`${pathname}${search}` === newUrl) return;

          history.push(`/results/${query}?page=${page}`);
          getBooks(query, index);
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

export default withRouter(connect(mapStateToProps, { getBooks })(PaginationLink));
