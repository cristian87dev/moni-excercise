import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './index';

it('renders without crashing', () => {
  const component = renderer.create(
    <App />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
