import React from 'react'
import './Aboutmain.css'
import Magazine_img  from '../../Assets/Images/image-1.jpg'
import Product_img from '../../Assets/Images/image-2.jpg'
import Productprops from '../../Reusable/Productprops'
import Grid_img_1 from '../../Assets/Images/image-5.jpg'
import Grid_img_2 from '../../Assets/Images/image-6.jpg'
import Grid_img_3 from '../../Assets/Images/image-7.jpg'
import Grid_img_4 from '../../Assets/Images/image-8.jpg'
const Aboutmain = () => {
  return (
    <>
    <div className='mission-head'>
        <p>Our mission is to make life saving devices accessible & affordable worldwide.</p>
    </div>
    <a href="/story">
    <div   className='main-img'>
        <img src={Magazine_img} alt="" />
        <div className='main-content'>
            <p className='main-head'>1MDM MAGAZINE</p>
            <p className='m-cont'>Deep dive into the engineering & technology behind life saving medical devices from 1MDM.</p>
            <a href="/story">Learn more</a>
        </div>
    </div>
    </a>
    <a href="/logo/products">
    <div   className='product-img'>
        <img src={Product_img} alt="" />
        <div className='product-content'>
            <p className='product-head'>OUR PRODUCTS</p>
            <p className='p-cont'>Hi, how we can help you?</p>
            <a href="/logo/products">See what we build</a>
        </div>
    </div>
    </a>
    <div className='props'>
        <div className='grid-1'>
        <Productprops
        img={Grid_img_1}
        head="Careers at 1MDM"
        link="/careers"
        words="Join Us  "/>
        </div>
        <div className="grid-2">
        <Productprops
        img={Grid_img_2}
        head="Sell at 1MDM"
        link="/"
        words="Start selling"
        />
        </div>
        <div className="grid-3">
        <Productprops
        img={Grid_img_3}
        head="From humble beginnings"
        link="/story"
        words="Our Story"
        />
        </div>
        <div className="grid-4">
        <Productprops
        img={Grid_img_4}
        head="Contacts Us"
        link="/contact"
        words="Say hello!"
        />
        </div>
    </div>
    
    </>
  )
}

export default Aboutmain