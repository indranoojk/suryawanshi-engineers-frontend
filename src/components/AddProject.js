import React, { useState, useContext, useEffect } from 'react'
import PlainNav from './PlainNav'
import Sidebar from './Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import upload_area from "../assets/images/upload_area.svg";
import Swal from 'sweetalert2'
import { baseUrl } from "../Urls";

const AddProject = (props) => {

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

  const AddProject = async () => {
        let dataObj;
        let project = projectDetails;

        let formData = new FormData();
        formData.append('project', image);

        await fetch(`${baseUrl}/api/project/images/upload`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: formData,
        }).then((resp) => resp.json())
        .then((data) => { dataObj = data })

        if (dataObj.success) {
        project.image = dataObj.image_url;
        await fetch(`${baseUrl}/api/project/addproject`, {
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
  
  //  catch (error) {
  //   alert("Failed to upload project because " + error);
  // }

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
                    <button disabled={ projectDetails.title.length<3 || projectDetails.description.length<5 || projectDetails.content.length<15 || projectDetails.image === null} type='submit' className='bg-green-500 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue' onClick={() => { AddProject() }}> SUBMIT </button>
                </div>              
                
            </div>  
          </div>
        </form>

    </>
  )
}

export default AddProject
