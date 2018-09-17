import c from '../constants';

const results = (state = [], action) => {
  switch (action.type) {
    case c.CHANGE_RESULTS:
      return action.payload;

    case c.CLEAR_RESULTS:
      return [];
    
    default:
      return state;
  }
};

export default results;
