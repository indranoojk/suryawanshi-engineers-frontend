// require("dotenv").config(); // Assuming environment variables are configured
import React, { useState, useEffect } from "react";
import ProjectContext from "./projectContext";
import { baseUrl } from "../../Urls";  // Assuming baseUrl is defined elsewhere

const ProjectState = (props) => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/project/allprojects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])

  return (
    <ProjectContext.Provider
      value={{ projects }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
