import { createAction } from 'redux-actions';

import { CUSTOMER } from 'store/action-types';
import * as api from './api';

export const getCustomer = createAction(CUSTOMER.GET, () => api.getCustomer());
export const selectCustomer = createAction(CUSTOMER.SELECT);

export const createCustomer = function (customer) {
  return dispatch => {
    api.createCustomer(customer).then( // TODO: Improve to Redux-Saga or similar
      res => dispatch(getCustomer())
    );
  };
}
export const updateCustomer = function (customerId, customer) {
  return dispatch => {
    api.updateCustomer(customerId, customer).then( // TODO: Improve to Redux-Saga or similar
      res => dispatch(getCustomer())
    );
  };
}
export const deleteCustomer = function (customerId) {
  return dispatch => {
    api.deleteCustomer(customerId).then( // TODO: Improve to Redux-Saga or similar
      res => dispatch(getCustomer())
    );
  };
}
