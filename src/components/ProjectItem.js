import React, { useContext } from 'react'
import { CSSTransition } from "react-transition-group";
import projectContext from '../context/project/projectContext';
import Swal from 'sweetalert2'
import image from '../assets/images/beach waves.png'


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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-4 lg:mx-16 my-4 mb-20 ">
               <div className='bg-yellow-300'>
                    <div className="">
                      <img src={image} alt="" />
                    </div>
                    <div className="text-2xl font-bold">
                        {project.title}
                    </div>
                    <div className="text-xl font-bold">
                        {project.content}
                    </div>
                    <div className="px-3 py-2 bg-black text-white cursor-pointer" onClick={()=>{updateProject(project)}}>Update</div>

               </div>
            </div>
                    
        </>
    )

}

export default ProjectItem
