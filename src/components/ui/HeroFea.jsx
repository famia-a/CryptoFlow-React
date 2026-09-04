import React from 'react'

export default function HeroFea({h,p, className}) {
  return (
    <div className={`flex justify-left my-6 items-center ${className}`}>
        <div>
        <h1 className='text-2xl font-bold'>{h}</h1>
        <p className='text-gray-400 text-sm'>{p}</p>
        </div>
    </div>
  )
}