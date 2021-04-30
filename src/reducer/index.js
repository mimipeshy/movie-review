import { combineReducers, createStore } from 'redux';
import { productReducer } from './productReducer ';

const reducers = combineReducers({
  allProducts: productReducer,
});

const store = createStore(reducers, {});

export default store;
