import React, { Fragment, Component } from 'react';
import '../styles/MobileNav.css';
import { Link } from 'react-router-dom';

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide_menu: true,
      background_index: 0,
      curr_background: ['', '#D3C3C7'],
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

  //   // Close the dropdown menu if the user clicks outside of it
  //   window.onclick = function (event) {
  //     if (!event.target.matches('.hamburger-menu')) {
  //       var dropdowns = document.getElementsByClassName('menubar-text');
  //       var i;
  //       document.getElementById('menubar').style.backgroundColor = '';
  //       for (i = 0; i < dropdowns.length; i++) {
  //         var openDropdown = dropdowns[i];
  //         if (openDropdown.classList.contains('show')) {
  //           openDropdown.classList.remove('show');
  //         }
  //       }
  //     }
  //   };

  render() {
    return (
      <div>
        <div
          onClick={this.click}
          className={'hamburger-icon' + (this.state.hide_menu ? '' : ' fixed')}
        >
          <img src={require('../images/hamburger_menu.svg')} id='hamburger-icon'></img>
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
              <li>
                <Link to='/about' className='menubar-text'>
                  ABOUT YHWH
                </Link>
              </li>
              <li>
                <Link to='/staff' className='menubar-text'>
                  OUR TEAM
                </Link>
              </li>
              <li>
                <Link to='/designs' className='menubar-text'>
                  DESIGNS
                </Link>
              </li>
              <li>
                <Link to='/shop' className='menubar-text'>
                  SHOP
                </Link>
              </li>
              <li>
                <Link to='/partnerships' className='menubar-text'>
                  PARTNERSHIPS
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNav;