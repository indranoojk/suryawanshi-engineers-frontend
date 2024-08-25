import React, { useState, useContext, useEffect } from 'react'
// import projectContext from '../context/project/projectContext'
import PlainNav from './PlainNav'
import Sidebar from './Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
// import UploadImage from './UploadImage'
// import ProjectItem from './ProjectItem'
import upload_area from "../assets/images/upload_area.svg";
import Swal from 'sweetalert2'
import { baseUrl } from "../Urls";

// import ProjectEditItem from './ProjectEditItem'

const ProjectEdit = (props) => {

  // const context = useContext(projectContext);
  // const { addProject, getProjects } = context;

  // const context = useContext(projectContext);
  // const { addProject, getProjects } = context;


  // let navigate = useNavigate();
  // // eslint-disable-next-line
  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     getProjects()
  //   }
  //   else {
  //     navigate("/login");
  //   }
  //   // eslint-disable-next-line
  // }, [])

  
  const [projectDetails, setProjectDetails] = useState({
    title: "", 
    description: "",
    content: "",
    image: ""
  })

  const [image, setImage] = useState(false);
  // const [imageUrl, setImageUrl] = useState(null);

  // const onImageChange = (e)=> {
  //   setImage(e.target.files[0]);
  // }

    // const handleSubmit = async (e)=> {
    //     e.preventDefault();

    //     addProject(project.title, project.description, project.content);
    //     setProject({title: "", description: "", content: ""})

        
    //     const formData = new FormData();
    //     formData.append("image", image);

    //     try {
    //       const response = await fetch(`${baseUrl}/api/images/upload`, formData, {  
    //         method: "POST",
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //           // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo", 
    //         },
    //       }).then((res) => {
    //         console.log(res.msg);
    //       })

    //       setImageUrl(response.data.imageId);
    //     } catch (error) {
    //       console.log("Error uploading image: ", error);
    //     };
        

    //     setImage("");

        
    //     Swal.fire({
    //         title: 'Success!',
    //         text: 'Project added successfully!',
    //         icon: 'success',
    //         confirmButtonText: 'OK'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             window.location.reload();
    //         }
    //       })
    // }

    const AddProject = async () => {
      try{
      let dataObj;
      let project = projectDetails;
  
      let formData = new FormData();
      formData.append('project', image);
      
      await fetch(`http://localhost:5001/api/project/images/upload`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      }).then((resp) => resp.json())
        .then((data) => { dataObj = data })
  
      if (dataObj.success) {
        project.image = dataObj.image_url;
        await fetch(`http://localhost:5001/api/project/addproject`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        })
          .then((resp) => resp.json())
          .then((data) => { data.success ? alert("Project Added") : alert("Failed") });
  
      }
    } catch (error) {
      alert("Failed to upload project beacuse" + error);
    }

      // Swal.fire({
      //           title: 'Success!',
      //           text: 'Project added successfully!',
      //           icon: 'success',
      //           confirmButtonText: 'OK'
      //         }).then((result) => {
      //           if (result.isConfirmed) {
      //               window.location.reload();
      //           }
      //         })
    }
  
    const changeHandler = (e)=> {
      setProjectDetails({...projectDetails, [e.target.name]: e.target.value})
  }

  


  return (
    <>
      <PlainNav />
      <Sidebar />

      <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
            Hello! Mr. Suryawanshi
        </div>
      <form>
        <div className="bg-[#393839] p-5 text-white lg:flex pb-10">
            <h2 style={{fontFamily: "'Cinzel', serif"}} className='text-4xl font-bold font-serif w-48 m-20 text text-opacity-85 -tracking-tighter'>ADD A PROJECT</h2>
            <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2">
                <div className='mb-3 lg:m-2'>
                    <label htmlFor="title" className='text-xs text-[#9e8a5f]'>TITLE*</label> <br/>
                    <input type="text" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='title' value={projectDetails.title} name='title' onChange={(e) => { changeHandler(e) }}  required/>
                </div>

                <div className='mb-3 lg:m-2'>
                    <label htmlFor="description" className='text-xs text-[#9e8a5f]'>Enter Project Description:* </label> <br/>
                    <input type="text" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='description' value={projectDetails.description} name='description' onChange={(e) => { changeHandler(e) }}  required/>
                </div>

                {/* <UploadImage /> */}


                {/* <div className='mb-3 lg:m-2 row-span-2'> */}
                <div className='mb-3 lg:m-2 row-span-2'>
                    <label htmlFor="content" className='text-xs text-[#9e8a5f]'>Enter Project Content:* </label> <br/>
                    <textarea className='mt-0 block w-full px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' name="content" id="content" value={projectDetails.content} onChange={(e) => { changeHandler(e) }} minLength={15} cols="30" rows="5" required></textarea>
                </div>

                <div className='mb-3 lg:m-2 row-span-2'>
                  <p className="text-xs text-[#9e8a5f]">Select Image:*</p>
                    <label htmlFor="image" className='text-xs text-[#9e8a5f]'>
                    <img className="p-2 w-48 h-32 object-contain" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
                    </label> <br/>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" accept="image/*" id='image' name='image' hidden/>
                </div>

                <br />

                <div>
                    <button disabled={ projectDetails.title.length<3 || projectDetails.description.length<5 || projectDetails.content.length<15 } type='submit' className='bg-green-500 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue' onClick={() => { AddProject() }}> SUBMIT </button>
                </div>              
                
            </div>  
          </div>
        </form>

        {/* <ProjectEditItem /> */}

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

        {/* <ProjectEditItem /> */}

    </>
  )
}

export default ProjectEdit
