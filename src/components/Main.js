import React, { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import '../styles/Main.css';

import VideoHomePage from '../pages/VideoHomePage';
import { useMediaQuery } from 'react-responsive';

const Main = () => {
  const location = useLocation();
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
            <Routes location={location}>
              <Route path='/' element={<VideoHomePage />} />
            </Routes>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default Main;
