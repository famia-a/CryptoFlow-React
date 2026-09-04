import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react';
import { Tick01Icon } from '@hugeicons/core-free-icons';

export default function pricpara({ text }) {
  return (
    <div className="flex items-center gap-3 space-y-3">
      <span className="text-[#8d86b9]">
        <HugeiconsIcon icon={Tick01Icon} />
      </span>
      <span className="text-sm text-gray-400">
       {text}
      </span>
    </div>
  )
}
