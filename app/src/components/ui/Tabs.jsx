import React from 'react';
import PropTypes from 'prop-types';
import BookIcon from 'react-icons/lib/fa/book';
import CheckIcon from 'react-icons/lib/fa/check-square';
import Tab from './Tab';

const Tabs = ({ visibilityFilter }) => {
  const filters = ['Reading List', 'Finished Books'];
  const icons = [BookIcon, CheckIcon];

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
  visibilityFilter: PropTypes.string.isRequired
};

export default Tabs;
