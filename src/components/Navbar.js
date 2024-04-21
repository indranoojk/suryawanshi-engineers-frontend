import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/images/SE logo modified.png'
// import poster from '../assets/images/Suryawanshi poster.png'
import '../index.css';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    let location = useLocation();

    if (location.pathname === "/contract" ) {
        return null;
    }

  return (
    <>
        {/* Navbar Starts here */}
        <nav className='flex items-center justify-between flex-wrap bg-[#02030a] p-0 pr-10 lg:p-2 '>
            {/* Logo and Nav title */}
            <div className="flex items-center flex-shrink-0 text-white lg:mr-8">
                <img className='w-32 block ' src={logo} alt="" /> 
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-xl tracking-tight hidden lg:block">Suryawanshi</span>
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-xl tracking-tight pt-10 -ml-10 hidden lg:block">Engineers</span>
            </div>

            {/* Menu hamburger button for mobile version */}
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            {/* Navbar elements */}
            <div className={`${isOpen ? `block` : `hidden`} w-full block ml-6 mb-4 lg:mb-0 flex-grow lg:flex lg:items-center lg:w-auto lg:text-right`}>
                <div className="text-base lg:flex-grow lg:space-x-12 italic mr-6">
                    <div></div>
                    <Link to="/" className={`block ${location.pathname === "/"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>Home</Link>

                    <Link to="/about" className={`block ${location.pathname === "/about"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>About</Link>

                    <Link to="/contact" className={`block ${location.pathname === "/contact"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>Contact</Link>

                    <Link to="/projects" className={`block ${location.pathname === "/projects"? "underline underline-offset-8 text-purple-500": ""} mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4`} onClick={() => setIsOpen(!isOpen)}>Projects</Link>
                </div>
            </div>

            {/* <div className='poster mt-4 mb-4'>
                <img src={poster} alt="" />
            </div> */}
        </nav>
    </>
    
  )
}

export default Navbar
