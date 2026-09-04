import React from 'react'
import {useState, useEffect} from 'react'
import {HugeiconsIcon} from '@hugeicons/react'
import {ArrowUp01Icon} from '@hugeicons/core-free-icons'

function Scrollbtn() {
const [scrollReset, setScrollReset]=useState(false)
useEffect(()=>{
        const scrollreset=()=>{
            if (window.scrollY > 50){
            setScrollReset(true);
            }else{
            setScrollReset(false);
            }
        }
        window.addEventListener('scroll', scrollreset)
        return()=>{
        window.removeEventListener('scroll', scrollreset)
    }
    },[])
  return (
    <>
    {scrollReset && <button onClick={() => window.scrollTo({
  top: 0,
  behavior: 'smooth'
})} className='fixed right-7 z-30 cursor-pointer bottom-7 w-12 flex justify-center items-center h-12 bg-[#9b88f1] rounded-full text-white '>
       <HugeiconsIcon icon={ArrowUp01Icon} />
    </button> }
    </>
  )
}


export default Scrollbtn