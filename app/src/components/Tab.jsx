import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ setFilter, active, value, children }) => {
  return (
    <li onClick={setFilter} className={active ? 'is-active' : ''}>
      <a href={e => e.preventDefault()}>
        <span className="icon is-small">{children}</span>
        <span>{value}</span>
      </a>
    </li>
  );
};

Tab.propTypes = {
  setFilter: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Tab;
