import React from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import ContractState from '../context/contract/ContractState'

const Home = () => {


  return (
    <>

        <div className="intro ">
            <h1 style={{fontFamily: "'Cinzel', serif"}} className='text-5xl font-bold p-4 mt-4'><span className='text-4xl font-semibold'>Welcome to</span> Suywawanshi Engineers</h1>
        </div>

        {/* Intro content */}
        <div className='flex flex-col lg:flex-row mb-16 bg-[#e1dfdd]'>
                <div className='w-full p-10'>
                    <h1 className='text-4xl font-serif font-bold text-[#ad998a] mb-2'>Crafting Your Dream Spaces</h1>
                    <p className='text-lg lg:w-96 text-[#a58a75] '>At Suywawanshi Engineers, we're more than just builders. We're creators, innovators, and problem solvers dedicated to bringing your vision to life. Whether you're dreaming of a modern, sleek office space, a cozy and inviting home, or a cutting-edge commercial development, our team of experts is here to turn your ideas into reality.</p>
                </div>
                
                <div className=''>
                    <img className='w-full h-full' src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div>
        </div>


        {/* Our Services section */}
        <div className='m-4 lg:m-16'>
            <h2 className='text-3xl font-bold font-serif'>Our Services</h2>
            <div className='grid grid-flow-row-dense grid-cols-2 grid-rows-2 lg:flex lg:space-x-1'>
                <div className='relative col-span-4 cursor-pointer'>
                    <Link to="/CustomHouseBuilding">
                        <img className='lg:p-1 lg:rounded-lg lg:w-[300px] lg:h-[280px] object-cover lg:hover:shadow-md lg:hover:shadow-[#8f8e8e]' src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        <div className='absolute w-fit bottom-1 bg-[#e5e5e5] rounded ml-1'>
                            <h2 className='text-lg lg:text-xl px-1'><span className='text-2xl bg-black'></span>Custom Home Building</h2>
                        </div>
                    </Link>
                </div>
                <div className='relative col-span-2 cursor-pointer'>
                    <Link to="/CommercialConstruction">
                        <img className='lg:p-1 lg:rounded-lg w-[176px] h-[150px] lg:w-[300px] lg:h-[280px] object-cover lg:hover:shadow-md lg:hover:shadow-[#8f8e8e]' src="https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        <div className='absolute w-fit lg:bottom-1 bg-[#e5e5e5] rounded lg:ml-1'>
                            <h2 className='text-sm lg:text-xl px-1'><span className='text-2xl bg-black'></span>Commercial Construction</h2>
                        </div>
                    </Link>
                </div>
                <div className='relative col-span-2 cursor-pointer'>
                    <Link to="/RenovationsAndRemodeling">
                        <img className='lg:p-1 lg:rounded-lg w-[176px] h-[150px] lg:w-[300px] lg:h-[280px] object-cover lg:hover:shadow-md lg:hover:shadow-[#8f8e8e]' src="https://images.pexels.com/photos/5481512/pexels-photo-5481512.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        <div className='absolute w-fit lg:bottom-1 bg-[#e5e5e5] rounded lg:ml-1'>
                            <h2 className='text-sm lg:text-xl px-1'><span className='text-2xl bg-black'></span>Renovations and Remodeling</h2>
                        </div>
                    </Link>
                </div>
                <div className='relative hidden lg:block cursor-pointer'>
                    <Link to="/InteriorDesign">
                        <img className='lg:p-1 lg:rounded-lg lg:w-[300px] lg:h-[280px] object-cover lg:hover:shadow-md lg:hover:shadow-[#8f8e8e]' src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                        <div className='absolute w-fit lg:bottom-1 bg-[#e5e5e5] rounded ml-1'>
                            <h2 className='text-xl px-1'><span className='text-2xl bg-black'></span>Interior Design</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        {/* Registration Form */}
        <ContractState>
            <RegistrationForm />
        </ContractState>

        {/* <Contract showAlert={showAlert} /> */}

        <div className='mb-[20px]'></div>

    </>
  )
}

export default Home
