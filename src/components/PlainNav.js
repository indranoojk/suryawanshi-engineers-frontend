import React from 'react'
import logo from '../assets/images/SE logo modified.png'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const PlainNav = () => {

    let navigate = useNavigate();

    const handleLogout = ()=> {
        if (Swal.fire({
          title: "Log out?",
          text: "Do you want to log out?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Log out!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Logged out!",
              icon: "success"
            });
            localStorage.removeItem('token');
            navigate("/login")
          }
        })){
        
        }
      }

  return (
    <div>
      <nav className='flex fixed h-24 w-full top-0 z-[9999] items-center justify-between flex-wrap bg-[#02030a] p-0 pr-10 lg:p-2'>
            {/* Logo and Nav title */}
            <div className="flex h-16 items-center flex-shrink-0 text-white lg:mr-8">
                <img className='w-28 block ' src={logo} alt="" /> 
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-xl tracking-tight hidden lg:block">Suryawanshi</span>
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-xl tracking-tight pt-10 -ml-10 hidden lg:block">Engineers</span>
            </div>

            <div className="absolute right-2 lg:right-4">
                <button onClick={handleLogout} className='bg-violet-600 px-3 py-2 rounded-md'>Logout</button>
              </div>
        </nav>
    </div>
  )
}

export default PlainNav
