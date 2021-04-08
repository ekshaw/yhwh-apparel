import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import '../styles/Main.css';

import Navbar from './Navbar';
import MobileNav from './MobileNav';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import StaffPage from '../pages/StaffPage';
import DesignsPage from '../pages/DesignsPage';
import ShopPage from '../pages/ShopPage';
import PartnershipsPage from '../pages/PartnershipsPage';
import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';
import { useMediaQuery } from 'react-responsive';

const Main = ({ location }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 480px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <Fragment>
      {isDesktopOrLaptop && (
        <>
          <Navbar />
        </>
      )}

      {isMobile && (
        <>
          <MobileNav />
        </>
      )}
      <TransitionGroup className='transition-group'>
        <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
          <section className='route-section'>
            <Switch location={location}>
              <Route exact path='/' component={HomePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/staff' component={StaffPage} />
              <Route path='/designs' component={DesignsPage} />
              <Route path='/shop' component={ShopPage} />
              <Route path='/partnerships' component={PartnershipsPage} />
              <Route path='/product' component={ProductPage} />
              <Route path='/checkout' component={CheckoutPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default withRouter(Main);
