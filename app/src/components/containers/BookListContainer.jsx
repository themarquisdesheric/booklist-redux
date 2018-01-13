import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BookList from '../BookList';

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

export default BookListContainer;
