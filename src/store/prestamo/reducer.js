import { handleActions } from 'redux-actions';
import { PRESTAMO } from 'store/action-types';

const defaultState = {
  counter: 0
};

export default handleActions(
  {
    [PRESTAMO.SUBMIT]: (state, action) => ({
      counter: state.counter + action.payload
    }),
    [`${PRESTAMO.SUBMIT}_PENDING`]: (state, action) => {
      debugger;
      return {
        counter: state.counter + action.payload
      };
    },
  },
  defaultState
);
