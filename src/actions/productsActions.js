import ActionTypes from '../constants/action-types';

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});
export const removeSelectedProduct = () => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
});
export const changeFilter = (filter) => ({
  type: ActionTypes.CHANGE_FILTER,
  payload: filter,
});

// export const filterProductsByCategory = (products, category) => (dispatch) => dispatch({
//   type: ActionTypes.SORT_BY_CATEGORY,
//   payload: {
//     category,
//     items: category === '' ? products : products.filter((product) => product.category),
//   },
// });
