import { handleActions } from 'redux-actions';
import { CUSTOMER } from 'store/action-types';

const defaultState = {
  all: [],
  selectedId: null,
};

export default handleActions(
  {
    [`${CUSTOMER.GET}_FULFILLED`]: (state, action) => {
      debugger;
      return {
        ...state,
        all: action.payload.data
      };
    },
    [CUSTOMER.SELECT]: (state, action) => {
      debugger;
      return {
        ...state,
        selectedId: action.payload
      };
    },
  },
  defaultState
);
