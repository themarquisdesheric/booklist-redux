import c from '../constants';

const query = (state = '', action) => {
  switch (action.type) {
    case c.FETCH_BOOKS:
      return action.payload
    default:
      return state;
  }
};

export default query;
