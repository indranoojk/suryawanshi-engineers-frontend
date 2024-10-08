import React from 'react'
import logo from '../assets/images/Suryawanshi poster.png'
import Projects from '../pages/Project'
import useScrollToTop from './useScrollToTop'

const Contact = () => {

  useScrollToTop();

  return (
    <>
        <div className="m-4 lg:m-10">
            <img className='w-full object-contain' src={logo} alt="" />
        </div>

    </>
  )
}

export default Contact
