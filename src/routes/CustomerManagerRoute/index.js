import { connect } from 'react-redux';

import { getCustomer, createCustomer, updateCustomer, deleteCustomer } from 'store/customer-manager/actions';

import Component from './Component';

const mapStateToProps = state => {
  return {
    customers: state.customerManager.all
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCustomer: () => {
      dispatch(getCustomer())
    },
    createCustomer: customer => {
      dispatch(createCustomer(customer))
    },
    updateCustomer: (customerId, customer) => {
      dispatch(updateCustomer(customerId, customer))
    },
    deleteCustomer: customerId => {
      dispatch(deleteCustomer(customerId))
    }
  }
}

const PrestamoRouteComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default PrestamoRouteComponent;
