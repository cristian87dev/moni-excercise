import React from 'react';
import renderer from 'react-test-renderer';
import SectionTitle from './index';

it('SectionTitle renders without crashing', () => {
  const component = renderer.create(
    <SectionTitle>Test Content</SectionTitle>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
