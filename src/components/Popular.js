import React, { useContext } from 'react';
import useScrollToTop from './useScrollToTop';
import { baseUrl } from '../Urls';
import ProjectItem from './ProjectItem';
import projectContext from '../context/project/projectContext';

const Popular = (props) => {
    
    useScrollToTop();

    const context = useContext(projectContext);
    const { projects }  = context;
    
  return (
    <>
      <div className='my-10 mx-5 lg:mx-16'>
                <h2 className='text-5xl font-bold font-serif'>Projects</h2>
            </div>
            <div className="flex flex-col mx-4 lg:mx-16 mb-20">

                <div className={`${projects.length === 0 ? "block" : "hidden"} text-4xl text-red-600 mt-16 font-serif font-bold text-center`}>
                    {'Projects under construction...'}
                </div>

                {/* {projects.map((project) => {
                    return <ProjectItem key={project._id} project={project} />
                })} */}
                <div className="flex flex-wrap">
                    {projects.map((project, index) => {
                        return <ProjectItem id={project.id} key={index} title={project.title} description={project.description} image={project.image} />
                    })}
                </div>


            </div>
    </>
  )
}

export default Popular
