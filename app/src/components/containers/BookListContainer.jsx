import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BookList from '../BookList';

const getFilteredBooks = (books, filter) => {
  switch (filter) {
    case 'reading-list':
      return books.filter(book => !book.read);

    case 'finished-books':
      return books.filter(book => book.read);

    default:
      return books;
  }
};

const mapStateToProps = (state, { match }) => ({
  books: getFilteredBooks(state.books, match.params.filter),
  visibilityFilter: match.params.filter,
  fetching: state.fetching
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const BookListContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList));

export default BookListContainer;
