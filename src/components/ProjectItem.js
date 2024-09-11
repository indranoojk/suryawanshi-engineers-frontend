import React, { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { baseUrl } from "../Urls";
// import image from '../assets/images/beach waves.png'


const ProjectItem = (props) => {

  return (
    <>

        {/* Project card */}
        <div className='p-2'>
          <Link to={`/project/${props.id}`}>
            <img className='w-96 h-64 object-contain' onClick={window.scrollTo(0, 0)} src={baseUrl + props.image} alt="projects" />
          </Link>
          <div className="text-data">
            <div className="">{props.title}</div>
            <div className="">{props.description}</div>
          </div>
        </div>
    </>
  )

}

export default ProjectItem
