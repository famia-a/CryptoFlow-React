import React from 'react'

function Heroimgoverly({className,h,p,bg, icon}) {
  return (
 <div className={`absolute  w-40 h-20 bg-[#988ddc]/20  backdrop-blur-md border border-[#5c5099] rounded-lg p-4 flex items-center gap-3 ${className}`}>
      
      <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center`}>
         {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400">{h}</p>
        <h3 className="text-white font-bold">{p}</h3>
      </div>
    </div>
  )
}

export default Heroimgoverly