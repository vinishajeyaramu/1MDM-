import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Story from '../Pages/Story'
import Sellon1MDM from '../Pages/Sell on 1MDM'
import Pricing from '../Pages/Pricing'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/' element={<Sellon1MDM/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing