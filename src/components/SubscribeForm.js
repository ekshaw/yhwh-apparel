import React from 'react';

const SubscribeForm = props => {
  return (
    <div className='form-input-container'>
      <div className='form-field first-name-field'>
        <h4>FIRST NAME:</h4>
        <label>
          <input type='text' id='first-name-input' />
        </label>
      </div>
      <div className='form-field last-name-field'>
        <h4>LAST NAME:</h4>
        <label>
          <input type='text' id='last-name-input' />
        </label>
      </div>
      <div className='form-field email-field'>
        <h4>EMAIL:</h4>
        <label>
          <input type='text' id='email-input' />
        </label>
      </div>
    </div>
  );
};

export default SubscribeForm;
