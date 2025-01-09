import React, { useState } from 'react';
import PlainNav from './PlainNav';
import Sidebar from './Sidebar/Sidebar';
import upload_area from "../assets/images/upload_area.svg";
import { baseUrl } from "../Urls";
import imageCompression from 'browser-image-compression';

const AddImage = () => {

    const [file, setFile] = useState(null);
    const [imageLink, setImageLink] = useState("");
    const [finalUrl, setFinalUrl] = useState("");
    // const [cloudinaryUrl, setCloudinaryUrl] = useState("");
    const [feedback, setFeedback] = useState("");  // New state for feedback messages


    const compressImage = async (file) => {
        const options = {
            maxSizeMB: 1, // Set max size in MB
            maxWidthOrHeight: 1920, // Set max width or height
            useWebWorker: true,
        };
        return await imageCompression(file, options);
    };

    const handleChange = async (e) => {
      const selectedFile = e.target.files[0];
      const compressedFile = await compressImage(selectedFile);
      setFile(compressedFile);
      previewFiles(compressedFile);
    };

    // const handleChange = async (e) => {
    //     const selectedFile = e.target.files[0];
    //     // const compressedFile = await compressImage(selectedFile);
    //     setFile(selectedFile);
    //     previewFiles(selectedFile);
    // };

    function previewFiles(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImageLink(reader.result);
            console.log(reader.result); // Log the data URL after it's set
        }
        // console.log(image);
    }

    const handleAddImage = async (e) => {
        e.preventDefault();  // Prevent form submission from reloading the page

        try {

            let response = await fetch(`${baseUrl}/api/image/upload`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ imageLink }), // Send image in the body
            });

            const imageObj = await response.json();
            console.log(imageObj);
            setFinalUrl(imageObj.image_url);
            setFeedback(imageObj.success ? alert("Image link generated successfully!") : alert("Failed to generate image link"));
        } catch (error) {
            setFeedback(alert(`Failed to upload image because ${error}`));
            console.log(error);
        }

        setFile(null);

    };

    // const changeImageHandler = (e) => {
    //   setImageDetails({ ...imageDetails, [e.target.name]: e.target.value });
    // };

    return (
        <>
            <PlainNav />
            <Sidebar />

            {/* Form for adding image */}
            <form onSubmit={handleAddImage} className="ml-10 lg:ml-0 mt-4">  {/* Attach event handler to form submission */}
                <div className="p-5 mb-20 text-white lg:flex pb-10" style={{ backgroundImage: `url(${'https://images.pexels.com/photos/19453624/pexels-photo-19453624/free-photo-of-high-line.jpeg?auto=compress&cs=tinysrgb&w=1280'})`, objectFit: 'contain' }}  >
                    <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-4xl font-bold font-serif w-48 m-20 text-opacity-85">
                        ADD AN IMAGE
                    </h2>
                    <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2">

                        <div className="mb-3 lg:m-2">
                            <p className="text-xs lg:text-base font-semibold text-[#dad1bf]">Select Image*</p>
                            <label htmlFor="image">
                                <img className="p-2 w-48 h-32 object-contain" src={!file ? upload_area : URL.createObjectURL(file)} alt="" />
                            </label>
                            <input onChange={handleChange} type="file" accept="image/*" id="image" name="image" hidden />
                        </div>
                        <div>
                            <button disabled={!file} type="submit" className="bg-green-500 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                    {feedback && <div className="feedback-message">{feedback}</div>}  {/* Render feedback message */}
                    {finalUrl && <div className="feedback-message text-2xl font-bold">{finalUrl}</div>}  {/* Render feedback message */}
                </div>
            </form>
        </>
    )
}

export default AddImage
