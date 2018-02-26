import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavContainer from '../containers/NavContainer';
import HomeContainer from '../containers/HomeContainer';
import DesignsContainer from '../containers/DesignsContainer';
import MissionsContainer from '../containers/MissionsContainer';
import OrganizationsContainer from '../containers/OrganizationsContainer';
import AboutContainer from '../containers/AboutContainer';
import FooterContainer from '../containers/FooterContainer';

class Main extends Component {
  render () {
    return (
      <div>
        <NavContainer />
        <div className='body'>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/designs' component={DesignsContainer} />
            <Route exact path='/missions' component={MissionsContainer} />
            <Route exact path='/organizations' component={OrganizationsContainer} />
            <Route exact path='/about' component={AboutContainer} />
          </Switch>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default Main;
