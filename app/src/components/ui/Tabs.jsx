import React from 'react';
import PropTypes from 'prop-types';
import BookIcon from 'react-icons/lib/fa/book';
import FilesIcon from 'react-icons/lib/fa/file-text';
import Tab from './Tab';

const Tabs = ({ visibilityFilter }) => {
  const filters = ['Reading List', 'Finished Books'];
  const icons = [BookIcon, FilesIcon];

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
