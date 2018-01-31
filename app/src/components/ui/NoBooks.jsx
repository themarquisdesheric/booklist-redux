import React from 'react';
import PropTypes from 'prop-types';

const NoBooks = ({ readingList }) => {
  return (
    <div className="no-books">
      <figure>
        <img src="empty-box.png" alt="empty-box" className="icon is-large" />
        <figcaption>
          {readingList ? 
            'You have no books in your reading list :(' : 
            'You have not marked any books as read yet :('
          }
        </figcaption>
      </figure>
    </div>
  );
};

NoBooks.defaultProps = {
  readingList: false
};

NoBooks.propTypes = {
  readingList: PropTypes.bool
};

export default NoBooks;
