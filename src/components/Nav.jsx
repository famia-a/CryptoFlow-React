import React, { useState, useEffect } from 'react'
import { Link,  } from 'react-router-dom'
import Button from './ui/button.jsx'

export default function Nav() {
  const [scroll, setScroll]=useState(false);
 useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      
    }

  }, [])
  return (
    <div className={`fixed w-full  opacity-99 z-50  transition-all-duration-300 flex justify-center items-center ${scroll? 'py-3 bg-[#1b1f2b]/95 shadow-lg shadow-[#161922]/99 backdrop-blur-md': 'py-6 gradient-hero' } `}>
      <div className='container mx-auto flex justify-between items-center px-4'>
      <div>
        <h1 className='text-white text-2xl font-bold '>Crypto<span className='text-[#9b87f4]'>Flow</span></h1>
      </div>
      <div className='hidden lg:flex items-center space-x-8  text-[#bec1d2]  '>
        <a className='hover:text-white' href='#features'>Features</a>
        <a className='hover:text-white' href='#how-it-works'>How it works</a>
        <a className='hover:text-white' href='testimonials'>Testimonials</a>
        <a className='hover:text-white' href='#pricing'>Pricing</a>
        <a className='hover:text-white' href='#faq'>FAQ</a>
        
      </div>
      
      <div className='flex gap-4'>
        <Button name="Login" className='hover:bg-[#303952]' />
        <Button name="Buy Now" className='bg-[#9b88f1] hover:bg-[#7985c6]' />
      </div>
      </div>
    </div>
  )
}


