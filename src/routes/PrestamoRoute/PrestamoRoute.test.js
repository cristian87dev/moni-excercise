jest.unmock('redux-mock-store');

import React from 'react'; // eslint-disable-line
import configureStore from 'redux-mock-store'; // eslint-disable-line
import { Provider } from 'react-redux'; // eslint-disable-line
import thunk from 'redux-thunk'; // eslint-disable-line
import renderer from 'react-test-renderer'; // eslint-disable-line
import LoanRoute from './index'; // eslint-disable-line

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store = null;

beforeEach(()=>{
  const initialState = { prestamo: { }, counter: { } };
  store = mockStore(initialState)
})

it('LoanRoute renders without crashing', () => {
  const component = renderer.create(
    <Provider store={store}>
      <LoanRoute />
    </Provider>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
