import React from 'react';
import PropTypes from 'prop-types';

const Author = ({ author, suggestBooks, history }) => (
  <span onMouseEnter={() => {
    suggestBooks(author);

    if (!history.location) return;

    history.push('suggestions');
  }}
  >
    {author} &nbsp;
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
  suggestBooks: PropTypes.func.isRequired,
  history: PropTypes.shape({})
};

export default Author;
