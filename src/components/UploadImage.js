import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { baseUrl } from "../Urls";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const [imageUrl, setImageUrl] = useState("")
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    console.log(selectedFile)
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("imageUrl", imageUrl)
    try {
      const response = await fetch(`${baseUrl}/api/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json()
      setImageUrl(data.imageUrl)
      // Handle the response from the server
      console.log("File uploaded successfully", response);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };
  return (
    <div>
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Submit</Button>
    </div>
  );
};

export default UploadImage;