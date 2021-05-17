import React from 'react';
import AboutPageDesktop from './desktop/AboutPageDesktop';
import AboutPageMobile from './mobile/AboutPageMobile';
import { useMediaQuery } from 'react-responsive';

const AboutPage = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 481px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <AboutPageDesktop />
        </>
      )}

      {isMobile && (
        <>
          <AboutPageMobile />
        </>
      )}
    </div>
  );
};

export default AboutPage;
