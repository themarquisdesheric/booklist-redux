import c from '../constants';

const paginationPages = (state = null, action) => {
  switch (action.type) {
    case c.CHANGE_RESULTS:
      return action.paginationPages;
    default:
      return state;
  }
};

export default paginationPages;