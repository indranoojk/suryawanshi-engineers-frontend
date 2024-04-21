import React from 'react'
import founder from '../assets/images/founder.png'

const Founder = () => {
  return (
    <>
        {/* Founders Info */}
        <div className="founder m-12 mt-20 ">
            <div className="flex float-left">
                <div className="bg-gradient-to-b from-[#3a3a3b] via-[#6f6d6d] to-[#3a3a3b] p-4 rounded-full ">
                    <img className='w-48' src={founder} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center m-6'>
                    <span></span>
                    <span className='lg:text-4xl'>Ranjit Suryawanshi</span>
                    <span className='lg:text-2xl font-semibold'>Civil Engineer</span>
                </div>
            </div>

            <div className="flex float-right mt-10 lg:mt-36">
                <div className='flex flex-col justify-center items-center m-6'>
                    <span></span>
                    <span className='lg:text-4xl'>Ajit Suryawanshi</span>
                    <span className='lg:text-2xl font-semibold'>3D Designer</span>
                </div>
                <div className="bg-gradient-to-b from-[#3a3a3b] via-[#6f6d6d] to-[#3a3a3b] p-4 rounded-full ">
                    <img className='w-48' src={founder} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Founder
