import React from 'react'
import useScrollToTop from './useScrollToTop';
import { baseUrl } from '../Urls';

const ProjectDisplay = ({project}) => { 
  
  useScrollToTop();

  return (
    <>
      <div className="m-8 lg:m-16 text-center items-center lg:grid lg:grid-cols-2 mt-6 lg:mt-8">
          <div className="">
            <img className='w-full h-72 object-cover rounded-xl' src={project.image} alt="" />
          </div>
          <div className="mt-4 lg:mt-0">
            <div className="text-3xl lg:text-4xl font-bold">
              {project.title}
            </div>
            <div className="text-xl lg:text-2xl">
               {project.description}
            </div>
          </div>
          {/* <div className="flex my-6 mx-10 space-x-3">
            <img className='w-56 h-32 object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110' src={baseUrl + project.image} alt="" />
            <img className='w-56 h-32 object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110' src={baseUrl + project.image} alt="" />
            <img className='w-56 h-32 object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110' src={baseUrl + project.image} alt="" />
            <img className='w-56 h-32 object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110' src={baseUrl + project.image} alt="" />
          </div> */}
      </div>
            <div className="m-8 lg:m-16">
                <pre className='px-2 lg:px-16 text-wrap font-serif'>{project.content}</pre>
                {/* {project.content} */}
            </div>
    </>
  )
}

export default ProjectDisplay
