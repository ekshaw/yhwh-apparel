import React, { Component } from 'react';
import '../styles/AboutPageForm.css';
import ContactForm from './ContactForm';
import SubscribeForm from './SubscribeForm';

class AboutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form_title: 'Subscribe to our Newsletter.',
      form_active_tab: 'subscribe'
    };
  }

  onSubscribeTabClick = () => {
    if (this.state.form_active_tab !== 'subscribe') {
      this.setState({
        form_title: 'Subscribe to our Newsletter.',
        form_active_tab: 'subscribe'
      });
    }
  };

  onContactTabClick = () => {
    if (this.state.form_active_tab !== 'contact') {
      this.setState({ form_title: 'Contact Us.', form_active_tab: 'contact' });
    }
  };

  // onSubscriptionButtonClick = () => {
  //   fetch('https://api.mailchimp.com/3.0/lists/8889cc916c/members/', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: {
  //       email_address: 'peter.thompson@berkeley.edu',
  //       status: 'subscribed',
  //       merge_fields: {
  //         FNAME: 'Peter',
  //         LNAME: 'Thompson'
  //       }
  //     }
  //   });
  //
  //   console.log('post req sent');
  // };

  render() {
    return (
      <div className='about-form'>
        <form className='form'>
          <div className='form-tab-container'>
            <div
              className={'form-tab ' + (this.state.form_active_tab === 'subscribe' ? 'active' : '')}
              id='subscribe-tab'
              onClick={this.onSubscribeTabClick}>
              <h4>SUBSCRIBE</h4>
            </div>
            <div
              className={'form-tab ' + (this.state.form_active_tab === 'contact' ? 'active' : '')}
              id='contact-tab'
              onClick={this.onContactTabClick}>
              <h4>CONTACT US</h4>
            </div>
          </div>
          <div className='form-container'>
            <div className='form-content-container'>
              <div className='form-title'>
                <h1>{this.state.form_title}</h1>
              </div>
              {this.state.form_active_tab === 'contact' ? <ContactForm /> : <SubscribeForm />}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AboutForm;
