import { ActionTypes } from '../constants/action-types';

const initialState = {
  product: [{
    id: 1,
    title: 'peris',
    category: 'fullstack',
  }],
};
const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default productReducer;
