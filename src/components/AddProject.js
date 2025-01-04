import React, { useState } from 'react';
import PlainNav from './PlainNav';
import Sidebar from './Sidebar/Sidebar';
import upload_area from "../assets/images/upload_area.svg";
import { baseUrl } from "../Urls";

const AddProject = () => {
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    content: "",
  });

  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [feedback, setFeedback] = useState("");  // New state for feedback messages


  
  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    // console.log(file);
    previewFiles(file);
  }
  
  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    }
    console.log(image);
  }

  const handleAddProject = async (e) => {
    e.preventDefault();  // Prevent form submission from reloading the page

    try {
      let project = projectDetails;

      let response = await fetch(`${baseUrl}/api/project/images/upload`, {
      // let response = await fetch(`http://localhost:3000/api/project/images/upload`, {
        method: 'POST',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(image),
        image: image
      });

      let dataObj = await response.json();

      if (dataObj.success) {
        project.image = dataObj.image_url;
        let addProjectResponse = await fetch(`${baseUrl}/api/project/addproject`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        });

        let addProjectData = await addProjectResponse.json();
        setFeedback(addProjectData.success ? alert("Project added successfully!") : alert("Failed to add project"));
        // setFeedback(addProjectData.success ? Swal.fire({
        //   title: 'Success!',
        //   text: 'Project added successfully!',
        //   icon: 'success',
        //   confirmButtonText: 'OK'
        // }) : Swal.fire({
        //   title: 'Error!',
        //   text: 'Failed to add project',
        //   icon: 'error',
        //   confirmButtonText: 'OK'
        // }));
      }
    } catch (error) {
      setFeedback(alert(`Failed to upload project because ${error}`));
    }

    setProjectDetails({title: "", description: "", content: "", image: ""})

  };

  const changeHandler = (e) => {
    setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PlainNav />
      <Sidebar />
      <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
        Hello! Mr. Suryawanshi
      </div>
      <form onSubmit={handleAddProject}>  {/* Attach event handler to form submission */}
        <div className="p-5 text-white lg:flex pb-10"  style={{backgroundImage: `url(${'https://images.pexels.com/photos/19453624/pexels-photo-19453624/free-photo-of-high-line.jpeg?auto=compress&cs=tinysrgb&w=1280'})`, objectFit: 'contain'}}  >
          <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-4xl font-bold font-serif w-48 m-20 text-opacity-85">
            ADD A PROJECT
          </h2>
          <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2">
            {/* Input fields and labels */}
            <div className="mb-3 lg:m-2">
              <label htmlFor="title" className="text-xs lg:text-base font-semibold text-[#dad1bf]">Title*</label>
              <input type="text" className="input-class mt-0 block w-full lg:w-80 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400" id="title" name="title" value={projectDetails.title} onChange={changeHandler} required />
            </div>
            <div className="mb-3 lg:m-2">
              <label htmlFor="description" className="text-xs lg:text-base font-semibold text-[#dad1bf]">Project Type*</label>
              <input type="text" className="input-class mt-0 block w-full lg:w-80 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400" id="description" name="description" value={projectDetails.description} onChange={changeHandler} required />
            </div>
            <div className="mb-3 lg:m-2 row-span-2">
              <label htmlFor="content" className="text-xs lg:text-base font-semibold text-[#dad1bf]">Project Content*</label>
              <textarea className="input-class mt-0 block w-full px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400" name="content" id="content" value={projectDetails.content} onChange={changeHandler} cols="30" rows="5" required />
            </div>
            <div className="mb-3 lg:m-2 row-span-2">
              <p className="text-xs lg:text-base font-semibold text-[#dad1bf]">Select Image*</p>
              <label htmlFor="image">
                <img className="p-2 w-48 h-32 object-contain" src={!file ? upload_area : URL.createObjectURL(file)} alt="" />
              </label>
              <input onChange={handleChange} type="file" accept="image/*" id="image" name="image" hidden />
            </div>
            <div>
              <button disabled={projectDetails.title.length < 3 || projectDetails.description.length < 5 || projectDetails.content.length < 15 || !image} type="submit" className="bg-green-500 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue">
                SUBMIT
              </button>
            </div>
          </div>
          {feedback && <div className="feedback-message">{feedback}</div>}  {/* Render feedback message */}
        </div>
      </form>
    </>
  );
};

export default AddProject;