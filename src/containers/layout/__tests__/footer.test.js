import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders footer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

