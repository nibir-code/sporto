import React, {  useState ,useEffect } from 'react';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
     const [products,setProducts] = useState([]);

     useEffect(()=>{
          fetch('products.JSON')
          .then(res=> res.json())
          .then(data => setProducts(data))
     },[])
     
     return (
          <div className="shop-container">
               <div className="product-container">
                    {
                         products.map(pd=> <Product product={pd}></Product>)
                    }
               </div>
               <div className="cart-container">
                    <h1>Order summary</h1>
                    <p>item orderd:</p>
               </div>
          </div>
     );
};

export default Shop;