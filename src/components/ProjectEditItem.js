import React, { useContext } from 'react'
import projectContext from '../context/project/projectContext';
import image from '../assets/images/beach waves.png'

const ProjectEditItem = (props) => {

    const context = useContext(projectContext)
    const { deleteProject } = context
    const { project, updateProject } = props;

    const [expandedProject, setexpandedProject] = React.useState(null);

    const handleProjectClick = (index) => {
        setexpandedProject(index);
    };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-4 lg:mx-16 my-4 mb-20 ">
               <div className='bg-yellow-300 w-72 p-2'>
                    <div className="">
                      <img className='w-72 h-40' src={image} alt="" />
                    </div>
                    <div className="text-2xl font-bold w-64">
                        {project.title}
                    </div>
                    
                    <div className="text-xl font-bold w-64">
                        {project.content}
                    </div>
                    
                    {/* <div className="w-52 px-3 py-2 bg-black text-white cursor-pointer" onClick={()=>{updateProject(project)}}>Update</div> */}

                    <div className="w-52 px-3 py-2 bg-black text-white cursor-pointer" onClick={()=>{deleteProject(project._id)}}>Delete</div>

                    

               </div>
            </div>
    </>
  )
}

export default ProjectEditItem
