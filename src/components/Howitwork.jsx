import React from 'react'
import Howdiv from './ui/Howdiv.jsx'
import Button from './ui/button.jsx'
import Upperheading from './ui/Upperheading.jsx'
import {HugeiconsIcon} from '@hugeicons/react'
import {Download01Icon,ChartUpIcon,Wallet01Icon} from '@hugeicons/core-free-icons'

export default function Howitwork() {
  return (
    <div className='bg-[#1a1e2a] text-amber-50 flex flex-col justify-center items-center py-24'>
        <div className='container mx-auto px-4'>
            <Upperheading h="How it Work" p="Getting started with CryptoFlow is easy. Follow these simple steps to begin your crypto journey" />
         <div className='h-full grid grid-cols-1  md:grid-cols-3 gap-6 md:gap-8'>
            <Howdiv c='01' h="Create Your Account" p="Sign up in minutes with our streamlined onboarding process. No complicated forms or lengthy verification." icon={<HugeiconsIcon icon={Download01Icon} />}/>
            <Howdiv c='02' h="Fund Your Wallet" p="Easily deposit crypto or fiat through multiple payment options with zero deposit fees." icon={<HugeiconsIcon icon={Wallet01Icon} />}/>
            <Howdiv c='03' h="Start Trading" p="Access 50+ cryptocurrencies and start trading immediately with intuitive tools and real-time data." icon={<HugeiconsIcon icon={ChartUpIcon} />}/>
        </div>
        
        <div className='w-full flex justify-center items-center mt-16'>
            <div className='w-50 '>
        <Button name="Create Your Account" className='h-12 bg-[#9d86f8] hover:bg-[#8075b9]'/></div>
        </div>
        </div>
    </div>
  )
}

