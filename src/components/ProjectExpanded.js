import React, { useContext, useEffect } from 'react'
import projectContext from "../context/project/projectContext"

const ProjectExpanded = (props) => {

  const context = useContext(projectContext)
  const { getOneProject } = context
  const { index, project } = props;    

  return (
    <>
      <div className="cursor-pointer text-center items-center">
                          <img className='lg:w-96 h-56 object-cover' src={project.image} alt="" />
                        

                          <div className="transition duration-300 ease-in-out hover:-translate-y-4">
                              <div className="absolute bottom-1 lg:pl-20 text-white mb-12 text-4xl font-serif uppercase bg-gradient-to-t from-slate-600 to-transparent">
                                  {project.title}
                              </div>
                              
                              <div className="absolute bottom-1 lg:pl-20 text-[#b56adb] mb-4 text-xl font-serif uppercase bg-gradient-to-t from-slate-600 to-transparent">
                                  {project.content}
                              </div>
                          </div>
                      </div>
    </>
  )
}

export default ProjectExpanded
