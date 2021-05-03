import { combineReducers } from 'redux';
import { productReducer, selectedProductsReducer } from './ProductReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
});

export default reducers;
