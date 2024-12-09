import React from 'react'
import { Link } from 'react-router-dom'
import arrow_icon from '../assets/images/arrow_icon.svg'

const Breadcrums = ({project}) => {
  // const {project} = props;
  return (
    <div className='flex gap-2 flex-wrap items-center mx-5 my-2 text-sm'>
      <Link to='/'>Suryawanshi Engineers</Link> <img className='h-3' src={arrow_icon} alt="" /> <Link to='/projects'>Projects</Link> <img className='h-3' src={arrow_icon} alt="" /> {project.title}
    </div>
  )
}

export default Breadcrums
