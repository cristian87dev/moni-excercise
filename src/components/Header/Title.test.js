import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // To prevent Link dependency error.
import renderer from 'react-test-renderer';
import HeaderTitle from './Title';

it('HeaderTitle renders without crashing', () => {
  const component = renderer.create(
    <Router>
      <HeaderTitle />
    </Router>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
