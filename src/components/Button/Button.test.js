import React from 'react';
import renderer from 'react-test-renderer';
import { Button, SubmitBtn } from './index';

it('Button renders without crashing', () => {
  const onClick = jest.fn();
  const component = renderer.create(
    <Button type="" onClick={onClick} />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('SubmitBtn renders without crashing', () => {
  const component = renderer.create(
    <SubmitBtn />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
