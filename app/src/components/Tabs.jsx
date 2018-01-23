import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ filters, icons, visibilityFilter }) => {
  return (
    <div className="tabs is-fullwidth is-toggle">
      {filters.map( (filter, i) => {
        const Icon = icons[i];

        return (
          <Tab 
            key={filter}
            value={filter}
            visibilityFilter={visibilityFilter}
          >
            <Icon />
          </Tab>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  icons: PropTypes.arrayOf(PropTypes.func).isRequired,
  visibilityFilter: PropTypes.string.isRequired
};

export default Tabs;
