import yumiProduct from '../images/home-products/yumi.jpg';
import selah from '../images/home-products/selah.jpg';
import ryan from '../images/home-products/ryan.jpg';

import iam from '../images/carousel/iam.jpg';
import iamGroup from '../images/carousel/iam-group.jpg';
import yumiCarousel from '../images/carousel/yumi.jpg';

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
  slides: [iam, iamGroup, yumiCarousel],
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
