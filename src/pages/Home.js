import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeProducts from '../components/HomeProducts';
import HomeInstagramFeed from '../components/HomeInstagramFeed';


const Home = ({ content: { slides, products, instafeedSettings, instafeedTarget }}) => {
  return (
    <div className='home'>
      <HomeCarousel slides={slides} />
      <HomeProducts products={products} />
      <HomeInstagramFeed
        instafeedSettings={instafeedSettings}
        instafeedTarget={instafeedTarget}
      />
    </div>
  );
}

export default Home;
