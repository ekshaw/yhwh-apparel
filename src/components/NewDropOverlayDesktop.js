import React, { Component } from 'react';
import FlashMessage from 'react-flash-message'
import '../styles/NewDropOverlayDesktop.css';

class NewDropOverlayDesktop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropOverlayHidden: false,
      fname: '',
      lname: '',
      email: '',
      flashMsgTxt: '',
      showFlasgMsg: false,
      buttonText: 'SUBMIT'
    }
  }

  onSubscriptionButtonClick = async e => {
    const { fname, lname, email } = this.state;
    const { hostname: location } = window.location;

    await this.setState({
      showFlashMsg: false,
      buttonText: '...loading'
    });

    if (!fname || !lname || !email) {
      this.setState({
        flashMsgTxt: 'Please check that your inputs are valid!',
        showFlashMsg: true,
        buttonText: 'SUBMIT'
      });
    } else {
      e.preventDefault();
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name: fname, last_name: lname, email: email })
      });
      const body = await response.text();

      if (body === 'OK') {
        this.setState({
          flashMsgTxt: "You're subscribed!",
          showFlashMsg: true,
          fname: '',
          lname: '',
          email: '',
          buttonText: 'SUBMIT'
        });
      } else {
        const bodyResponse = JSON.parse(body).title;
        if (bodyResponse === 'Member Exists') {
          this.setState({
            flashMsgTxt: "You're already subscribed!",
            showFlashMsg: true,
            fname: '',
            lname: '',
            email: '',
            buttonText: 'SUBMIT'
          });
        } else {
          this.setState({
            flashMsgTxt: 'Something went wrong! Try again?',
            showFlashMsg: true,
            buttonText: 'SUBMIT'
          });
        }
      }
    }
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onXClick = () => {
    this.setState({ dropOverlayHidden: true })
  }

  render() {
    if (this.state.dropOverlayHidden) {
      return <div></div>;
    }
    return (
      <div className='new-drop-container'>
        <div className='new-drop-overlay' onClick={this.onXClick}></div>
        <div className='new-drop-content-container'>
          <img className='new-drop-overlay-img' src={require('../images/home/offseason.png')} />
          <div className='new-drop-overlay-exit-btn' onClick={this.onXClick}>
            <h3>X</h3>
          </div>
          <div className='new-drop-overlay-header'><h3>FALL 2021</h3></div>
          <div className='new-drop-overlay-header-underline'></div>
          <div className='new-drop-overlay-title'>Subscribe to us</div>
          <div className='new-drop-overlay-subtitle'>We'd love to stay in touch with you!</div>
          <div className='new-drop-overlay-form-title'>Our Newsletter</div>
          <div className="new-drop-overlay-form">
            <div className='new-drop-field'>
              <label>
                <input
                  class='new-drop-overlay-input'
                  type='text'
                  id='first-name-input'
                  name='fname'
                  value={this.state.fname}
                  required
                  placeholder='First Name'
                  outline='none'
                  onChange={e => this.handleChange(e)}
                />
              </label>
            </div>
            <div className='new-drop-field'>
              <label>
                <input
                  class='new-drop-overlay-input'
                  type='text'
                  id='last-name-input'
                  name='lname'
                  value={this.state.lname}
                  required
                  placeholder='Last Name'
                  onChange={e => this.handleChange(e)}
                />
              </label>
            </div>
            <div className='new-drop-field'>
              <label>
                <input
                  class='new-drop-overlay-input'
                  type='text'
                  id='email-input'
                  name='email'
                  value={this.state.email}
                  required
                  placeholder='Email'
                  onChange={e => this.handleChange(e)}
                />
              </label>
            </div>
            {/* <div className='subscribe_form-submit-btn' onClick={this.onSubscriptionButtonClick}>
              <h4>{this.state.buttonText}</h4>
            </div>
            {this.state.showFlashMsg && (
              <div>
                <FlashMessage duration={5000}>
                  <h4>{this.state.flashMsgTxt}</h4>
                </FlashMessage>
              </div>
            )} */}
            </div>
          <div className='new-drop-overlay-order-btn' onClick={this.onSubscriptionButtonClick}>
            <h4>SUBSCRIBE NOW</h4>
          </div>
          {this.state.showFlashMsg && (
              <div>
                <FlashMessage duration={5000}>
                  <h4>{this.state.flashMsgTxt}</h4>
                </FlashMessage>
              </div>
            )}
        </div>
      </div>
    );
  }
};

export default NewDropOverlayDesktop;

