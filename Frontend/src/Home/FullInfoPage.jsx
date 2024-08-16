import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FullInfo from '../components/Full_info'

function Carbon() {
  return (
    <div >
        <Navbar/>
        <div className='min-h-screen'>
        <FullInfo/>
        </div>
        <Footer/>
    </div>
  )
}

export default Carbon
