import React, { useState, useContext, useEffect } from 'react'
import useScrollToTop from './useScrollToTop';
import { useParams } from 'react-router-dom'
import { baseUrl } from '../Urls';
import Breadcrums from './Breadcrums';

const ProjectDisplay = ({project}) => { 
  
  useScrollToTop();

  return (
    <>
      <div className="m-16 text-center items-center">
                          <img className='lg:w-96 h-56 object-cover' src={baseUrl + project.image} alt="" />
                        

                          <div className="">
                              <div className="">
                                  {project.title}
                              </div>

                              <div className="">
                                  {project.description}
                              </div>
                              
                              <div className="">
                                  {project.content}
                              </div>
                          </div>

                          More projects
                      </div>
    </>
  )
}

export default ProjectDisplay
