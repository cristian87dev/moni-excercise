import React from 'react';
import renderer from 'react-test-renderer';
import InputField from './index';

it('Basic-InputField renders without crashing', () => {
  const onChange = jest.fn();
  const component = renderer.create(
    <InputField name="test" onChange={onChange} />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Select-InputField renders without crashing', () => {
  const onChange = jest.fn();
  const options = [{ name: 'name', value: 'value' }];
  const component = renderer.create(
    <InputField type="select" name="test" onChange={onChange} options={options} />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
