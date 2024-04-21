import React, { useContext, useEffect } from 'react'
import contractContext from '../context/contract/contractContext'
import ContractItem from './ContractItem'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/SE logo modified.png'
import Swal from 'sweetalert2'

const Contract = (props) => {


  
  const context = useContext(contractContext)
  const { contracts, getContracts} = context;

  let navigate = useNavigate();
  // eslint-disable-next-line
  useEffect(() => {
    if (localStorage.getItem('token')){
      getContracts()
    }
    else{
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])

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
    <>
        <nav className='flex items-center justify-between flex-wrap bg-[#02030a] p-0 pr-10 lg:p-2'>
            {/* Logo and Nav title */}
            <div className="flex items-center flex-shrink-0 text-white lg:mr-8">
                <img className='w-32 block ' src={logo} alt="" /> 
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-xl tracking-tight hidden lg:block">Suryawanshi</span>
                <span style={{fontFamily: "'Cinzel', serif"}} className="font-semibold italic text-xl tracking-tight pt-10 -ml-10 hidden lg:block">Engineers</span>
            </div>

            <div className="absolute right-2 lg:right-4">
                <button onClick={handleLogout} className='bg-violet-600 px-3 py-2 rounded-md'>Logout</button>
              </div>
        </nav>
        <div className="bg-yellow-400">
          <div className='m-16 mb-0 pb-40'>
              <div className='text-5xl p-4 font-bold font-serif  '>
                Contracts
              </div>

              <div className="text-4xl text-red-600 mt-16 font-bold text-center">
                {contracts.length === 0 && 'No contracts are available to display'}
              </div>

              {contracts.map((contract) => {
                return <ContractItem key={contract._id} contract={contract} />
              })}
              {/* <div className="text-5xl">
              {contracts.map((contract) => {
                return "firstname" + contract.firstname;
              })}
              </div> */}
          </div>
        </div>
        
    </>
  )
}

export default Contract
