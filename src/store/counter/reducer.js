import { handleActions } from 'redux-actions';
import { COUNTER } from 'store/action-types';

const defaultState = {
  value: 0
};

export default handleActions(
  {
    [COUNTER.INCREMENT]: (state, action) => ({
      value: state.value + action.payload
    }),
    [COUNTER.DECREMENT]: (state, action) => ({
      value: state.value - action.payload
    }),
  },
  defaultState
);
