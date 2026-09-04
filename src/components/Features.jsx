import React from 'react'
import Heroimgoverly from './ui/Heroimgoverly'
import {HugeiconsIcon} from '@hugeicons/react'
import {ShieldCheckIcon,Navigation05Icon,Navigation04Icon,EnergyIcon,LockKeyholeIcon, ChartLineIcon} from '@hugeicons/core-free-icons'
import Feadiv from './ui/Feadiv'
import Upperheading from './ui/Upperheading'


function Features() {
  return (
    <div className='bg-[#1a1e2a] text-amber-50 flex flex-col justify-center items-center py-24'>
        <div className='container mx-auto px-4'>
        <Upperheading h="Powerfull Features" p="CryptoFlow gives you the edge with advanced tools designed for both beginners and professional traders."/>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
      <Feadiv h="Real-time Analytics" p="Monitor market movements with advanced charts and indicators updated in real-time." icon={ <HugeiconsIcon icon={ChartLineIcon} />}/>
      <Feadiv h="Bank level Security" p="Your assets are protected with military-grade encryption and multi-factor authentication." icon={ <HugeiconsIcon icon={LockKeyholeIcon} />}/>
      <Feadiv h="Instant Execution" p="Execute trades in milliseconds with our high-performance trading engine." icon={ <HugeiconsIcon icon={EnergyIcon} />}/>
      <Feadiv h="Smart Portfolio" p="Optimize your crypto holdings with AI-powered portfolio suggestions." icon={ <HugeiconsIcon icon={Navigation05Icon} />}/>
      <Feadiv h="Price Alerts" p="Never miss an opportunity with customizable price alerts and notifications." icon={<HugeiconsIcon icon={Navigation04Icon} />}/>
      <Feadiv h="Cold Storage" p="Majority of assets stored in offline cold wallets for maximum security." icon={ <HugeiconsIcon icon={ShieldCheckIcon} />} />
      </div>
      </div>
    </div>
  )
}

export default Features
