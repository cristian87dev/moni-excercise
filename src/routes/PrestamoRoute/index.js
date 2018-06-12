import { connect } from 'react-redux';

import { increment, decrement } from 'store/counter/actions';
import { submit } from 'store/prestamo/actions';

import Component from './Component';

const mapStateToProps = state => {
  return {
    counter: state.counter.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: value => {
      dispatch(increment(value))
    },
    decrement: value => {
      dispatch(decrement(value))
    },
    submit: () => dispatch(submit())
  }
}

const PrestamoRouteComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default PrestamoRouteComponent;
