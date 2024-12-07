import React from 'react'
import './Productprops.css'
const Productprops = (props) => {
    console.log(props);
    
  return (
    <>
    <div className='grid-img'>
        <a href={props.link}><img src={props.img} alt="" /></a>
    </div>
    <div className='grid-cont'>
    <p>{props.head}</p>
    <a href={props.link}>{props.words}</a>
    </div>
    </>
  )
}

export default Productprops