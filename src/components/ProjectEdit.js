import React, { useState, useContext } from 'react'
import projectContext from '../context/project/projectContext'
import PlainNav from './PlainNav'
import Sidebar from './Sidebar/Sidebar'
import UploadImage from './UploadImage'
import ProjectItem from './ProjectItem'
import Swal from 'sweetalert2'

const ProjectEdit = (props) => {

  const context = useContext(projectContext);
  const { addProject } = context;

    const [project, setProject] = useState({title: "", content: ""})
    const handleClick = (e)=> {
        e.preventDefault();
        addProject(project.title, project.content);
        setProject({title: "", content: ""})

        Swal.fire({
            title: 'Success!',
            text: 'Project updated!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })
    }

    const onChange = (e)=> {
        setProject({...project, [e.target.name]: e.target.value})
    }

  return (
    <>
      <PlainNav />
      <Sidebar />

      <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
            Hello! Mr. Suryawanshi
        </div>

        <div className="bg-[#393839] p-5 text-white lg:flex pb-10">
            <h2 style={{fontFamily: "'Cinzel', serif"}} className='text-4xl font-bold font-serif w-48 m-20 text text-opacity-85 -tracking-tighter'>ADD A PROJECT</h2>
            <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2">
                <div className='mb-3 lg:m-2'>
                    <label htmlFor="title" className='text-xs text-[#9e8a5f]'>TITLE*</label> <br/>
                    <input type="text" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='title' name='title' onChange={onChange} minLength={3} required/>
                </div>

                {/* <UploadImage /> */}


                {/* <div className='mb-3 lg:m-2 row-span-2'> */}
                <div className='mb-3 lg:m-2 row-span-2'>
                    <label htmlFor="content" className='text-xs text-[#9e8a5f]'>Enter Project Content:</label> <br/>
                    <textarea className='mt-0 block w-full px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' name="content" id="content" onChange={onChange} minLength={15} cols="30" rows="5" ></textarea>
                </div>

                <br />

                <div>
                    <button disabled={ project.title.length<3 || project.content.length<15 } type='submit' className='bg-green-500 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue' onClick={handleClick}> SUBMIT </button>
                </div>
                
                
            </div>  
        </div>



        {/* <div className='my-10 mx-5 lg:mx-16'>
                <h2 className='text-5xl font-bold font-serif'>Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-4 lg:mx-16 my-4 mb-20 w-full">
            
                <div className="text-4xl text-red-600 mt-16 font-bold text-center">
                    {projects.length === 0 && 'Projects under construction...'}
                </div>

            <div className="w-full text-center">
                {projects.map((project) => {
                    return <ProjectItem key={project._id}  project={project} />
                })}
            </div>
        </div> */}

    </>
  )
}

export default ProjectEdit
