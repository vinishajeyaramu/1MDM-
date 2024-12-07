import React from 'react'
import './Footer.css'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import logo_white from '../../Assets/Images/logo-white.png'
import { AiFillThunderbolt } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <div className='whole-footer'>
        <div className='footer'>
        <div className='footer-left'>
            <img src={logo_white} alt="" />
            <p>One Medical Devices Market Place</p>
        </div>
        <div className='platform'>
                <div className='p-head'>Platform</div>
                <div className='p-menu'>
                    <a href="/">Sell on 1MDM</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/about">About Us</a>
                    <a href="/story">Our Story</a>
                    <a href="/careers">Careers</a>
                    <a href="/blog">Blog</a>
                    <a href="/brand">Brands</a>
                </div>
            </div>
            <div className='pressroom'>
                <div className='press-head'>Press Room</div>
                <div className='p-images'>
                    <a href="/images">Images & B-roll</a>
                    <div className='policy'>
                        <p className='policy-head'>Policies</p>
                        <a href="/terms">Terms of Service</a>
                        <a href="/privacypolicy">Privacy Policy</a>
                        <a href="/delivery">Delivery Information</a>
                    </div>
                </div>
            </div>
            {/* <div className='pressroom-1'>
                <div className='press-head'>Press Room</div>
                <div className='p-images'>
                    <a href="/images">Images & B-roll</a>
                    <div className='policy'>
                        <p className='policy-head'>Policies</p>
                        <a href="/terms">Terms of Service</a>
                        <a href="/privacypolicy">Privacy Policy</a>
                        <a href="/delivery">Delivery Information</a>
                    </div>
                </div>
            </div> */}
            <div className='reachus reachus-1'>
                <div className='r-head'>Reach Us</div>
                <div className='r-menu'>
                    <a href="/corporateinfo">Corporate Information</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
        </div>
        <div className='copyrights'>
            <p><AiOutlineCopyrightCircle  className='copyright-icon'/> 2024 1MDM  <AiFillThunderbolt className='thunder-icon' /></p>
            <p>by SuperLabs</p>
        </div>
    </div>
    </>
  )
}

export default Footer