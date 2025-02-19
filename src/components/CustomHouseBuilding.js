import React from 'react'
import useScrollToTop from './useScrollToTop'

const CustomHouseBuilding = () => {

  useScrollToTop();

  return (
    <>
      <div className="lg:grid lg:grid-cols-2">
        <div className=''>
          <img className='w-full h-[400px] object-cover' src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
        </div>

        <div className="m-4 mt-10">
          <h2 className='text-4xl font-bold font-serif'>Custom House Building</h2>
          <p className='text-lg w-64 lg:w-96 p-2'>Your home should reflect your unique style and personality. Let us design and build a custom home that exceeds your expectations and fits seamlessly into your lifestyle.</p>
        </div>
      </div>
    </>

  )
}

export default CustomHouseBuilding
