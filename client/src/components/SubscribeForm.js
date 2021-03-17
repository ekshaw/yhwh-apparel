import React, { Component } from 'react';
import FlashMessage from 'react-flash-message';

class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      showSuccessMessage: false,
      showFailMessage: false,
      showAlreadySubscribedMessage: false,
      buttonText: 'SUBMIT'
    };
  }

  onSubscriptionButtonClick = async e => {
    const { fname, lname, email } = this.state;
    const { hostname: location } = window.location;

    await this.setState({
      showSuccessMessage: false,
      showFailMessage: false,
      showAlreadySubscribedMessage: false,
      buttonText: '...loading'
    });

    if (!fname || !lname) {
      this.setState({
        showFailMessage: true,
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

      if (body == 'OK') {
        this.setState({
          showSuccessMessage: true,
          fname: '',
          lname: '',
          email: '',
          buttonText: 'SUBMIT'
        });
      } else {
        const bodyResponse = JSON.parse(body).title;
        if (bodyResponse == 'Member Exists') {
          this.setState({
            showAlreadySubscribedMessage: true,
            fname: '',
            lname: '',
            email: '',
            buttonText: 'SUBMIT'
          });
        } else {
          this.setState({
            showFailMessage: true,
            fname: '',
            lname: '',
            email: '',
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
        {this.state.showSuccessMessage && (
          <div>
            <FlashMessage duration={5000}>
              <h4>You're subscribed!</h4>
            </FlashMessage>
          </div>
        )}
        {this.state.showFailMessage && (
          <div>
            <FlashMessage duration={5000}>
              <h4>Something went wrong. Try again?</h4>
            </FlashMessage>
          </div>
        )}
        {this.state.showAlreadySubscribedMessage && (
          <div>
            <FlashMessage duration={5000}>
              <h4>You're already subscribed!</h4>
            </FlashMessage>
          </div>
        )}
      </div>
    );
  }
}

export default SubscribeForm;
