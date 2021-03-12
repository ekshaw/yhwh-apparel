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

    changeLink = (link) => {
        var linkElement = document.getElementById("shoplink");
        linkElement.href = "http://localhost:3000/product?product="+ link
      };

    render() {
        return (
            <div className='shop-container'>
                <a href="http://localhost:3000/product?product=" id="shoplink">
                <div className='shop-image' onClick={() => this.changeLink(this.state.products[this.state.index].productId)}>
                    {this.state.products[this.state.index].images[0]}
                </div>
                </a>
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
