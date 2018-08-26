import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import Tabs from './Tabs';
import { SortableBook, Book } from './Book';
import SearchBooks from './SearchBooks';
import NoBooks from './NoBooks';

const SortableBookList = SortableContainer( ({ items, removeBook, toggleRead, getBooks, history }) => (
  <ul>
    {items.map( (book, index) => (
      <SortableBook 
        key={`item-${book.title}`} 
        index={index} 
        book={book} 
        removeBook={removeBook} 
        toggleRead={toggleRead} 
        getBooks={getBooks} 
        history={history} 
      />
    ))}
  </ul>
));

class BookList extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired
      })
    ),
    visibilityFilter: PropTypes.string.isRequired,
    fetching: PropTypes.bool.isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    history: PropTypes.shape({}).isRequired,
    getBooks: PropTypes.func.isRequired,
    addBook: PropTypes.func.isRequired,
    removeBook: PropTypes.func.isRequired,
    toggleRead: PropTypes.func.isRequired,
    setOrder: PropTypes.func.isRequired
  };

  static defaultProps = {
    books: []
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const sortedBooks = arrayMove(this.props.books, oldIndex, newIndex);
    this.props.setOrder(sortedBooks);
  };

  render() {
    const { books, visibilityFilter, results, fetching, history, getBooks, addBook, removeBook, toggleRead } = this.props;
    
    return (
      <main className="booklist">
        <Tabs visibilityFilter={visibilityFilter} />

        <Route
          path="/reading-list"
          render={() => {
            window.scrollTo(0, 0);

            return books.length 
              ? <SortableBookList 
                  items={books} 
                  onSortEnd={this.onSortEnd} 
                  useDragHandle={true}
                  removeBook={removeBook} 
                  toggleRead={toggleRead} 
                  getBooks={getBooks} 
                  history={history}
                />
              : <NoBooks readingList />
          }}
        />

        <Route 
          path="/finished-books"
          render={() => books.length 
            ? <ul>
                {books.map(book => 
                  <Book 
                    key={book.title} 
                    book={book} 
                    removeBook={removeBook} 
                    toggleRead={toggleRead} 
                    getBooks={getBooks} 
                    history={history} 
                  />
                )}
              </ul>
            : <NoBooks />
          }
        />

        <SearchBooks 
          results={results} 
          fetching={fetching} 
          history={history} 
          getBooks={getBooks} 
          addBook={addBook}
        />
      </main>
    );
  }
}

export default BookList;
