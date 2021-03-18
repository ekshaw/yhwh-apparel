import React from 'react';
import ShopPageDesktop from './desktop/ShopPageDesktop';
import ShopPageMobile from './mobile/ShopPageMobile';
import { useMediaQuery } from 'react-responsive';

const ShopPage = props => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 480px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <ShopPageDesktop />
        </>
      )}

      {isMobile && (
        <>
          <ShopPageMobile />
        </>
      )}
    </div>
  );
};

export default ShopPage;
