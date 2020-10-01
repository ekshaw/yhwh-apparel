import React from 'react';
import '../styles/ShopCard.css';
const ShopCard = props => {
    return (
        <div className='product-container'>
            <div className='product-image'>
                <img src={require('../images/designs/run.jpg')} />
            </div>
            <div className='product-text'>
                <h2 className='product-name'> Run With Endurance </h2>
                <h3 className='product-cost'>$38.00</h3>
            </div>
        </div>
    );
};

export default ShopCard;
