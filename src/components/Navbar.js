import React from 'react'
import {motion} from 'framer-motion'
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  
  return (
    <nav className='bg-air-blue'>
      <img src={logo} alt='</>' className="logo"></img>
      <div className="name-box">
      <motion.p 
        animate={{x: [-120, 0]}} 
        transition={{duration: 0.7, repeat: Infinity, repeatDelay: 1.5, repeatType: 'reverse'}}
        className="name items"
      >Kishan Kumar
      </motion.p>
      </div>
      <NavLink to={'/'} title='Home'>
        <i className="fa-solid fa-house items"></i>
      </NavLink>
      <NavLink to={'/projects'} title='Projects'>
        <i className="fa-solid fa-file-powerpoint items"></i>
      </NavLink>
      <NavLink to={'/about'} title='About'>
        <i className="fa-solid fa-address-card items"></i>
      </NavLink>
      <NavLink to={'/contact'} title='Contact'>
        <i className="fa-solid fa-envelope items"></i>
      </NavLink>
    </nav>
  )
}

export default Navbar