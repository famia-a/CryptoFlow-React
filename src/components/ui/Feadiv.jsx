import React from 'react'


export default function Feadiv({icon,h,p}) {
  return (
     <div className=" w-m h-auto bg-[#222430] text-[#9c90e4] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-crypto-purple/5 group animate-on-scroll show">
      <div className=" w-12 h-12 bg-[#3a3958] text-[#9c90e4] rounded-lg flex items-center justify-center mb-5 transition-colors duration-300">
      {icon}
      </div>
      <h3 className='text-xl mb-3 font-semibold text-white'>{h}</h3>
      <p className='text-[#818a91]'>{p}</p>
     </div> 
  )
}
