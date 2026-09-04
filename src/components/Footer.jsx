import React from 'react'
import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react';
import { Facebook02Icon, TwitterIcon, InstagramIcon, Github01Icon, Linkedin02Icon } from '@hugeicons/core-free-icons';
import FooterPartI from './ui/footerPartI'

export default function Footer() {
    
  return (
    <div className=' bg-[#12141C] text-[#b0b3c8]  pt-16 pb-8 flex justify-center items-center'>
        <div className="container px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-8 pb-8 content-evenly ">
            <div className="flex w-80 flex-col">
                <h1 className='text-white text-2xl font-bold mb-4'>Crypto<span className='text-[#9b87f4]'>Flow</span></h1>
                <p className='mb-6'>The most trusted cryptocurrency platform, empowering traders with innovative tools and unparalleled security.</p>
                <div className="flex gap-3 items-center "> 
                <HugeiconsIcon className='cursor-pointer hover:text-[#9b87f4] ' icon={Facebook02Icon}/>
                <HugeiconsIcon className='cursor-pointer hover:text-[#9b87f4] ' icon={TwitterIcon}/>
                <HugeiconsIcon className='cursor-pointer hover:text-[#9b87f4] ' icon={InstagramIcon} />
                <HugeiconsIcon className='cursor-pointer hover:text-[#9b87f4] ' icon={Linkedin02Icon} />
                <HugeiconsIcon className='cursor-pointer hover:text-[#9b87f4] ' icon={Github01Icon} />
                
                </div>
            </div>
            <div></div>
            
                <FooterPartI  h="Products" l1="Exchange" l2="Wallet" l3="API" l4="Institutional" l5="Defi Platform"/>
                <FooterPartI  h="Resources" l1="Blog" l2="Tutorial" l3="Market Data" l4="Documentation" l5="Help"/>
                <FooterPartI  h="Company" l1="About" l2="Careers" l5="Contact Us" l4="Legal & Privacy" l3="Press"/>
           
        </div>
        
        <div className='border-t-2 border-white/10 '>
            <div className=' flex justify-between align-bottom pt-8'>
                <div className='text-sm'>
                <p>© 2026 CryptoFlow. All rights reserved. ~ Distributed By <span className="text-[#9b87f4]"><Link to='#/' >ThemeWagon</Link> </span> </p>
                </div>

                <div className='flex gap-6 text-sm'>
                <Link to="/" className='hover:text-[#9b87f4] '>Term of Services</Link>
                <Link to="/" className='hover:text-[#9b87f4] '>Privacy Policy</Link>
                <Link to="/" className='hover:text-[#9b87f4] '>Cookies Policy</Link>
                </div>

            </div>
        </div>
     </div>
    </div>
  )
}

