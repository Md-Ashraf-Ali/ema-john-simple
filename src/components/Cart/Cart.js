import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
       const product = cart[i];
       total = total+ product.price;
    }

    let Shipping = 0;
    if (total>35){
        Shipping =0;
    }
    else if(total > 15){
        Shipping = 4.99;
    }
    else if(total> 0){
        Shipping = 12.99;
    }

    const tex =(total/10).toFixed(2);
    const GrandTotal = ( + Shipping + Number(tex)).toFixed(2);
    return (
        <div>
            <h4> Order Summary : </h4>
            <p>Item Order: {cart.length} </p>
            <p>product price: {total}</p>
            <p>Shipping Cost : {Shipping}</p>
            <p>VAT : {tex}</p>
            <p> Total price : {GrandTotal}</p>
        </div>
    );
};

export default Cart;