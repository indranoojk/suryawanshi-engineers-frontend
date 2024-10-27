import React, { useState, useContext, useEffect } from 'react'
import useScrollToTop from '../components/useScrollToTop';
import { useParams } from 'react-router-dom'
import { baseUrl } from '../Urls';
import projectContext from '../context/project/projectContext';
import Breadcrums from '../components/Breadcrums';
import ProjectDisplay from '../components/ProjectDisplay';

const Project = () => {

    useScrollToTop();

    const {id} = useParams();
    const context = useContext(projectContext);
    const { projects } = context;
    const [projectData, setProjectData] = useState(false);
    const [image, setImage] = useState('')

    // const project = projects.find((e) => e.id === Number(projectId));


    const fetchProjectData = async() => {
      projects.map((item)=> {
        if (item.id === id) {
          setProjectData(item);
          setImage(item.image)
          console.log(item._id);
          return null;
        }
      })
    }

    useEffect(() => {
        fetchProjectData();
      },[id, projects]
    )

  return projectData ? (
    <>
        <div>

        </div>
        {/* <Breadcrums project={project} />
        <ProjectDisplay project={project} /> */}
    </>
  ) : <div className='opacity-0'>

  </div>
}

export default Project

