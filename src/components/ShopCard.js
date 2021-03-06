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
            <div className='shop-container'>
                <div className='shop-image'>
                    {this.state.products[this.state.index].images[0]}
                </div>
                <div className='shop-text'>
                    <h2 className='shop-name'>
                        {this.state.products[this.state.index].title}
                    </h2>
                    <h3 className='shop-cost'>
                        {this.state.products[this.state.index].price}
                    </h3>
                </div>
            </div>
        );
    }
}

export default ShopCard;
