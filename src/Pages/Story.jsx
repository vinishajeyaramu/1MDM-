import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Storymain from '../Components/Storymain/Storymain'
import Footer from '../Components/Footer/Footer'

const Story = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Storymain/>
    </main>
    <Footer/>
    </>
  )
}

export default Story