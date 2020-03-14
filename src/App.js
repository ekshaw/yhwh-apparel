import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';

import Navbar from './components/Navbar';
import Loading from './components/Loading';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StaffPage from './pages/StaffPage';
import DesignsPage from './pages/DesignsPage';
import ShopPage from './pages/ShopPage';
import PartnershipsPage from './pages/PartnershipsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/staff' component={StaffPage} />
              <Route exact path='/designs' component={DesignsPage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/partnerships' component={PartnershipsPage} />
            </Switch>
          </Fragment>
        </Router>
      );
    }
  }
}

export default App;
