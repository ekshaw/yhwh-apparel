import React from 'react';
import HomePageDesktop from './desktop/HomePageDesktop';
import NewDropOverlayDesktop from '../components/NewDropOverlayDesktop';
import NewsletterOverlay from '../components/NewsletterOverlay';
import MobileNewsletterOverlay from '../components/MobileNewsletterOverlay';
import MobileDropOverlay from '../components/MobileDropOverlay';
import HomePageMobile from './mobile/HomePageMobile';
import { useMediaQuery } from 'react-responsive';

const HomePage = props => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 480px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <NewsletterOverlay />
          <HomePageDesktop />
        </>
      )}

      {isMobile && (
        <>
          <MobileNewsletterOverlay />
          <HomePageMobile />
        </>
      )}
    </div>
  );
};

export default HomePage;
