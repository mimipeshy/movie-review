import ActionTypes from '../constants/ActionTypes';

const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});
const selectedProduct = (products) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: products,
});
const removeSelectedProduct = (products) => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  payload: products,
});

export {
  setProducts,
  selectedProduct,
  removeSelectedProduct,
};
