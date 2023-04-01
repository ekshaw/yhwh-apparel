import React from 'react';
import VideoHomePageDesktop from './desktop/VideoHomePageDesktop';
import VideoHomePageMobile from './mobile/VideoHomePageMobile';
import { useMediaQuery } from 'react-responsive';

const VideoHomePage = props => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 481px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          {/*<NewDropOverlayDesktop />*/}
          <VideoHomePageDesktop />
        </>
      )}

      {isMobile && (
        <>
          {/* <MobileDropOverlay /> */}
          <VideoHomePageMobile />
        </>
      )}
    </div>
  );
};

export default VideoHomePage;
