import React, { useContext, useRef } from 'react'
import projectContext from '../context/project/projectContext'
import CarouselItem from './CarouselItem';
import useScrollToTop from './useScrollToTop';

const RelatedProjects = ({id}) => {

    useScrollToTop();

    const {projects} = useContext(projectContext);

    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

  return (
    <>
        <div className="relative mx-10 my-20 lg:mx-64 mb-16">
            
            <div 
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar" 
                ref={carouselRef
            }>
                {projects.map((project, index) => {
                    if (id !== project.id) {
                        return <CarouselItem id={project.id} key={index} title={project.title} description={project.description} image={project.image} />
                    }
                    return null;
                })}
            </div>
            <button 
                onClick={scrollLeft} 
                className="absolute left-0 z-10 p-2 px-3 py-2 bg-gray-800 text-white rounded"
            >
                Left
            </button>

            <button 
                onClick={scrollRight} 
                className="absolute right-0 z-10 p-2 px-3 py-2 bg-gray-800 text-white rounded"
            >
                Right
            </button>
        </div>
    </>
  )
}

export default RelatedProjects
