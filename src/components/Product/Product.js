import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name,seller,price,stock } = props.product;
    return (
        <div className= "Product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className= 'product-name'>{name}</h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <br/>
                <p><small>price:{'$'+price}</small></p>
                <p><small>only {stock} left in stock-order soon</small></p>
                <button 
                className='main-btn'
                onClick={()=>{props.handleProduct(props.product)}}  > <FontAwesomeIcon icon={faShoppingCart} />add to card
                </button>
            </div>
         
        </div>
    );
};

export default Product;