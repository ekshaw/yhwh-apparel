import yumiProduct from '../images/home-products/yumi.jpg';
import selah from '../images/home-products/selah.jpg';
import ryan from '../images/home-products/ryan.jpg';

import iAmGroup from '../images/carousel/iam-group.jpg';
import setApartGroup from '../images/carousel/set-apart-group.jpg';
import sticker from '../images/carousel/sticker.jpg';
import adonaiGroup from '../images/carousel/adonai-group.jpg';
import whalePin from '../images/carousel/whale-pin.jpg';
import foundGroup from '../images/carousel/found-group.jpg';
import enduranceGroup from '../images/carousel/endurance-group.jpg';

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
    enduranceGroup,
    adonaiGroup,
    setApartGroup,
    foundGroup,
    iAmGroup,
    sticker,
    whalePin
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
