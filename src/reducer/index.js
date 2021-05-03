import { combineReducers } from 'redux';
import productReducer from './ProductReducer';

const reducers = combineReducers({
  allProducts: productReducer,
});

// const store = createStore(reducers, {});

export default reducers;
