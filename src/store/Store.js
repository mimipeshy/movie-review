import { createStore } from 'redux';
import reducers from '../reducer/Index';

const store = createStore(reducers, {});

export default store;
