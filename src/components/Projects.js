import React, { useContext, useState, useEffect } from 'react';
// import projectContext from "../context/project/projectContext"
import ProjectItem from './ProjectItem';
import useScrollToTop from './useScrollToTop';
import { baseUrl } from '../Urls';
// import { useNavigate } from 'react-router-dom'


const Projects = (props) => {

    useScrollToTop();

    const [projects, setProjects] = useState([]);

    const fetchInfo = () => {
        fetch(`http://localhost:5001/api/project/fetchallprojects`)
            .then((res) => res.json())
            .then((data) => setProjects(data))
    }

    useEffect(() => {
        fetchInfo();
    }, [])


    // const context = useContext(projectContext)
    // const { projects, getProjects } = context;

    // let navigate = useNavigate();

    // eslint-disable-next-line
    // useEffect(() => {
    //         getProjects()
    //     // eslint-disable-next-line
    // }, [])



    return (
        <>
            <div className='my-10 mx-5 lg:mx-16'>
                <h2 className='text-5xl font-bold font-serif'>Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-4 lg:mx-16 my-4 mb-20">

                <div className={` ${projects.length === 0 ? "block" : "hidden"} text-4xl text-red-600 mt-16 font-serif font-bold text-center`}>
                    {'Projects under construction...'}
                </div>

                {/* {projects.map((project) => {
                    return <ProjectItem key={project._id} project={project} />
                })} */}

                {projects.map((project, index) => {
                    <div key={index}>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-4 lg:mx-8 my-4 mb-20">

                            {/* Project card */}
                            {/* <Link to={`/`}> */}
                            <div className='relative lg:w-96 p-2'>
                                <div className="cursor-pointer text-center items-center">
                                    {/* <img className='lg:w-96 h-56 object-cover' src={"https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1280"} alt="" /> */}
                                    {/* <img className='lg:w-96 h-56 object-cover' src={`../../backend/uploads/${image._id}`} alt={project.title} /> */}

                                    {/* {imageUrl && ( */}
                                    <div>
                                        <img className='lg:w-96 h-56 object-cover' src={project.image} alt={project.title} />
                                    </div>
                                    {/* )} */}


                                    {/* <div className="transition duration-300 ease-in-out hover:-translate-y-4"> */}
                                    <div className="">
                                        <div className="absolute bottom-1 lg:pl-20 text-white mb-12 text-4xl font-serif uppercase">
                                            {project.title}
                                        </div>

                                        <div className="absolute bottom-1 lg:pl-20 text-[#b56adb] mb-4 text-xl font-serif uppercase">
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
                    </div>
                })}


            </div>

            {/* <div className="m-20">
                <ProjectForm />
            </div>

            <div className="m-20">
                <ProjectList />
            </div> */}
        </>
    )

}

export default Projects
