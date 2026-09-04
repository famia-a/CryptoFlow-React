import React from 'react'
import Button from './ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'


export default function Subscribe() {
  return (
    <div className='py-24 flex justify-center items-center'>
        <div className='container mx-auto max-w-4xl px-4 '>
        <div className='p-6  md:p-12 flex flex-col justify-center items-center border border-gray-700 bg-gray-500/5 rounded-2xl'>
        <h1 className='text-3xl text-white md:text-4xl text-center mb-6 font-bold'>Ready to revolutionize your crypto trading?</h1>
        <p className='text-lg mb-8 w-[90%] text-center mx-auto animate-fade-in text-gray-300'>Join thousands of traders who have already upgraded their crypto experience with CryptoFlow. Start today with zero risk.</p>
        <div className='w-[60%] flex justify-center items-center gap-4'>
            <Button name="Get Started for Free" className=" h-13 bg-[#9b88f1] hover:bg-[#666fa2]"/>
            <Button name="Schedule Demo" className="h-13 bg-black hover:bg-[#333952]"/>
        </div>
        <span className='text-gray-400 text-sm mt-6'>No credit card required. Cancel anytime.</span>
        </div>

        </div>
    </div>
  )
}
