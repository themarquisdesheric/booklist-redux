import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';

const BookInfo = ({ title, authors = [], snippet, suggestBooks, history }) => (
  <p>
    <strong className="title is-5">{title}</strong><br />
    <small className="subtitle is-6">
      {authors.length > 1 ?
        authors.map(author => 
          <Author key={author} author={author} suggestBooks={suggestBooks} history={history} />
        ) :
        <Author key={authors} author={authors} suggestBooks={suggestBooks} history={history} />
      }
    </small><br />

    <span className="is-hidden-mobile is-italic">
      {snippet}
    </span>
  </p>
);

BookInfo.defaultProps = {
  history: {}
};

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]).isRequired,
  snippet: PropTypes.string.isRequired,
  suggestBooks: PropTypes.func.isRequired,
  history: PropTypes.shape({})
};

export default BookInfo;
