import React from 'react';
import ProductPageDesktop from './desktop/ProductPageDesktop';
import ProductPageMobile from './mobile/ProductPageMobile';
import { useMediaQuery } from 'react-responsive';

const ProductPage = props => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 481px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <ProductPageDesktop location={props.location.search} />
        </>
      )}

      {isMobile && (
        <>
          <ProductPageMobile location={props.location.search} />
        </>
      )}
    </div>
  );
};

export default ProductPage;
