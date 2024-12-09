import React from 'react'
import useScrollToTop from './useScrollToTop'

const CommercialConstruction = () => {

  useScrollToTop();

  return (
    <>  

      <div className="lg:grid lg:grid-cols-2">
        <div className=''>
            <img className='w-full h-[400px] object-cover' src="https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
        </div>

        <div className="m-4 mt-10">
          <h2 className='text-4xl font-bold font-serif'>Commercial Construction</h2>
          <p className='text-lg w-64 lg:w-96 p-2'>From retail spaces to office buildings, we specialize in creating functional and visually stunning commercial properties that leave a lasting impression on clients and customers.</p>
        </div>
      </div>
    </>
  )
}

export default CommercialConstruction
