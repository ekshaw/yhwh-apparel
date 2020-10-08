import React, { Component } from 'react';
import '../styles/ShopCard.css';
import Products from '../content/Products';

class ShopCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            products: Products,
            numProducts: Products.length
        };
    }

    render() {
        return (
            <div className='product-container'>
                <div className='product-image'>
                    {this.state.products[this.state.index].images[0]}
                </div>
                <div className='product-text'>
                    <h2 className='product-name'>
                        {this.state.products[this.state.index].title}
                    </h2>
                    <h3 className='product-cost'>
                        {this.state.products[this.state.index].price}
                    </h3>
                </div>
            </div>
        );
    }
}

export default ShopCard;
