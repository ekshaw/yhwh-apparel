import React, { Component } from 'react';
import FlashMessage from 'react-flash-message';
import '../styles/SubscribeFormOverlay.css';

class SubscribeFormOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      flashMsgTxt: '',
      showFlasgMsg: false,
      buttonText: 'SUBSCRIBE NOW'
    };
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
        buttonText: 'SUBSCRIBE NOW'
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
          buttonText: 'SUBSCRIBE NOW'
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
            buttonText: 'SUBSCRIBE NOW'
          });
        } else {
          this.setState({
            flashMsgTxt: 'Something went wrong! Try again?',
            showFlashMsg: true,
            buttonText: 'SUBSCRIBE NOW'
          });
        }
      }
    }
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='overlay-form-input-container'>
        <div className='overlay-form-field first-name-field'>
          <label>
            <input
              type='text'
              id='first-name-input'
              name='fname'
              placeholder='First Name'
              value={this.state.fname}
              required
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div className='overlay-form-field last-name-field'>
          <label>
            <input
              type='text'
              id='last-name-input'
              name='lname'
              placeholder='Last Name'
              value={this.state.lname}
              required
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div className='overlay-form-field email-field'>
          <label>
            <input
              type='text'
              id='email-input'
              name='email'
              placeholder='Email'
              value={this.state.email}
              required
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div className='subscribe-form-overlay-submit-btn' onClick={this.onSubscriptionButtonClick}>
          <h4>{this.state.buttonText}</h4>
        </div>
        {this.state.showFlashMsg && (
          <div className='subscribe-form-overlay-flash-msg'>
            <FlashMessage duration={5000}>
              <h4>{this.state.flashMsgTxt}</h4>
            </FlashMessage>
          </div>
        )}
      </div>
    );
  }
}

export default SubscribeFormOverlay;
