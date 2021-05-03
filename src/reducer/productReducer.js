import ActionTypes from '../constants/ActionTypes';

const initialState = {
  product: [{
    id: 1,
    title: '...',
    price: '...',
    category: '...',
    description: '...',
    image: '...',
  }],
};

const productReducer = (state = initialState, { type }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default productReducer;
