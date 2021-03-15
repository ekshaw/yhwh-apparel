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
      showFailMessage: false
    };
  }

  onSubscriptionButtonClick = async e => {
    const first_name = this.state.fname;
    const last_name = this.state.lname;
    const email = this.state.email;
    const { hostname: location } = window.location;
    console.log(first_name);
    console.log(last_name);

    this.setState({ showSuccessMessage: false, showFailMessage: false });
    e.preventDefault();
    const response = await fetch(`http://${location}:5000/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first_name: first_name, last_name: last_name, email: email })
    });
    const body = await response.text();
    console.log('result body: ', body);

    if (body == 'OK') {
      this.setState({ showSuccessMessage: true, fname: '', lname: '', email: '' });
    } else {
      this.setState({ showFailMessage: true, fname: '', lname: '', email: '' });
    }
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
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
          <h4>SUBMIT</h4>
        </div>
        {this.state.showSuccessMessage && (
          <div>
            <FlashMessage duration={5000}>
              <h4>Subscription succesful!</h4>
            </FlashMessage>
          </div>
        )}
        {this.state.showFailMessage && (
          <div>
            <FlashMessage duration={5000}>
              <h4>Subscription failed. You might already be subscribed!</h4>
            </FlashMessage>
          </div>
        )}
      </div>
    );
  }
}

export default SubscribeForm;
