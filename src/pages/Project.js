import React, { useState, useContext, useEffect } from 'react'
import useScrollToTop from '../components/useScrollToTop';
import { useParams } from 'react-router-dom'
import { baseUrl } from '../Urls';
import projectContext from '../context/project/projectContext';
import Breadcrums from '../components/Breadcrums';
import ProjectDisplay from '../components/ProjectDisplay';

const Project = ({ projectId }) => {

    useScrollToTop();

    const context = useContext(projectContext);
    const { projects } = context;
    // const {projectId} = useParams();
    // const [project, setProject] = useState(false);

    const project = projects.find((e) => e.id === Number(projectId));
    // useEffect(() => {
    //     setProject(projects.find((e)=>e.id === Number(projectId)))
    //   },[projects,projectId]
    // )

  return (
    <>
        <Breadcrums project={project} />
        <ProjectDisplay project={project} />
    </>
  )
}

export default Project

