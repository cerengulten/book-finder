import React, {useEffect, useState} from 'react';
import './Navbar.css';
import logo from '../assets/bookfinder_logo-removebg.png';
import { CgProfile } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";
import { TiThList } from "react-icons/ti";
import { BiSearchAlt } from "react-icons/bi";
import { Switch } from '@mui/material';


const Navbar = ({setQuery}) => {
  const [theme, setTheme] = useState(false);
  const [search, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleTheme = () =>{
    setTheme(!theme);
  };

  const handleSearch = () =>{
    setSearch(!search);
    
  }; 
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() =>{
    if (theme) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);
  return (
    <div className='navbar-container'>
      <div className='left-corner'>
        <div className='logo-container'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <span className='category'>Categories</span>
      </div>

      <div className='right-corner'>
        <div className={`search-box ${search ? 'visible' : ''}`}>
          <input name='entity' 
                 className='search-input' 
                 type='text' placeholder='Search...'
                 onChange={handleInputChange}/>
          <BiSearchAlt size={35} className='search-icon' onClick={handleSearch}/>
        </div>
        <BiSearchAlt size={30} onClick={handleSearch}/>
        <TiThList size={30} />
        <MdFavoriteBorder size={30} />
        <Switch onChange={handleTheme} className='toggle-button' size='medium' color='#E7B7A0'/>
        <CgProfile size={30} className='profile-icon' />
      </div>
    </div>
  )
}

export default Navbar