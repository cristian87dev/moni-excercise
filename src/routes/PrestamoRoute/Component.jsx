import React, { Component } from 'react';

import SectionTitle from 'components/SectionTitle';
import InputField from 'components/InputField';
import { SubmitBtn } from 'components/Button';

import config from './config.json';

import './PrestamoRoute.css';

class PrestamoRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined,
      surname: undefined,
      documentNumber: undefined,
      email: undefined,
      gender: undefined,
      loanMount: undefined
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment(2);
  }

  decrement() {
    this.props.decrement(4);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();

    const { name, surname, documentNumber, email, gender, loanMount } = this.state;

    this.props.submit({
      name, surname, documentNumber, email, gender, loanMount
    });
    console.log('Test Submit');
  }

  render() {

    return (
      <section className="section prestamo-route">
        <SectionTitle>Pedí Tu Prestamo</SectionTitle>
        <form onSubmit={this.onSubmit}>
          <div className="fields-group">
            <InputField name="Counter" value={this.props.counter} onChange={this.handleChange} />
            <button type="button" onClick={this.increment}>Increment</button>
            <button type="button" onClick={this.decrement}>Decrement</button>
          </div>
          <div className="fields-group">
            <InputField name="name" placeholder="Nombre" onChange={this.handleChange} value={this.state.name} />
            <InputField name="surname" placeholder="Apellido" onChange={this.handleChange} value={this.state.surname} />
            <InputField name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
          </div>
          <div className="fields-group">
            <InputField name="gender" placeholder="Género" type="select" options={config.gender} onChange={this.handleChange} value={this.state.gender} />
            <InputField name="documentNumber" placeholder="Número de Documento" type="number" onChange={this.handleChange} value={this.state.documentNumber} />
          </div>
          <div className="fields-group">
            <InputField name="loanMount" placeholder="Valor del Prestamo" type="number" onChange={this.handleChange} value={this.state.loanMount} />
          </div>
          <div className="form-actions">
            <SubmitBtn type="submit">
              Submit
            </SubmitBtn>
          </div>

        </form>
      </section>
    );
  }
}

export default PrestamoRoute;
