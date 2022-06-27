import React from 'react';
import logo from '../logo.png';
import './Header.css'; 

const Header = () => {
     return (
          <div className="header">
               <img src={logo} alt="" />
               <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Order review</a>
               <a href="/manage">Manage inventory here</a>
               <a href="/brands">Brands</a>
               <a href="/outLets">Outlet</a>
               <a href="/country">Country</a>
               <a href="/reputation">Reputation</a>
               <a href="/contact">Contact</a>
               </nav>
               <h1 className="back">We believe in quality, not quantity</h1>

          </div>
     );
};

export default Header;