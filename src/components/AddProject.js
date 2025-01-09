import React, { useState } from 'react';
import PlainNav from './PlainNav';
import Sidebar from './Sidebar/Sidebar';
import { baseUrl } from "../Urls";
import AddImage from './AddImage';

const AddProject = () => {

  const [errors, setErrors] = useState({});

  const projectInitial = [];

  const [projects, setProjects] = useState(projectInitial);

  // const [projectDetails, setProjectDetails] = useState({
  //   title: "",
  //   description: "",
  //   content: "",
  //   image: "",
  // });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [feedback, setFeedback] = useState("");  // New state for feedback messages

  const handleAddProject = async (e) => {
    e.preventDefault();  // Prevent form submission from reloading the page

    const errors = {};

    if (!title) {
      errors.title = 'title is required';
    } else if (title.length < 3) {
      errors.title = 'title must be at least 3 characters';
    }

    if (!description) {
      errors.description = 'description is required';
    } else if (description.length < 5) {
      errors.description = 'description must be at least 3 characters';
    }

    if (!content) {
      errors.content = 'content is required';
    } else if (content.length < 3) {
      errors.centent = 'content must be at least 15 characters';
    }

    if (!image) {
      errors.image = 'image is required';
    }

    try {
      // let project = projectDetails;
      const response = await fetch(`${baseUrl}/api/project/addproject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, content, image }),
      });

      const addProjectData = await response.json();
      setProjects(projects.concat(addProjectData));
      console.log(addProjectData);
      setFeedback(addProjectData.success ? alert("Project added successfully!") : alert("Failed to add project"));

      setTitle("");
      setDescription("");
      setContent("");
      setImage("");
    } catch (error) {
      setFeedback(alert(`Failed to upload project because ${error}`));
      console.log(error);
    }

    // setProjectDetails({ title: "", description: "", content: "", image: "" })

  };

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'title':
        setTitle(value);
        if (value) {
          setErrors({ ...errors, title: null });
        }
        break;
      case 'description':
        setDescription(value);
        if (value) {
          setErrors({ ...errors, description: null });
        }
        break;
      case 'content':
        setContent(value);
        if (value) {
          setErrors({ ...errors, content: null });
        }
        break;
      case 'image':
        setImage(value);
        if (value) {
          setErrors({ ...errors, image: null });
        }
        break;
      default:
        break;
    }
  };

  // const changeHandler = (e) => {
  //   setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  // };

  return (
    <>
      <PlainNav />
      <Sidebar />
      <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
        Hello! Mr. Suryawanshi
      </div>

      <AddImage />

      {/* Form for adding project */}
      <form onSubmit={handleAddProject}>  {/* Attach event handler to form submission */}
        <div className="p-5 text-white lg:flex pb-10" style={{ backgroundImage: `url(${'https://images.pexels.com/photos/19453624/pexels-photo-19453624/free-photo-of-high-line.jpeg?auto=compress&cs=tinysrgb&w=1280'})`, objectFit: 'contain' }}  >
          <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-4xl font-bold font-serif w-48 m-20 text-opacity-85">
            ADD A PROJECT
          </h2>
          <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2">
            {/* Input fields and labels */}
            <div className="mb-3 lg:m-2">
              <label htmlFor="title" className="text-xs lg:text-base font-semibold text-[#dad1bf]">Title*</label>
              <input type="text" className={`mt-0 block w-full  px-0.5 bg-transparent text-white border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''} `} id="title" name="title" value={title} onChange={(e) => handleInputChange('title', e.target.value)} required />
              {errors.title && (
                <p className="text-red-500 text-xs italic">{errors.title}</p>
              )}
            </div>
            <div className="mb-3 lg:m-2">
              <label htmlFor="description" className="text-xs lg:text-base font-semibold text-[#dad1bf]">Project Type*</label>
              <input type="text" className={`mt-0 block w-full  px-0.5 bg-transparent text-white border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''} `} id="description" name="description" value={description} onChange={(e) => handleInputChange('description', e.target.value)} required />
              {errors.description && (
                <p className="text-red-500 text-xs italic">{errors.description}</p>
              )}
            </div>

            <div className="mb-3 lg:m-2 row-span-2">
              <label htmlFor="content" className="text-xs lg:text-base font-semibold text-[#dad1bf]">Project Content*</label>
              <textarea className={`mt-0 block w-full  px-0.5 bg-transparent text-white border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.content ? 'border-red-500' : ''} `} name="content" id="content" value={content} onChange={(e) => handleInputChange('content', e.target.value)} cols="30" rows="5" required />
              {errors.content && (
                <p className="text-red-500 text-xs italic">{errors.content}</p>
              )}
            </div>

            <div className="mb-3 lg:m-2 row-span-2">
              <label htmlFor="image" className="text-xs lg:text-base font-semibold text-[#dad1bf]"> Image* </label>
              <input type="text" className={`mt-0 block w-full  px-0.5 bg-transparent text-white border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.image ? 'border-red-500' : ''} `} id="image" name="image" value={image} onChange={(e) => handleInputChange('image', e.target.value)} required />
              {errors.image && (
                <p className="text-red-500 text-xs italic">{errors.image}</p>
              )}
            </div>

            <div>
              <button type="submit" className="bg-green-500 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue">
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