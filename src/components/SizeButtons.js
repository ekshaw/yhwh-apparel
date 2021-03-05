import React from 'react';
import '../styles/SizeButtons.css';

const SizeButtons = props => {
  return (
    <div id='size-btn-list'>
      <ul>
        {props.sizeList.map(item => (
          <li key>
            <button className={'size-button ' + (item.quantity == 0 ? 'disabled' : 'enabled')}>
              {item.size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeButtons;
