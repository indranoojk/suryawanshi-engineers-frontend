// require("dotenv").config();
import React, { useState } from "react"
import ProjectContext from "./projectContext"
import { baseUrl } from "../../Urls";


const ProjectState = (props) => {

    const projectInitial = [];

    const [projects, setProjects] = useState(projectInitial);

    // ROUTE 1: Add a project
    const addProject = async (title, image, content) => {
        const response = await fetch(`${baseUrl}/api/project/addproject`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo"
            },
            body: JSON.stringify({ title, image, content }),
        });
        const project = await response.json()
        setProjects(projects.concat(project));
    };


    // ROUTE 2: Get all projects
    const getProjects = async () => {
        // API call
        const response = await fetch(`${baseUrl}/api/project/fetchallprojects`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo"
            },
        });
        const json = await response.json();
        console.log(json);
        setProjects(json);
    };

     // Edit a project
  const editProject = async (id, title, image, content) => {
    // API call
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/project/updateproject/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, image, content }),
    });
    const json = await response.json();
    console.log(json)
    // eslint-disable-next-line

    let newProjects = JSON.parse(JSON.stringify(projects))
    // Logic to edit in client
    for (let index = 0; index < newProjects.length; index++) {
      const element = newProjects[index];
      if (element._id === id) {
        newProjects[index].title = title;
        newProjects[index].image = image;
        newProjects[index].content = content;
        break;
      }
    }
    setProjects(newProjects)
  };

    // ROUTE 4: Delete a project
    const deleteProject = async (id) => {
        // API call
        const response = await fetch(`${baseUrl}/api/project/deleteproject/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo"
            },
        });
        const json = response.json();
        console.log(json);

        console.log("Deleting the project with id" + id);
        const newProject = projects.filter((project) => {
            return project.id !== id;
        });
        setProjects(newProject);
    };


    return (
        <ProjectContext.Provider
            value={{ projects, setProjects, addProject, editProject, deleteProject, getProjects }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;