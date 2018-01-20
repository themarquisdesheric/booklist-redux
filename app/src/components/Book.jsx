import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import DeleteButton from './DeleteButton';
import ReadButton from './ReadButton';

const Book = SortableElement( ({ book, removeBook, toggleRead }) => (
  // TODO: sanitize snippet input for html entities, etc
  <div className="box">
    <article className="media">
      <figure className="media-left">
        <p className="image">
          <img src={book.img} alt={book.title} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{book.title}</strong>
            <br />
            <small>{book.author}</small> 
            <br />
            {book.snippet}
          </p>
          <ReadButton finished={book.read} toggleRead={() => toggleRead(book.id)} />
        </div>
      </div>
      <div className="media-right">
        <DeleteButton removeBook={() => removeBook(book.id)} />
      </div>
    </article>
  </div>
));

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired
};

export default Book;
