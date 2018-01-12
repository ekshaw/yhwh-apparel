import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './styles/css/App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Designs from './pages/Designs';
import CommunityOutreach from './pages/CommunityOutreach';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/designs' component={Designs} />
          <Route exact path='/communtiy_outreach' component={CommunityOutreach} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
