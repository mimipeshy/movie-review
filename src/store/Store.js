import { createStore } from 'redux';

import reducers from '../reducers/Index';

const store = createStore(
  reducers,
  {},
);

export default store;
