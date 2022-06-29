import React from 'react';

const Cart = (props) => {
     const {cart} =props;
     console.log(props.cart)
     let total = 0 ;
     for(const product of cart){
          total = total + product.price;
     }
     return (
          <div>
          <h2>Order summary</h2>
          <h4>item orderd: {cart.length}</h4>
          <br />
          <h4>total price: {total}</h4>
          </div>
     );
};

export default Cart;