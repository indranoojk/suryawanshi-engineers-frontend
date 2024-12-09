import React from 'react'
import { baseUrl } from '../Urls'
import { Link } from 'react-router-dom'
import useScrollToTop from './useScrollToTop';

const CarouselItem = ({ id, title, description, image }) => {

    useScrollToTop();

  return (
    <>
        
        <div className="flex-shrink-0 lg:w-1/3 snap-start m-2 bg-white rounded shadow drop-shadow-lg">
            <Link to={`/project/${id}`}>
                <img src={image ? baseUrl + image : "https://media.istockphoto.com/id/2160200359/photo/3d-render-of-abstract-structure-futuristic-architecture-with-empty-concrete-floor.jpg?b=1&s=612x612&w=0&k=20&c=94O6QRIy1jAxyl0f0LDg4FXdDVxpuLARsPYVGriegP0="} alt={title} className="w-64 h-40 object-cover rounded-t" />

                <h3 className="text-lg font-semibold p-2">{title}</h3>
                
                <p className="p-2">{description}</p>
            </Link>
        </div>
    </>
  )
}

export default CarouselItem
