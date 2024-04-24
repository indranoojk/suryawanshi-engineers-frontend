import React, { useState, useContext } from 'react'
import projectContext from '../context/project/projectContext'
import PlainNav from './PlainNav'
import Sidebar from './Sidebar/Sidebar'
import UploadImage from './UploadImage'

const ProjectEdit = (props) => {

  const context = useContext(projectContext);
    const { addProject } = context;

    const [project, setProject] = useState({title: "", content: ""})
    const handleClick = (e)=> {
        e.preventDefault();
        addProject(project.title, project.content);
        setProject({title: "", content: ""})
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

                <UploadImage />


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

    </>
  )
}

export default ProjectEdit
