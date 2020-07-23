import React from 'react';
import '../styles/PartnershipsPage.css';
import PartnershipsPageDesktop from './desktop/PartnershipsPageDesktop';
import PartnershipsPageMobile from './mobile/PartnershipsPageMobile';
import { useMediaQuery } from 'react-responsive';

const PartnershipsPage = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 480px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <PartnershipsPageDesktop />
        </>
      )}

      {isMobile && (
        <>
          <PartnershipsPageMobile />
        </>
      )}
    </div>
  );
};

export default PartnershipsPage;
