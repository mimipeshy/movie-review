import ActionTypes from '../constants/action-types';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
export default filterReducer;
