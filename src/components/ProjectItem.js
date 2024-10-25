import React, { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { baseUrl } from "../Urls";
// import image from '../assets/images/beach waves.png'


const ProjectItem = (props) => {

  return (
    <>

        {/* Project card */}
        <div className='lg:p-2 relative'>
          <div className=''>
            <Link to={`/projects/${props.id}`}>
              <img className='w-80 h-64 lg:w-96 lg:h-64 object-contain' onClick={window.scrollTo(0, 0)} src={props.image? baseUrl + props.image: "https://media.istockphoto.com/id/2160200359/photo/3d-render-of-abstract-structure-futuristic-architecture-with-empty-concrete-floor.jpg?b=1&s=612x612&w=0&k=20&c=94O6QRIy1jAxyl0f0LDg4FXdDVxpuLARsPYVGriegP0="} alt="projects" />
            </Link>
          </div>
          <div className="text-data w-80 lg:w-96 absolute bottom-0 p-1 lg:p-2 text-center bg-gradient-to-t from-[#191919] to-transparent">
            <div className="text-xl lg:text-2xl font-bold font-serif text-[#779cca]">{props.title}</div>
            <div className="text-2xl lg:text-3xl font-bold font-serif text-[#497cba]">{props.description}</div>
          </div>
        </div>
    </>
  )

}

export default ProjectItem
