import c from '../constants';

const visibilityFilter = (state = 'reading-list', action) => {
  switch (action.type) {
    case c.SET_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default visibilityFilter;
