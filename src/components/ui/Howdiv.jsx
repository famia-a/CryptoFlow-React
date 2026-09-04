import React from 'react'

export default function howdiv({icon,c,h,p}) {
  return (
    <div className="relative w-m h-auto bg-[#222430] text-[#9c90e4] backdrop-blur-sm border border-white/10 rounded-xl p-8  transition-all duration-300 p animate-on-scroll show">
      <div className="absolute -top-5 -left-5 w-12 h-10 bg-[#19202a] text-[#9c90e4] border border-[#3f4255] text-lg rounded-lg flex items-center justify-center mb-5 transition-colors duration-300">
      {c}
      </div>
      <div className=" w-12 h-12 bg-[#3a3958] rounded-lg flex items-center justify-center mb-5 transition-colors duration-300">
      {icon}
      </div>
      <h3 className='text-xl mb-3 font-semibold text-white'>{h}</h3>
      <p className='text-[#818a91]'>{p}</p>
    </div>
  )
}

