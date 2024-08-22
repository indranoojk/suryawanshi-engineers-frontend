import React, { useContext, useState, useEffect } from 'react'
import projectContext from '../context/project/projectContext';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { baseUrl } from "../Urls";
// import image from '../assets/images/beach waves.png'


const ProjectItem = (props) => {

    const context = useContext(projectContext)
    const { getProjects, deleteProject } = context
    const { index, project, imageId } = props;

    const [imageUrl, setImageUrl] = useState(null);

    
    useEffect(() => {

      const getImage = async () => {
        try {
          const response = await fetch(`${baseUrl}/api/images/image/${imageId}`, {
            method: "GET",
            // headers: {
            //   "Content-Type": "application/json",
            //   "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo",
            // },
          });
  
          const blob = new Blob([response.data], { type: 'image/*' });
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        } catch (error) {
          console.error('Error getting image:', error);
        }
      };
  

      getProjects()
      getImage()
  // eslint-disable-next-line
    }, [imageId]);

    // const [expandedProject, setexpandedProject] = React.useState(null);

    // const handleProjectClick = (index) => {
    //     setexpandedProject(index);
    // };


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
            
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-4 lg:mx-8 my-4 mb-20">

            {/* Project card */}
            {/* <Link to={`/`}> */}
              <div className='relative lg:w-96 p-2'>
                    <div className="cursor-pointer text-center items-center">
                        {/* <img className='lg:w-96 h-56 object-cover' src={"https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1280"} alt="" /> */}
                        {/* <img className='lg:w-96 h-56 object-cover' src={`../../backend/uploads/${image._id}`} alt={project.title} /> */}

                        {imageUrl && (
                          <div>
                            <img className='lg:w-96 h-56 object-cover' src={imageUrl} alt={project.title} />
                          </div>
                        )}
                      

                        {/* <div className="transition duration-300 ease-in-out hover:-translate-y-4"> */}
                        <div className="">
                            <div className="absolute bottom-1 lg:pl-20 text-white mb-12 text-4xl font-serif uppercase bg-yellow-200">
                                {project.title}
                            </div>
                            
                            <div className="absolute bottom-1 lg:pl-20 text-[#b56adb] mb-4 text-xl font-serif uppercase bg-yellow-200">
                                {project.description}
                            </div>
                        </div>
                    </div>

                    

                    {/* <div className="bg-gradient-to-t from-slate-600 to-transparent w-96
                    h-72"></div> */}
                    
                    
                    {/* <div className="px-3 py-2 bg-black text-white cursor-pointer" onClick={()=>{updateProject(project)}}>Update</div> */}



              </div>
          {/* </Link> */}
          </div>



            
                    
        </>
    )

}

export default ProjectItem
