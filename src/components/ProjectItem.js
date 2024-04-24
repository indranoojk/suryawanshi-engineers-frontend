import React, { useContext } from 'react'
import { CSSTransition } from "react-transition-group";
import projectContext from '../context/project/projectContext';
import Swal from 'sweetalert2'


const ProjectItem = (props) => {

    const context = useContext(projectContext)
    const { deleteProject } = context
    const { project, updateProject } = props;

    const [expandedProject, setexpandedProject] = React.useState(null);
      
    const handleProjectClick = (index) => {
        setexpandedProject(index);
    };


    const handleDelete = () => {
      
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              confirmButtonText: "OK"
            }).then((result) => {
              if (result.isConfirmed) {
                  window.location.reload();
              }
            })
            deleteProject(project._id);
          }
        });
      }

    return (
        <>
            <div className='my-10 mx-5 lg:mx-16'>
                <h2 className='text-5xl font-bold font-serif'>Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-4 lg:mx-16 my-4 mb-20">
                {project.map((project, index) => (
                    <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleProjectClick(index)}
                    >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-contain rounded-md"
                    />
                    </div>
                ))}
            </div>
            {expandedProject !== null && (
                <CSSTransition key={expandedProject} classNames="slide-in" timeout={300}>
                    <div
                        className="fixed lg:mt-24 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                        onClick={() => setexpandedProject(null)}
                    >
                        <div className="float-right">
                <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateProject(project)}}></i>
                <i className="fa-solid fa-trash-can mx-2" onClick={handleDelete}>   <span className='ml-1 text-red-600'>Delete</span> </i>
              </div>
                        <div
                        className="w-full max-w-2xl rounded-lg bg-white p-8 text-center shadow-lg"
                        >
                            <div className='relative'> 
                                <img
                                src={project[expandedProject].image}
                                alt={project[expandedProject].title}
                                className="mb-4 w-64 mx-auto justify-center"
                                />
                                <svg className='absolute w-4  top-0 -right-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            </div>
                        
                        <h2 className="text-2xl font-bold text-gray-800">
                            {project[expandedProject].title}
                        </h2>
                        <p className="mt-4 text-gray-600">
                            {project[expandedProject].content}
                        </p>
                        </div>
                    </div>
                </CSSTransition>
                )}
        </>
    )

}

export default ProjectItem
