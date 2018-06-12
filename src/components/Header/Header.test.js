import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // To prevent Link dependency error.
import renderer from 'react-test-renderer';
import Header from './index';

it('Header renders without crashing', () => {
  const component = renderer.create(
    <Router>
      <Header />
    </Router>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
