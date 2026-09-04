import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'

function Faqdiv({ h, p }) {
  return (
    <div className="bg-[#20222e] border border-gray-700 mb-4 px-6 py-4 rounded-xl">

      <details className="group cursor-pointer">

        <summary className="flex items-center justify-between font-medium hover:text-[#8d86b9] list-none">
          
          <span>{h}</span>

          <span className="transition-transform duration-500 ease-in-out group-open:rotate-90">
            <HugeiconsIcon icon={ArrowRight01Icon} />
          </span>

        </summary>

        <p className="px-6 py-4 text-gray-400">
          {p}
        </p>

      </details>

    </div>
  )
}

export default Faqdiv