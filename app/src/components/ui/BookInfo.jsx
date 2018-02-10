import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({ title, authors, snippet }) => {
  return (
    <p>
      <strong className="title is-5">{title}</strong><br />
      <small className="subtitle is-6">{`${authors.length > 1 ? authors.join(', ') : authors}`}</small><br />

      <span className="is-hidden-mobile is-italic">
        {snippet}
      </span>
    </p>
  );
};

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  snippet: PropTypes.string.isRequired
};

export default BookInfo;
