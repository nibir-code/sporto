import React from 'react';
import './Product.css'

const Products = (props) => {
     const { img ,seller ,name } =props.product;
     return (
          <div className="product">
               <div>
                 <img src={img} alt="" />
               </div>
               <div>
                 <p>{seller}</p>
                 <br />
                 <p>{name}</p>
                <button>click</button>
               </div>
             
          </div>
     );
};

export default Products;