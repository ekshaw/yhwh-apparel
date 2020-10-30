import React, { Fragment, Component } from 'react';
import '../styles/MobileNav.css';
import { Link } from 'react-router-dom';

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide_menu: true,
      background_index: 0,
      curr_background: ['', '#d3cec7'],
    };
  }

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  click = () => {
    this.setState({
      hide_menu: !this.state.hide_menu,
      background_index: (this.state.background_index + 1) % 2,
    });
    console.log(this.state.background_index);
    // document.getElementById('myDropdown').classList.toggle('show');
    // if (document.getElementById('menubar').style.backgroundColor == '') {
    //   document.getElementById('menubar').style.backgroundColor = '#D3CEC7';
    // } else {
    //   document.getElementById('menubar').style.backgroundColor = '';
    // }
  };

  render() {
    return (
      <div>
        <div className='mobile-logo'>
          <Link to='/'>
            <img
              src={require('../images/logo.png')}
              alt='Logo'
              id='logo-image'
            />
          </Link>
        </div>
        <div
          onClick={this.click}
          className={'hamburger-icon' + (this.state.hide_menu ? '' : ' fixed')}
        >
          <img
            src={require('../images/hamburger_menu.svg')}
            id='hamburger-icon'
          ></img>
        </div>
        <div
          id='menubar'
          className={this.state.hide_menu ? 'hide' : ''}
          style={{
            backgroundColor: this.state.curr_background[
              this.state.background_index
            ],
          }}
        >
          <div className='menu-items-holder'>
            <div id='myDropdown' className='menubar-text'>
              <Link to='/about' className='menubar-text'>
                <h4>ABOUT YHWH</h4>
              </Link>
              <Link to='/staff' className='menubar-text'>
                <h4>OUR TEAM</h4>
              </Link>
              <Link to='/designs' className='menubar-text'>
                <h4>DESIGNS</h4>
              </Link>
              {/* <Link to='/shop' className='menubar-text'>
                <h4>SHOP</h4>
              </Link> */}
              <a href='https://yhwhapparel.storenvy.com/products' className='menubar-text'>
                <h4 className='mobile-navlink'>SHOP</h4>
              </a>
              <Link to='/partnerships' className='menubar-text'>
                <h4>PARTNERSHIPS</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNav;
