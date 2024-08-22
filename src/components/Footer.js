import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/SE logo modified.png'

const Footer = () => {

  let location = useLocation();

  if (location.pathname === "/contract"  || location.pathname === "/login"  || location.pathname === "/Login"  || location.pathname === "/portal" || location.pathname === "/projectEdit" || location.pathname === "/changePass") {
    return null;
  }

  return (
    <>
        <div className='grid grid-cols-2 lg:grid-cols-4 grid-rows-3 lg:grid-rows-subgrid bg-black text-white pb-4'>
            <div className="flex items-center flex-shrink-0 text-white lg:mr-8 col-span-2">
                <img className='w-16 lg:w-20 block ' src={logo} alt="" /> 
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-sm lg:text-lg tracking-tight">Suryawanshi</span>
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-sm lg:text-lg tracking-tight pt-10 -ml-10">Engineers</span>
            </div>
            <div className='-mt-6 ml-4 lg:ml-0 lg:col-start-2 lg:mt-4'>
              <ul className='font-serif'>
                  <li className='p-2 text-xl hover:text-purple-500'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='p-2 text-xl hover:text-purple-500'>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li className='p-2 text-xl hover:text-purple-500'>
                    <Link to='/contact'>Contact</Link>
                  </li>
                  <li className='p-2 text-xl hover:text-purple-500'>
                    <Link to='/projects'>Projects</Link>
                  </li>
              </ul>
            </div>

            <div className='-mt-2 text-sm space-y-2 lg:text-base text-center mr-12 lg:col-start-3 lg:mt-8'>
              <h3 className='-ml-12'>suryawanshir254@gmail.com</h3>
              <h3>9545656358</h3>
              <h3>8237390171</h3>
            </div>

            <div className='mt-10 m-2 ml-4 mr-2 col-span-2 lg:col-start-4 lg:mt-4'>
              <address className='text-base'>
              Chatrapati Shivaji Maharaj Chowk, <br />
              Near Nagar Palika, <br />
              V. P. Singh Complex Degloor, Nanded <br />
              Dist. Nanded [MH]
              </address>
              {/* <span className='text-base'>Chatrapati Shivaji Maharaj Chowk, Near Nagar Palika V.P.Singh Complex Degloor, Nanded Dist. Nanded [MH]</span> */}
            </div>

            <div className='mb-4 flex space-x-4 justify-end col-span-2 mr-8 -mt-6 lg:-mt-10 lg:col-start-4'>
              <svg className='w-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>

              <svg className='w-6 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

              <svg className='w-6 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </div>

            {/* <div className="absolute right-4 mt-4">
              <Link to="/Login"><button className='bg-violet-600 px-3 py-2 rounded-md'>Admin Login</button></Link>   
            </div> */}
            {/* <div className="absolute right-4 mt-4">
              <Link to="/Signup"><button className='bg-violet-600 px-3 py-2 rounded-md'>SignUp Admin</button></Link>   
            </div> */}
        </div>


        
        
    </>
  )
}

export default Footer
