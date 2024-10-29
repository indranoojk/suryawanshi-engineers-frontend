// House image
{/* <img className='w-full h-full ' src="https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" /> */}


// flex example for placing image on one side and content on
{/* <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Website Content</h2>
        <p className="text-gray-700">
          This is an example of website content on the left side of the division. It can include text, images, videos, or any other type of media. In this example, we are using Tailwind CSS utility classes to style the content.
        </p>
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <img src="https://picsum.photos/id/1018/600/400" alt="Image" className="w-full h-full rounded object-cover" />
      </div>
    </div> */}


// Suryawanshi poster supposed to be placed in the Home page if required 
{/* Suryawanshi poster */}
        //  <div className='poster mt-4'>
        //     <img src={poster} alt="" />
        // </div> 


{/* This are the models of houses and plans */}
        {/* <div className="models flex flex-wrap mt-4 relative">
            <img className='lg:w-[440px] lg:h-[300px] float-left' src={house1} alt="" />
            <img className='lg:w-[440px] lg:h-[300px] float-right mr-2' src={house2} alt="" />
            <img className='lg:w-[440px] lg:h-[300px] float-left' src={plan1} alt="" />
            <img className='w-[440px] h-[300px] float-right mr-2' src={plan2} alt="" />
        </div> */}









// Project cards with title and desc
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-4 lg:mx-8 my-4 mb-20">

{/* Project card */}
{/* <Link to={`/`}> */}
  <div className='relative lg:w-96 p-2'>
        <div className="cursor-pointer text-center items-center">
            <img className='lg:w-96 h-56 object-cover' src="https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
          

            <div className="transition duration-300 ease-in-out hover:-translate-y-4">
                <div className="absolute bottom-1 lg:pl-20 text-white mb-12 text-4xl font-serif uppercase bg-gradient-to-t from-slate-600 to-transparent">
                    {project.title}
                </div>
                
                <div className="absolute bottom-1 lg:pl-20 text-[#b56adb] mb-4 text-xl font-serif uppercase bg-gradient-to-t from-slate-600 to-transparent">
                    {project.content}
                </div>
            </div>
        </div>

        

        {/* <div className="bg-gradient-to-t from-slate-600 to-transparent w-96
        h-72"></div> */}
        
        
        {/* <div className="px-3 py-2 bg-black text-white cursor-pointer" onClick={()=>{updateProject(project)}}>Update</div> */}



  </div>
{/* </Link> */}
</div>





// GPT AddProject code
// import React, { useState } from 'react';
// import PlainNav from './PlainNav';
// import Sidebar from './Sidebar/Sidebar';
// import upload_area from "../assets/images/upload_area.svg";
// import { baseUrl } from "../Urls";

// const AddProject = () => {
//   const [projectDetails, setProjectDetails] = useState({
//     title: "", 
//     description: "",
//     content: "",
//     image: ""
//   });

//   const [image, setImage] = useState(null);
//   const [feedback, setFeedback] = useState("");  // New state for feedback messages

//   const handleAddProject = async (e) => {
//     e.preventDefault();  // Prevent form submission from reloading the page

//     try {
//       let project = projectDetails;
//       let formData = new FormData();
//       formData.append('project', image);

//       let response = await fetch(`${baseUrl}/api/project/images/upload`, {
//         method: 'POST',
//         headers: { Accept: 'application/json' },
//         body: formData,
//       });

//       let dataObj = await response.json();

//       if (dataObj.success) {
//         project.image = dataObj.image_url;
//         let addProjectResponse = await fetch(`${baseUrl}/api/project/addproject`, {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(project),
//         });

//         let addProjectData = await addProjectResponse.json();
//         setFeedback(addProjectData.success ? alert("Project added successfully!") : alert("Failed to add project"));
//       }
//     } catch (error) {
//       setFeedback(`Failed to upload project because ${error}`);
//     }
//   };

//   const changeHandler = (e) => {
//     setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <PlainNav />
//       <Sidebar />
//       <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
//         Hello! Mr. Suryawanshi
//       </div>
//       <form onSubmit={handleAddProject}>  {/* Attach event handler to form submission */}
//         <div className="bg-[#393839] p-5 text-white lg:flex pb-10">
//           <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-4xl font-bold font-serif w-48 m-20 text-opacity-85">
//             ADD A PROJECT
//           </h2>
//           <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2">
//             {/* Input fields and labels */}
//             <div className="mb-3 lg:m-2">
//               <label htmlFor="title" className="text-xs lg:text-base text-[#9e8a5f]">TITLE*</label>
//               <input type="text" className="input-class" id="title" name="title" value={projectDetails.title} onChange={changeHandler} required />
//             </div>
//             <div className="mb-3 lg:m-2">
//               <label htmlFor="description" className="text-xs lg:text-base text-[#9e8a5f]">Project Type*</label>
//               <input type="text" className="input-class" id="description" name="description" value={projectDetails.description} onChange={changeHandler} required />
//             </div>
//             <div className="mb-3 lg:m-2 row-span-2">
//               <label htmlFor="content" className="text-xs lg:text-base text-[#9e8a5f]">Project Content*</label>
//               <textarea className="input-class" name="content" id="content" value={projectDetails.content} onChange={changeHandler} required />
//             </div>
//             <div className="mb-3 lg:m-2 row-span-2">
//               <p className="text-xs lg:text-base text-[#9e8a5f]">Select Image*</p>
//               <label htmlFor="image">
//                 <img className="p-2 w-48 h-32 object-contain" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
//               </label>
//               <input onChange={(e) => setImage(e.target.files[0])} type="file" accept="image/*" id="image" name="image" hidden />
//             </div>
//             <div>
//               <button disabled={projectDetails.title.length < 3 || projectDetails.description.length < 5 || projectDetails.content.length < 15 || !image} type="submit" className="submit-button">
//                 SUBMIT
//               </button>
//             </div>
//           </div>
//           {feedback && <div className="feedback-message">{feedback}</div>}  {/* Render feedback message */}
//         </div>
//       </form>
//     </>
//   );
// };

// export default AddProject;


// my AddProject code
// import React, { useState, useContext, useEffect } from 'react'
// import PlainNav from './PlainNav'
// import Sidebar from './Sidebar/Sidebar'
// import { useNavigate } from 'react-router-dom'
// import upload_area from "../assets/images/upload_area.svg";
// import Swal from 'sweetalert2'
// import { baseUrl } from "../Urls";

// const AddProject = (props) => {

// // let navigate = useNavigate();
//   // // eslint-disable-next-line
//   // useEffect(() => {
//   //   if (localStorage.getItem('token')) {
//   //     getProjects()
//   //   }
//   //   else {
//   //     navigate("/login");
//   //   }
//   //   // eslint-disable-next-line
//   // }, [])

  
//   const [projectDetails, setProjectDetails] = useState({
//     title: "", 
//     description: "",
//     content: "",
//     image: ""
//   })

//   const [image, setImage] = useState(false);

//   const AddProject = async (e) => {
    
//     try {
//         let dataObj;
//         let project = projectDetails;

//         let formData = new FormData();
//         formData.append('project', image);

//         await fetch(`${baseUrl}/api/project/images/upload`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//         },
//         body: formData,
//         }).then((resp) => resp.json())
//         .then((data) => { dataObj = data })

//         if (dataObj.success) {
//         project.image = dataObj.image_url;
//         await fetch(`${baseUrl}/api/project/addproject`, {
//             method: 'POST',
//             headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(project),
//         })
//             .then((resp) => resp.json())
//             .then((data) => { data.success ? alert("Project Added") : alert("Failed") });

//         }
//   }
//    catch (error) {
//     alert("Failed to upload project because " + error);
//   }

//     // Swal.fire({
//     //           title: 'Success!',
//     //           text: 'Project added successfully!',
//     //           icon: 'success',
//     //           confirmButtonText: 'OK'
//     //         }).then((result) => {
//     //           if (result.isConfirmed) {
//     //               window.location.reload();
//     //           }
//     //         })
//   }

//   const changeHandler = (e)=> {
//     setProjectDetails({...projectDetails, [e.target.name]: e.target.value})
// }


//   return (
//     <>
//       <PlainNav />
//       <Sidebar />

//       <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
//             Hello! Mr. Suryawanshi
//         </div>
//       <form>
//         <div className="bg-[#393839] p-5 text-white lg:flex pb-10">
//             <h2 style={{fontFamily: "'Cinzel', serif"}} className='text-4xl font-bold font-serif w-48 m-20 text text-opacity-85 -tracking-tighter'>ADD A PROJECT</h2>
//             <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2">
//                 <div className='mb-3 lg:m-2'>
//                     <label htmlFor="title" className='text-xs text-[#9e8a5f]'>TITLE*</label> <br/>
//                     <input type="text" className='mt-0 block w-full lg:w-80 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='title' value={projectDetails.title} name='title' onChange={(e) => { changeHandler(e) }}  required/>
//                 </div>

//                 <div className='mb-3 lg:m-2'>
//                     <label htmlFor="description" className='text-xs text-[#9e8a5f]'>Enter Project Type:* </label> <br/>
//                     <input type="text" className='mt-0 block w-full lg:w-80 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='description' value={projectDetails.description} name='description' onChange={(e) => { changeHandler(e) }}  required/>
//                 </div>

//                 {/* <div className='mb-3 lg:m-2 row-span-2'> */}
//                 <div className='mb-3 lg:m-2 row-span-2'>
//                     <label htmlFor="content" className='text-xs text-[#9e8a5f]'>Enter Project Content:* </label> <br/>
//                     <textarea className='mt-0 block w-full px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' name="content" id="content" value={projectDetails.content} onChange={(e) => { changeHandler(e) }} minLength={15} cols="30" rows="5" required></textarea>
//                 </div>

//                 <div className='mb-3 lg:m-2 row-span-2'>
//                   <p className="text-xs text-[#9e8a5f]">Select Image:*</p>
//                     <label htmlFor="image" className='text-xs text-[#9e8a5f]'>
//                     <img className="p-2 w-48 h-32 object-contain" src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
//                     </label> <br/>
//                     <input onChange={(e) => setImage(e.target.files[0])} type="file" accept="image/*" id='image' name='image' hidden/>
//                 </div>

//                 <br />

//                 <div>
//                     <button disabled={ projectDetails.title.length<3 || projectDetails.description.length<5 || projectDetails.content.length<15 || projectDetails.image === null} type='submit' className='bg-green-500 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue' onClick={() => { AddProject() }}> SUBMIT </button>
//                 </div>              
                
//             </div>  
//           </div>
//         </form>

//     </>
//   )
// }

// export default AddProject

