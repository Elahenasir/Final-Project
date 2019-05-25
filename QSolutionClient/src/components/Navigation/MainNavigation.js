import React from 'react';
import { NavLink } from 'react-router-dom';
import './MN.css';

const mainNavigation =props => (

 <header className='head'>
     
     <nav className='item'>
         <ul>
         <li>
             <NavLink to={'./'} className="nav-link" > Home </NavLink>
             </li>
             <li>
             <NavLink to={'/Login'} className="nav-link" > Login </NavLink>
             </li>
             <li><NavLink to={'/questions'} className="nav-link"> Questions </NavLink></li>
             </ul> 
         </nav>
         
 </header>   
);


export default mainNavigation;

