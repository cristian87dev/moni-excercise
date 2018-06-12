import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Routes from 'routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-layout">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
