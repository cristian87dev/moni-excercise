import React from 'react';
import { Route } from 'react-router-dom';

import './styles.css';

import PrestamoRoute from './PrestamoRoute';
import CustomerManagerRoute from './CustomerManagerRoute';
const Dashboard = () => <h1>Dashboard</h1>;

const Routes = () => (
  <main className="main">
    <Route exact path="/" component={Dashboard}/>
    <Route path="/pedi-tu-prestamo" component={PrestamoRoute}/>
    <Route path="/user-admin" component={CustomerManagerRoute}/>
  </main>
);

export default Routes;
