import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar';

afterEach(cleanup);

it('renders NavBar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Route>
        <Navbar />
      </Route>
    </Router>,
    div,
  );
});

