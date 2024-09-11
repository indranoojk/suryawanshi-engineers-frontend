import React from 'react'
import arrow_icon from '../assets/images/arrow_icon.svg'

const Breadcrums = (props) => {
  const {project} = props;
  return (
    <div className='mt-16 flex gap-2 flex-wrap items-center mx-5 my-2'>
      Projects <img className='h-3' src={arrow_icon} alt="" /> {project.title} 
    </div>
  )
}

export default Breadcrums
