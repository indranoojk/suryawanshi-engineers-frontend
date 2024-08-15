// require("dotenv").config(); // Assuming environment variables are configured
import React, { useState } from "react";
import ProjectContext from "./projectContext";
import { baseUrl } from "../../Urls";  // Assuming baseUrl is defined elsewhere

const ProjectState = (props) => {
  const projectInitial = [];

  const [projects, setProjects] = useState(projectInitial);

  // Add a project with image handling
  const addProject = async (title, description, content) => {
    try {
      const response = await fetch(`${baseUrl}/api/project/addproject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo", 
        },
        body: JSON.stringify({ title, description, content }),
      });

      const project = await response.json();
      console.log(project);
      setProjects(projects.concat(project));
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };


  


  // Get all projects
  const getProjects = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/project/fetchallprojects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo",
        },
      });

      const json = await response.json();
      console.log(json);
      setProjects(json);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // Edit a project (not implemented)
  // Implement logic for editing project on the backend and updating state

  // Delete a project
  const deleteProject = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/project/deleteproject/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo", 
        },
      });

      const json = await response.json();
      console.log(json);

      console.log("Deleting the project with id", id);
      const newProjects = projects.filter((project) => project._id !== id);
      setProjects(newProjects);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, addProject, deleteProject, getProjects }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
