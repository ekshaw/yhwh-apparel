import React, { Component } from 'react';
import FlashMessage from 'react-flash-message';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      showSuccessMessage: false,
      showFailMessage: false,
      buttonText: 'SUBMIT'
    };
  }

  onContactButtonClick = async e => {
    const { name, email, message } = this.state;
    const { hostname: location } = window.location;
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    await this.setState({
      showSuccessMessage: false,
      showFailMessage: false,
      buttonText: '...sending'
    });

    if (!regEmail.test(email) || !name || !message) {
      this.setState({
        showFailMessage: true,
        buttonText: 'SUBMIT'
      });
    } else {
      e.preventDefault();
      const response = await fetch(`http://${location}:5000/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email, message: message })
      });
      const body = await response.text();

      if (body == '{"status":"Message Sent"}') {
        this.setState({
          showSuccessMessage: true,
          name: '',
          email: '',
          message: '',
          buttonText: 'SUBMIT'
        });
      } else {
        this.setState({
          showFailMessage: true,
          name: '',
          email: '',
          message: '',
          buttonText: 'SUBMIT'
        });
      }
    }
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='form-input-container'>
        <div className='form-field name-field'>
          <h4>NAME:</h4>
          <label>
            <input
              type='text'
              id='name-input'
              name='name'
              value={this.state.name}
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
        <div className='form-field message-field'>
          <h4>MESSAGE:</h4>
          <label>
            <input
              type='text'
              id='message-input'
              name='message'
              value={this.state.message}
              required
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div className='contact_form-submit-btn' onClick={this.onContactButtonClick}>
          <h4>{this.state.buttonText}</h4>
        </div>
        {this.state.showSuccessMessage && (
          <div>
            <FlashMessage duration={5000}>
              <h4>Message Sent!</h4>
            </FlashMessage>
          </div>
        )}
        {this.state.showFailMessage && (
          <div>
            <FlashMessage duration={5000}>
              <h4>Something went wrong!</h4>
            </FlashMessage>
          </div>
        )}
      </div>
    );
  }
}

export default ContactForm;
