import React from 'react'
import { Link } from "react-router-dom"

export default function FooterPartI(props) {

  return (
    <div>
      <div className="flex flex-col ">
                <h1 className="mb-4 font-medium text-white">{props.h}</h1>
                <Link to="/" className="mb-2 hover:text-[#9b87f4]">{props.l1}</Link>
                <Link to="/" className="mb-2 hover:text-[#9b87f4]">{props.l2}</Link>
                <Link to="/" className="mb-2 hover:text-[#9b87f4]">{props.l3}</Link>
                <Link to="/" className="mb-2 hover:text-[#9b87f4]">{props.l4}</Link>
                <Link to="/" className="mb-2 hover:text-[#9b87f4]">{props.l5}</Link>
            </div>
    </div>
  )
}

