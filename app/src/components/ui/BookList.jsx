import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import Tabs from './Tabs';
import { SortableBook, Book } from './Book';
import SearchBooks from './SearchBooks';

const SortableBookList = SortableContainer( ({ items, removeBook, toggleRead }) => (
  <ul>
    {items.map( (book, index) => (
      <SortableBook key={`item-${book.title}`} index={index} book={book} removeBook={removeBook} toggleRead={toggleRead} />
    ))}
  </ul>
));

class BookList extends Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    const sortedBooks = arrayMove(this.props.books, oldIndex, newIndex);
    this.props.setOrder(sortedBooks);
  };

  render() {
    const { books, visibilityFilter, suggestions, history, suggestBooks, addBook, removeBook, toggleRead } = this.props;
    return (
      <main className="booklist">
        <Route
          path="/reading-list"
          component={() => (
            <div>
              <Tabs visibilityFilter={visibilityFilter} />
              <SortableBookList items={books} onSortEnd={this.onSortEnd} removeBook={removeBook} toggleRead={toggleRead} />
            </div>
          )} 
        />
        <Route 
          path="/finished-books"
          component={() => (
            <div>
              <Tabs visibilityFilter={visibilityFilter} />
              <ul>
                {books.map(book => <Book key={book.title} book={book} removeBook={removeBook} toggleRead={toggleRead} />)}
              </ul>
            </div>
          )}
        />

        <SearchBooks suggestions={suggestions} history={history} suggestBooks={suggestBooks} addBook={addBook} />
        {this.props.fetching && 'loading...'}
      </main>
    );
  }
}

BookList.defaultProps = {
  books: []
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired
    })
  ),
  visibilityFilter: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({}).isRequired,
  suggestBooks: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleRead: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired
};

export default BookList;
