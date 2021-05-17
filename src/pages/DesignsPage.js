import React from 'react';
import DesignsPageDesktop from './desktop/DesignsPageDesktop';
import DesignsPageMobile from './mobile/DesignsPageMobile';
import { useMediaQuery } from 'react-responsive';

const DesignsPage = props => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 481px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <DesignsPageDesktop />
        </>
      )}

      {isMobile && (
        <>
          <DesignsPageMobile />
        </>
      )}
    </div>
  );
};

export default DesignsPage;
