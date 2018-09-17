import React from 'react';
import PropTypes from 'prop-types';

const Author = ({ author, getBooks, history }) => (
  <span 
    className="author-link" 
    onClick={() => {
      getBooks(author);

      if (!history.location) return;

      history.push('results');
    }}
  >
    {author}
  </span>
);

Author.defaultProps = {
  history: {}
};

Author.propTypes = {
  author: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]).isRequired,
  getBooks: PropTypes.func.isRequired,
  history: PropTypes.shape({})
};

export default Author;
