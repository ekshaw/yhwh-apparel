import React, { Component } from 'react';
import FlashMessage from 'react-flash-message';

class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      flashMsgTxt: '',
      showFlasgMsg: false,
      buttonText: 'SUBMIT'
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
        buttonText: 'SUBMIT'
      });
    } else {
      e.preventDefault();
      const response = await fetch(`http://${location}:5000/signup`, {
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

  render() {
    return (
      <div className='form-input-container'>
        <div className='form-field first-name-field'>
          <h4>FIRST NAME:</h4>
          <label>
            <input
              type='text'
              id='first-name-input'
              name='fname'
              value={this.state.fname}
              required
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div className='form-field last-name-field'>
          <h4>LAST NAME:</h4>
          <label>
            <input
              type='text'
              id='last-name-input'
              name='lname'
              value={this.state.lname}
              required
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div className='form-field email-field'>
          <h4>EMAIL:</h4>
          <label>
            <input
              type='text'
              id='email-input'
              name='email'
              value={this.state.email}
              required
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div className='subscribe_form-submit-btn' onClick={this.onSubscriptionButtonClick}>
          <h4>{this.state.buttonText}</h4>
        </div>
        {this.state.showFlashMsg && (
          <div>
            <FlashMessage duration={5000}>
              <h4>{this.state.flashMsgTxt}</h4>
            </FlashMessage>
          </div>
        )}
      </div>
    );
  }
}

export default SubscribeForm;
