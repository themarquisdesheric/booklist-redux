import React from 'react';

const Pagination = ({ query }) => (
  <nav className="pagination is-centered" aria-label="pagination">
    <ul className="pagination-list">
      <li>
        <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
      </li>
      <li>
        <a className="pagination-link" aria-label="Goto page 2">2</a>
      </li>
      <li>
        <a className="pagination-link" aria-label="Goto page 3">3</a>
      </li>
    </ul>
  </nav>
);

export default Pagination;