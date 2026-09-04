import React from 'react'
import Button from './ui/button'
import HeroFea from './ui/HeroFea'
import Heroimgoverly from './ui/Heroimgoverly'
import {HugeiconsIcon} from '@hugeicons/react'
import {ArrowRight01Icon, AutoConversationsIcon,Shield01Icon, ArrowRight02Icon, ArrowUpRight01Icon} from '@hugeicons/core-free-icons'


function Hero() {
  return (
    <div className='w-screen min-h-screen gradient-hero flex justify-center items-center text-white'>
      <div className='container mx-auto px-4 py-20 min-h-screen  flex flex-col lg:flex-row md:pt-25 justify-center items-center '>
      <div className='lg:w-1/2 animate-fade-in-left    '>
        <div className='flex justify-center items-center bg-white/5 border-gray-600 border text-xs mb-6 py-1.5 px-1 gap-1 w-69 h-auto rounded-full mt-8'>
          <span className='text-[#9b88f1]'>New Feature </span>
          <span className='text-gray-300'>AI-Powered Trading Signals</span>
          <HugeiconsIcon className='text-gray-400 w-4 h-4' icon={ArrowRight01Icon} />
        </div>
        <h1 className='text-6xl font-bold mb-6'>Trade Crypto with Confidence & Clarity</h1>
        <p className='w-[80%] text-lg text-gray-300 mb-8'>Experience seamless cryptocurrency trading with real-time analytics, AI-powered insights, and zero commission fees.</p>
        <div className='flex h-12 w-90 gap-4'>
        <Button className="flex bg-[#9b88f1] hover:bg-[#7985c6] justify-evenly gap-2" name="Start Trading" icon={<HugeiconsIcon className='w-4 h-4 ' icon={ArrowRight02Icon} />}/> 
        <Button className="flex bg-black hover:bg-[#333952] justify-evenly" name="View Demo" icon={<HugeiconsIcon className='w-4 h-4 ' icon={ArrowUpRight01Icon} />}/>
        </div>
         <div className="flex mt-2">
        <HeroFea className='border-r border-gray-700 pr-6' h='$2.5B+' p='Trading Volume'/>
        <HeroFea className='border-r border-gray-700  px-6 justify-center self-center' h='120K+' p='Active Traders'/>
        <HeroFea className="pl-6" h='50+' p='Global Markets'/>
      </div>
        
      </div>
  <div className="w-1/2 mt-20 md:mt-2 flex justify-center items-center">

  <div className="relative w-auto h-auto animate-float shadow-lg rounded-xl shadow-[#9b88f1]/50">

    <div className="w-m h-76 overflow-hidden  rounded-xl">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&h=800"
        alt="Trading"
      />
    </div>

    <Heroimgoverly className="absolute -top-6 -left-6" h="Security Level" p='Enterprise' bg="bg-[#7671a7]" icon={<HugeiconsIcon className="text-[#9b88f1]" icon={Shield01Icon}/>} />
    <Heroimgoverly className="absolute -bottom-6 -right-6" bg="bg-green-800/44  backdrop-blur-md" icon={<HugeiconsIcon className='text-green-400 ' icon={AutoConversationsIcon} />} h="24h Change" p='+12.34%' />

  </div>
</div>
      </div>
    </div>
    
  )
}

export default Hero
