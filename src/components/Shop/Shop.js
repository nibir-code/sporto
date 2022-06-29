import React, {  useState ,useEffect } from 'react';
import Product from '../Products/Product';
import './Shop.css'
import Cart from "./../Cart/Cart";

const Shop = () => {
     const [products,setProducts] = useState([]);
     const [cart , setCart] = useState([]);

     useEffect(()=>{
          fetch('products.JSON')
          .then(res=> res.json())
          .then(data => setProducts(data))
     },[])
     
     const handleAddToCart = product => {
          const newCart = [...cart,product];
          setCart(newCart);
     }
     
     return (
          <div className="shop-container">
               <div className="product-container">
                    {
                         products.map(pd=> <Product 
                              key={products.key}
                              handleAddToCart={handleAddToCart}
                              product={pd}></Product>)
                    }
               </div>
               <div className="cart-container">
                    <Cart cart={cart}></Cart>
               </div>
          </div>
     );
};

export default Shop;