import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // To prevent Link dependency error.
import renderer from 'react-test-renderer';
import Nav from './index';

it('Nav renders without crashing', () => {
  const component = renderer.create(
    <Router>
      <Nav />
    </Router>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
