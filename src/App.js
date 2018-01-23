import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/css/App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Designs from './pages/Designs';
import CommunityOutreach from './pages/CommunityOutreach';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className='body'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/designs' component={Designs} />
            <Route exact path='/community-outreach' component={CommunityOutreach} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
