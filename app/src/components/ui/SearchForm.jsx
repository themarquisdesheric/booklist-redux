import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import path from 'path';
import SearchIcon from 'react-icons/lib/fa/search';

class SearchForm extends Component {
  static propTypes = {
    getBooks: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired
  };
  
  state = {
    query: ''
  };

  componentDidMount() {
    const { getBooks, location: { pathname, search } } = this.props;
    const query = path.basename(pathname);
    const { page } = qs.parse(search.slice(1));
    const pageStartIndex = page - 1;

    if (pathname.includes('results')) getBooks(query, pageStartIndex);
  }
  

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleSubmit = (e) => {
    const { getBooks, history, location: { pathname } } = this.props;
    const { query } = this.state;
    const onResultsPage = pathname.includes('results');

    const fetchBooks = () => {
      getBooks(query);
      this.setState({ query: '' });
      history.push(`/results/${query}?page=1`);
    };

    e.preventDefault();

    if (!query) return;

    if (onResultsPage) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      window.setTimeout( () => {
        fetchBooks();
      }, 500);
    } else {
      fetchBooks();
    }
  }

  render() {
    return (
      <form className="field has-addons" onSubmit={this.handleSubmit}>
        <div className="control has-icons-left">
          <input className="input" value={this.state.query} placeholder="Find a book" onChange={this.handleChange} />
          <span className="icon is-small is-left">
            <SearchIcon />
          </span>
        </div>
        <div className="control has-icons-left">
          <input className="button button-gradient" type="submit" value="Search" />
        </div>
      </form>
    );
  }
}

export default withRouter(SearchForm);
