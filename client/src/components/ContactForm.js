import React from 'react';

const ContactForm = props => {
  return (
    <div className='form-input-container'>
      <div className='form-field name-field'>
        <h4>NAME:</h4>
        <label>
          <input type='text' id='name-input' />
        </label>
      </div>
      <div className='form-field email-field'>
        <h4>EMAIL:</h4>
        <label>
          <input type='text' id='email-input' />
        </label>
      </div>
      <div className='form-field message-field'>
        <h4>MESSAGE:</h4>
        <label>
          <input type='text' id='message-input' />
        </label>
      </div>
      <div
        className='contact_form-submit-btn'
        // onClick={this.onContactButtonClick}
      >
        <h4>SUBMIT</h4>
      </div>
    </div>
  );
};

export default ContactForm;
