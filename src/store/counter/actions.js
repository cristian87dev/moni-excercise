import { createAction } from 'redux-actions';

import { COUNTER } from 'store/action-types';

export const increment = createAction(COUNTER.INCREMENT);
export const decrement = createAction(COUNTER.DECREMENT);
