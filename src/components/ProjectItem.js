import React, { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { baseUrl } from "../Urls";
// import image from '../assets/images/beach waves.png'


const ProjectItem = (props) => {

  return (
    <>

      {/* Project card */}
      <div className='lg:p-2'>
        <Link to={`/project/${props.id}`}>
          <div className='shadow-md rounded-lg overflow-hidden relative group m-2 lg:m-0'>
            <img className='w-80 h-48 lg:w-80 lg:h-60 object-cover' onClick={window.scrollTo(0, 0)} src={props.image ? baseUrl + props.image : "https://media.istockphoto.com/id/2160200359/photo/3d-render-of-abstract-structure-futuristic-architecture-with-empty-concrete-floor.jpg?b=1&s=612x612&w=0&k=20&c=94O6QRIy1jAxyl0f0LDg4FXdDVxpuLARsPYVGriegP0="} alt="projects" />

            <div className="p-2 lg:p-4 absolute bottom-0 left-0 right-0 lg:mb-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:blur-0 group-hover:mb-0 group-hover:bg-white group-hover:text-black">
              <h2 className="text-xl lg:text-2xl font-bold lg:mb-1 uppercase p-1 lg:p-0 w-fit group-hover:p-0">{props.title}</h2>
              <p className="text-blue-500 font-semibold uppercase p-1 lg:p-0 w-fit group-hover:p-0">{props.description}</p>
            </div>

            <div className="absolute bottom-4 -left-6 right-4 mb-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:mb-0 lg:group-hover:left-[17rem] group-hover:left-64">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                {/* <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" className="group-hover:fill-white" /> */}
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </>
  )

}

export default ProjectItem
