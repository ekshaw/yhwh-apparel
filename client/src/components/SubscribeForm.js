import React, { Component } from 'react';

class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: ''
    };
  }

  // onSubscriptionButtonClick = async e => {
  //   e.preventDefault();
  //   const { fname, lname, email } = this.state;

  //   const settings = {
  //     method: 'POST',
  //     body: { fname, lname, email },
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   };

  //   const response = await fetch('/signup', settings);
  //   // waits until the request completes...
  //   console.log(response);

  //   if (!response.ok) {
  //     const message = `An error has occured: ${response.status}`;
  //     throw new Error(message);
  //   } else {
  //     console.log('it worked!');
  //   }
  // };

  // onSubscriptionButtonClick = async () => {
  //   const { fname, lname, email } = this.state;
  //   const { hostname: location } = window.location;
  //   const settings = {
  //     method: 'POST',
  //     body: { fname, lname, email },
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   };

  //   const response = await fetch(`http://${location}:5000/api/newsletter-subscription`, settings);
  //   if (!response.ok) throw Error(response.message);

  //   try {
  //     const data = await response.json();
  //     return data;
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // onSubscriptionButtonClick = async e => {
  //   e.preventDefault();
  //   const { fname, lname, email } = this.state;
  //   console.log(fname);
  //   console.log(lname);
  //   console.log(email);

  //   const response = await fetch('/api/newsletter-subscription');
  //   console.log(response);
  //   console.log('it worked!');
  // };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  }

  render() {
    return (
      // <form action='http://localhost:5000/signup' method='POST'>
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
        <div className='subscribe_form-submit-btn'>
          <h4>SUBMIT</h4>
        </div>
        {/* <button type='submit' class='subscribe_form-submit-btn'>
          <h4>SUBMIT</h4>
        </button> */}
      </div>
      // </form>
    );
  }
}

export default SubscribeForm;
