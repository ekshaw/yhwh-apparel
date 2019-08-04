import yumiProduct from '../images/home-products/yumi.jpg';
import selah from '../images/home-products/selah.jpg';
import ryan from '../images/home-products/ryan.jpg';

import iAm from '../images/carousel/iam.jpg';
import iAmGroup from '../images/carousel/iam-group.jpg';
import yumiCarousel from '../images/carousel/yumi.jpg';
import setApart from '../images/carousel/set-apart.jpg';
import setApartGroup from '../images/carousel/set-apart-group.jpg';
import sticker from '../images/carousel/sticker.jpg';
import adonaiGroup from '../images/carousel/adonai-group.jpg';

const instafeedTarget = 'instafeed';

const home = {
  products: [
    {
      img: yumiProduct,
      url:
        'http://yhwhapparel.storenvy.com/products/14971326-classic-sweatshirt'
    },
    {
      img: selah,
      url: 'http://yhwhapparel.storenvy.com/products/19871123-selah'
    },
    {
      img: ryan,
      url:
        'http://yhwhapparel.storenvy.com/products/14971326-classic-sweatshirt'
    }
  ],
  slides: [
    adonaiGroup,
    iAm,
    setApartGroup,
    iAmGroup,
    setApart,
    yumiCarousel,
    sticker
  ],
  instafeedTarget: instafeedTarget,
  instafeedSettings: {
    limit: '10',
    ref: 'instafeed',
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    target: instafeedTarget,
    template:
      '<div class="home-instafeed__img"><a href="{{link}}"><img src="{{image}}" width=100%></a></div>',
    userId: '2189584280',
    accessToken: '2189584280.1677ed0.cf0a6d5a22d24fa7b54114142f5f10a3'
  }
};

export default home;
