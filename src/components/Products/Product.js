import React from 'react';
import './Product.css'

const Products = (props) => {
     const { img ,seller ,name ,price,stock,category } =props.product;
     return (
          <div className="product">
               <div>
                 <img src={img} alt="" />
               </div>
               <div>
                  <h3 className="product-name">Product name : {name} </h3>
                  <h4>category: {category}</h4>
                 <h4>By: {seller}</h4>
                 <p>Price: $ {price}</p>
                 <p><small>only left stock: {stock}</small></p>
                 <br />
                <button 
                  onClick={()=>props.handleAddToCart(props.Product)}
                 className="button">Add to cart</button>
               </div>
             
          </div>
     );
};

export default Products;