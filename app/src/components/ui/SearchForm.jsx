import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'react-icons/lib/fa/search';

class SearchForm extends Component {
  static propTypes = {
    getBooks: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired
  };
  
  state = {
    query: ''
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleSubmit = (e) => {
    const { getBooks, history } = this.props;
    const { query } = this.state;

    e.preventDefault();

    if (!query) return;
    
    getBooks(query);
    this.setState({ query: '' });

    if (history.location.pathname !== '/results') {
      history.push('/results');
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

export default SearchForm;
