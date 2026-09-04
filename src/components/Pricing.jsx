import React from 'react'
import Upperheading from './ui/Upperheading'
import Pricingdiv from './ui/Pricingdiv'
import Button from './ui/button'
import {useState} from 'react'
function Pricing() {
 const [annual, setAnnual]=useState(false);


  return (
    <div className='bg-[#1a1e2a] text-amber-50 flex flex-col justify-center items-center py-24'>
    <div className='container mx-auto px-4'>
    <Upperheading h="Simple, Transparent Pricing" p='Choose the plan that best fits your trading needs. All plans include our core platform features.' />
    <div className='flex justify-center items-center my-10'>
    <div className='text-gray-500 flex w-68 h-12 rounded-full justify-between py-0.5 px-2 border border-gray-500'>
        <Button
          name="Monthly"
          onClick={() => setAnnual(false)}
          className={`rounded-full h-9 w-39 m-0.5 ${
            !annual ? 'bg-[#988ddc]' : 'bg-transparent'
          }`}
        />
      <Button
          name={<p>Annual <span className="text-xs">Save 20%</span></p>}
          onClick={() => setAnnual(true)}
          className={`rounded-full h-9 w-39 m-0.5 ${
            annual ? 'bg-[#988ddc]' : 'bg-transparent'
          }`}
        />
        </div>
     

    </div> <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 '>    
      <Pricingdiv label='Basic' Price='0$' className='bg-[#35363b] hover:bg-[#4b4c53] py-3' p='Perfect for beginners getting started with crypto trading.' btn='Get Started'  features={[
              "Access to 100+ cryptocurrencies",
              "Basic charting tools",
              "Market data with 15-min delay",
              "Email support",
              "Mobile app access",
            ]}  />
      <Pricingdiv label='Pro' Price={annual ? 15 : 19} p='Designed for active traders seeking advanced tools.' btn='Start 7-Day Free Trail' className='bg-[#988ddc] hover:bg-[#595477] py-3'  features={[
              "Access to 100+ cryptocurrencies",
              "Advanced charting tools",
              "Real-time market data",
              "Priority email support",
              "Reduced trading fees (0.05%)",
              "API access",
              "Portfolio analytics"
            ]} />
      <Pricingdiv label='Enterprise'  Price={annual ? 39 : 49} p='Comprehensive solution for professional traders.' btn='Contact Sales' className='bg-[#35363b] hover:bg-[#4b4c53] py-3'  features={[
              "Access to All cryptocurrencies",
              "Professional-grade charts",
              "Real-time market data",
              "Priority email support",
              "24/7 dedicated support",
              "Zero Trading fees",
              "Advanced API access",
              "Institutional-grade security",
              "Custom reporting",
              "Team management"
            ]} />
      </div>

      </div>
        </div>
  )
}

export default Pricing