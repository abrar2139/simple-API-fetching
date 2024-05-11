import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-wrap sm:justify-between md:justify-between lg:justify-between xl:justify-between  justify-center items-center bg-gray-400 p-4'>
        <div className="flex animate-bounce items-center m-1 mr-10 ">
            <img className='w-14 h-14  hover:animate-ping cursor-pointer rounded-full object-cover object-center' src="/svg.gif" alt="logo" />
       <span className='px-1 cursor-pointer text-2xl text-amber-700 font-bold hover:border-b-2 border-solid transition-colors duration-300 hover:border-amber-700'>Fetching</span>
        </div>
        <ul className='flex gap-11 m-1'>
        <li className='cursor-pointer ease-in-out hover:border-amber-700 text-amber-700 text-2xl transition-colors duration-300 border-b-2 border-solid border-amber-500'><Link to="/">Fetch</Link></li>
        <li className='cursor-pointer transition-colors duration-300 ease-in-out hover:border-amber-700 text-amber-700 text-2xl border-b-2 border-amber-500 border-solid'><Link to="/about">useState</Link></li>
        {/* <li className='cursor-pointer text-amber-700 text-2xl'><Link to="/service">Service</Link></li>
        <li className='cursor-pointer text-amber-700 text-2xl'><Link to="/contact">Contact</Link></li> */}
        </ul>
    </div>
  )
}

export default Navbar
