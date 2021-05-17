import React from 'react';
import StaffPageDesktop from './desktop/StaffPageDesktop';
import StaffPageMobile from './mobile/StaffPageMobile';
import { useMediaQuery } from 'react-responsive';

const StaffPage = props => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 481px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <StaffPageDesktop />
        </>
      )}

      {isMobile && (
        <>
          <StaffPageMobile />
        </>
      )}
    </div>
  );
};

export default StaffPage;
