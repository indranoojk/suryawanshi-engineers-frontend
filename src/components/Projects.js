import React, { useContext, useEffect } from 'react'
import projectContext from "../context/project/projectContext"
import ProjectItem from './ProjectItem';
import useScrollToTop from './useScrollToTop';
// import { useNavigate } from 'react-router-dom'


const Projects = (props) => {

    useScrollToTop();

    const context = useContext(projectContext)
    const { projects, getProjects } = context;

    // let navigate = useNavigate();

    // eslint-disable-next-line
    useEffect(() => {
            getProjects()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className='my-10 mx-5 lg:mx-16'>
                <h2 className='text-5xl font-bold font-serif'>Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-4 lg:mx-16 my-4 mb-20">
            
                <div className={` ${projects.length === 0 ? "block" : "hidden"} text-4xl text-red-600 mt-16 font-serif font-bold text-center`}>
                    {'Projects under construction...'}
                </div>
            
                {projects.map((project) => {
                    return <ProjectItem key={project._id} project={project} />
                })}
            </div>

            {/* <div className="m-20">
                <ProjectForm />
            </div>

            <div className="m-20">
                <ProjectList />
            </div> */}
        </>
    )

}

export default Projects
