import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Spinner from '../Footer';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders spinner without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Spinner />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches spinner snapshot', () => {
  const spin = renderer.create(
    <Router>
      <Route>
        <Spinner />
      </Route>
    </Router>,
  ).toJSON();
  expect(spin).toMatchSnapshot();
});
