import React, { useState } from "react";
import ImageContext from "./imageContext";
import { baseUrl } from "../../Urls";

const ImageState = (props) => {

    const imageInitial = [];

    const [images, setImages] = useState(imageInitial);

    const addImage = async (image) => {
        const formdata = new FormData();
        if (image){
            formdata.append("image", image);
        }

        try {
            const response = await fetch(`${baseUrl}/api/image/upload`, {
                method: "POST",
                headers: {
                  "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo", 
                },
                body: formdata,
            });

            console.log(response.msg);
            // const image = await response.formData();
            // console.log(image);
            // setImages(images.concat(image));
            } catch (err) {
                console.log("Error uploading image:", err);
                };   
    }

    const getImage = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/api/image/${id}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo",
                },
              });
              const imageData = await response.blob();
              const imageObjectURL = URL.createObjectURL(imageData);
              setImages(imageObjectURL);
        } catch (error) {
            console.log(error.message);
          }
    }


  return (
    <ImageContext.Provider
    value={{ images, setImages, addImage, getImage }}>
      {props.children}
    </ImageContext.Provider>
  )
}

export default ImageState
