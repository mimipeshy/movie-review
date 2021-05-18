import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
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

it('matches snapshot Navbar', () => {
  const nav = renderer.create(
    <Router>
      <Route>
        <Navbar />
      </Route>
    </Router>,
  ).toJSON();
  expect(nav).toMatchSnapshot();
});
