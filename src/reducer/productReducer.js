import ActionTypes from '../constants/ActionTypes';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default productReducer;
