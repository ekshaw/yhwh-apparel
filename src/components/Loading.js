import React, { Fragment } from 'react';
import '../styles/Loading.css';

const Loading = props => {
  return (
    <Fragment>
      <div className='loading_screen'>
        {/* <div className='loading_background'>
          <img
            src={require('../images/loading_background.png')}
            alt='loading'
          ></img>
        </div> */}
        <div className='loading_image'>
          <img src={require('../images/loading.png')} alt='loading'></img>
        </div>
        <div className='loading_logo'>
          <img
            src={require('../images/loading_logo.png')}
            alt='loading-logo'
          ></img>
        </div>
      </div>
    </Fragment>
  );
};

export default Loading;
