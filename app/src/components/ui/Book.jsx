import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import DeleteButton from './DeleteButton';
import ReadButton from './ReadButton';

export const Book = ({ book, removeBook, toggleRead }) => (
  
  // TODO: sanitize snippet input for html entities, etc
  // TODO: make 'read more' link for descriptions over 3 lines long

  <div className="box">
    <article className="media">
      <figure className="media-left">
        <img src={book.img} alt={book.title} />
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong className="title is-5">{book.title}</strong>
            <br />
            <small className="subtitle is-6">{book.author}</small> 
            <br />
            <span className="is-hidden-mobile is-italic">
              {book.snippet}
            </span>
          </p>
          <ReadButton finished={book.read} toggleRead={() => toggleRead(book.id)} />
        </div>
      </div>
      <div className="media-right">
        <DeleteButton removeBook={() => removeBook(book.id)} />
      </div>
    </article>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired
};

export const SortableBook = SortableElement(Book);