import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders footer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches footer snapshot', () => {
  const foot = renderer.create(
    <Router>
      <Route>
        <Footer />
      </Route>
    </Router>,
  ).toJSON();
  expect(foot).toMatchSnapshot();
});
