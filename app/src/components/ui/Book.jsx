import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import PlusIcon from 'react-icons/lib/fa/plus-circle';
import CheckIcon from 'react-icons/lib/fa/check-square';
import RemoveIcon from 'react-icons/lib/fa/minus-square';
import Button from './Button';

export const Book = ({ book, isSuggestion, addBook, removeBook, toggleRead }) => (
  
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
            <strong className="title is-5">{book.title}</strong><br />
            <small className="subtitle is-6">{book.author}</small><br />
            <span className="is-hidden-mobile is-italic">
              {book.snippet}
            </span>
          </p>
          {/* if not a book suggestion then find out if book has been read  */}
          {isSuggestion ? null : book.read ? 
            <Button className="is-light button-unread" clickHandler={() => toggleRead(book.id)}>
              <RemoveIcon className="button-icon" />Mark Unread
            </Button> 
            : 
            <Button className="is-light button-read" clickHandler={() => toggleRead(book.id)}>
              <CheckIcon className="button-icon" />Mark Read
            </Button> 
          }
        </div>
      </div>
      <div className="media-right">
        {isSuggestion ? 
          <Button className="is-primary add" clickHandler={() => addBook(book)}>
            <PlusIcon className="button-icon" />Add Book
          </Button> 
          : 
          <Button className="delete" clickHandler={() => removeBook(book.id)} />
        }
      </div>
    </article>
  </div>
);

Book.defaultProps = {
  isSuggestion: false,
  addBook: () => {},
  removeBook: () => {},
  toggleRead: () => {}
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    read: PropTypes.bool
  }).isRequired,
  isSuggestion: PropTypes.bool,
  addBook: PropTypes.func,
  removeBook: PropTypes.func,
  toggleRead: PropTypes.func
};

export const SortableBook = SortableElement(Book);
