import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import BookInfo from './BookInfo';
import Button from './Button';

export const Book = ({ book, isSuggestion, addBook, removeBook, toggleRead, suggestBooks, history }) => (
  
  // TODO: make 'read more' link for descriptions over 3 lines long

  <div className="box">
    <article className="media">
      <figure className="media-left">
        <img src={book.img} alt={book.title} />
      </figure>
      <div className="media-content">
        <div className="content">
          <BookInfo 
            title={book.title} 
            authors={book.authors} 
            snippet={book.snippet} 
            suggestBooks={suggestBooks} 
            history={history} 
          />
          {/* if not a book suggestion then find out if book has been read  */}
          {isSuggestion ? null : book.read ? 
            <Button clickHandler={() => toggleRead(book.id)}>
              <img src="remove.png" alt="logo" className="button-icon" />Mark Unread
            </Button> 
            : 
            <Button clickHandler={() => toggleRead(book.id)}>
              <img src="mark-read.png" alt="logo" className="button-icon" />Mark Read
            </Button> 
          }
        </div>
      </div>
      <div className="media-right">
        {isSuggestion ? 
          <Button clickHandler={() => addBook(book)}>
            <img src="add.png" alt="logo" className="button-icon" />Add Book
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
  toggleRead: () => {},
  suggestBooks: () => {},
  history: {}
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
  toggleRead: PropTypes.func,
  suggestBooks: PropTypes.func,
  history: PropTypes.shape({})
};

export const SortableBook = SortableElement(Book);
