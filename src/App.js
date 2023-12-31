import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/App.css';

import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}

export default App;
