import React, { useState, useContext, useEffect } from 'react'
import useScrollToTop from '../components/useScrollToTop';
import { useParams } from 'react-router-dom'
// import { baseUrl } from '../Urls';
import projectContext from '../context/project/projectContext';
import Breadcrums from '../components/Breadcrums';
import ProjectDisplay from '../components/ProjectDisplay';
import RelatedProjects from '../components/RelatedProjects';

const Project = () => {

    useScrollToTop();

    const {projects} = useContext(projectContext);
    const { id } = useParams();
    const [project, setProject] = useState(false);


    useEffect(()=>{
      setProject(projects.find((e)=>e.id === Number(id)))
    },[projects,id])


  return project ? (
    <>
        <div>
          <Breadcrums project={project} />
          <ProjectDisplay project={project} />
          <RelatedProjects id={project.id} />
        </div>
    </>
  ) : <div className='m-16 text-4xl text-center font-bold text-red-500'>
        "Project Details Not Available"
  </div>
}

export default Project

