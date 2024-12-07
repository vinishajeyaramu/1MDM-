import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/1mdm-logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [showmenu,setshowmenu]=useState(false);
    const handlemenu=()=>{
        setshowmenu(!showmenu);
    };
  return (
    <>
    <nav>
        <div className='major-nav-above'>
            <p className='tag'>World's Largest Medical Equipment Market Place</p>
            <div className='account'>
            <a href="/account">My account |</a>
            <a href="/contact">Contact Us</a>
            </div>
        </div>
        <div className='major-nav'>
            <div className='logo'>
                <a href="/logo/products"><img src={logo} alt="1MDM" /></a>
            </div>
            <div className='menu' >
                <Link to="/about">About Us</Link>
                <Link to="/story">Our Story</Link>
                <Link to="/">Sell on 1MDM</Link>
                <Link to="/pricing">Pricing</Link>
            </div>
            
        </div>
    </nav>
    <div className='hamburger'><button onClick={handlemenu}>
    <AiOutlineMenu /></button>
            {showmenu &&
            <div className='menu-1' >
            <Link to="/about">About Us</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/">Sell on 1MDM</Link>
            <Link to="/pricing">Pricing</Link>
            </div>
            }
            
    </div>
    </>
  )
}

export default Navbar