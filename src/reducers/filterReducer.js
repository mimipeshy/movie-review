import ActionTypes from '../constants/action-types';

const initialState = { items: [], filteredItems: [], category: '' };

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SORT_BY_CATEGORY:
      return { ...state, filteredItems: action.payload.items, category: action.payload.category };
    default:
      return state;
  }
};
export default filterReducer;
