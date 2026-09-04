import React from 'react'


export default function Button({onClick, name,icon, className }) {
  return (
      <button onClick={onClick}  className={`items-center cursor-pointer justify-center  whitespace-nowrap text-sm font-medium w-full ${className} ring-offset-bacground focus-visible:outline-none text-white px-4 py-2 rounded-xl`}> {name} {icon}</button>
  )
}


