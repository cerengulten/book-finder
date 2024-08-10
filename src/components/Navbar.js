import React from 'react';
import './Navbar.css';
import logo from '../assets/bookfinder_logo-removebg.png';
import { CgProfile } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";
import { TiThList } from "react-icons/ti";
import { BiSearchAlt } from "react-icons/bi";
import { RiGhost2Fill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='left-corner'>
        <img src={logo} alt='logo' className='logo' />
        <span className='category'>Categories</span>
      </div>

      <div className='right-corner'>
        <BiSearchAlt size={30} />
        <TiThList size={30} />
        <MdFavoriteBorder size={30}/>
        <CgProfile size={30} className='profile-icon'/>
      </div>
    </div>
  )
}

export default Navbar