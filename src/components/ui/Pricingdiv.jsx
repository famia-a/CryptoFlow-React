import React from 'react'
import Button from './button'
import Pricpara from './pricpara'


function Pricingdiv({label, Price,p,btn,features,className}) {
  // console.log(Pricingdiv(Price))
  
  return (
    
    <div className="relative md:w-m h-auto bg-[#222430] backdrop-blur-sm border border-white/10 rounded-xl p-8  transition-all duration-300 p animate-on-scroll show">
    <h2 className='text-xl font-semibold mb-2 text-white'>{label}</h2>
    <div className='mb-4'><span className='text-3xl md:tezt-4xl font-bold font-white'>{Price}</span><span className='text-gray-400 ml-1'>/month</span></div>
    <p className='text-gray-400 mb-4'>{p}</p>
    <div className='w-full text-sm py-4 mb-6'>
    <Button name={btn} className={className}/>
    </div>
    <ul className='text-sm font-medium text-gray-300 mb-4'> What's inclded:
    <li>
  {features.map((text, index) => (
    <Pricpara
      key={index}
      text={text}
    />
  ))}
  </li>
    </ul>
    </div>
    
  )
}

export default Pricingdiv