import React, { Component } from 'react';

import SectionTitle from 'components/SectionTitle';
import InputField from 'components/InputField';
import { Button } from 'components/Button';

import config from './config.json';

import './CustomerManagerRoute.css';

class CustomerManagerRoute extends Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);

    this.props.getCustomer();
  }

  onSave(event) {
    event.preventDefault();
    console.log('Test Submit');
  }

  onDelete(event) {
    event.preventDefault();
    console.log('Test Submit');
  }

  onDelete(event) {
    event.preventDefault();
    console.log('Test Submit');
  }

  _buildCustomersItems(customersList) {
    return Object.keys(customersList).map(
      key => {
        const { nombre, apellido } = customersList[key];
        return <li key={key} className="customers-item">
          { `${nombre} ${apellido}` }
        </li>;
      }
    );
  }

  render() {
    console.log(this.props.customers);
    const customersItems = this._buildCustomersItems(this.props.customers);

    return (
      <section className="section customers-manager-route">
        <SectionTitle>Pedí Tu Prestamo</SectionTitle>
        <div className="area">
          <div className="area-section customers-list">
            <h3 className="area-title">Clientes</h3>
            <ul>
              {customersItems}
            </ul>
          </div>

          <div className="area-section customers-form">
            <h3 className="area-title">Detalle</h3>

            <form onSubmit={this.onSubmit}>
              <div className="fields-group">
                <InputField name="Nombre" />
                <InputField name="Apellido" />
                <InputField name="Género" type="select" options={config.gender} />
              </div>
              <div className="fields-group">
                <InputField name="Email"  />
                <InputField name="Número de Documento" type="number" />
              </div>
              <div className="form-actions">
                <Button type="submit" onClick={this.onSave}>Save</Button>
                <Button type="submit" onClick={this.onSave}>Save</Button>
                <Button type="submit" onClick={this.onSave}>Save</Button>
              </div>
            </form>
            </div>
        </div>
      </section>
    );
  }
}

export default CustomerManagerRoute;
