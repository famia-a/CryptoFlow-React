import React from 'react'

export default function Upperheading({h,p}) {
  return (
    <div className='text-center mb-16'>
        <h1 className='text-3xl md-4xl font-bold mb-4 text-[#b09def]'>{h}</h1>
        <p className='text-[#818a91] max-w-2xl mx-auto'>{p}</p>
    </div>
  )
}
