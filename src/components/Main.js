import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import '../styles/Main.css';

import VideoHomePage from '../pages/VideoHomePage';
import HomePage from '../pages/HomePage';
import { useMediaQuery } from 'react-responsive';

const Main = ({ location }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 481px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <Fragment>
      {/*isDesktopOrLaptop && (
        <>
          <Navbar />
        </>
      )*/}

      {/*isMobile && (
        <>
          <MobileNav />
        </>
      )*/}
      <TransitionGroup className='transition-group'>
        <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
          <section className='route-section'>
            <Switch location={location}>
              <Route exact path='/' component={VideoHomePage} />
              <Route exact path='/home' component={HomePage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default withRouter(Main);
