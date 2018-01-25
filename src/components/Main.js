import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from '../pages/Home';
import Designs from '../pages/Designs';
import CommunityOutreach from '../pages/CommunityOutreach';
import About from '../pages/About';
import Footer from './Footer';

class Main extends Component {
  render () {
    const { home, about, designs, community, footer } = this.props.content;
    return (
      <div>
        <Nav />
        <div className='body'>
          <Switch>
            <Route exact path='/' component={(props) => <Home content={home} />} />
            <Route exact path='/designs' component={(props) => <Designs content={designs} />} />
            <Route exact path='/community-outreach' component={(props) => <CommunityOutreach content={community} />} />
            <Route exact path='/about' component={(props) => <About content={about} />} />
          </Switch>
        </div>
        <Footer content={footer} />
      </div>
    );
  }
}

export default Main;
