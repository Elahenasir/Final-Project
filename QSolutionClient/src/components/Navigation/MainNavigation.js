import React from 'react';
import { NavLink } from 'react-router-dom';
import './MN.css';

const mainNavigation =props => (

 <header className='head'>
     {/* <div className='logo'>
        <img src='http://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png' ></img>
     </div> */}
     <nav className='item'>
         <ul>
         <li>
             <NavLink to={'./'} className="nav-link" > Home </NavLink>
             </li>
             <li>
             <NavLink to={'./Login'} className="nav-link" > Login </NavLink>
             </li>
             <li><NavLink to={'./questions'} className="nav-link"> Questions </NavLink></li>
             </ul> 
         </nav>
         
 </header>   
);


export default mainNavigation;

/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
<ul className="navbar-nav mr-auto">
  <li><Link to={'/questions'} className="nav-link"> Questions </Link></li>
</ul>
</nav>
<hr /> */