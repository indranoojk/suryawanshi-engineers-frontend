import React, { useState, useContext, useEffect } from 'react'
import PlainNav from './PlainNav'
import Sidebar from './Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import cross_icon from "../assets/images/cross_icon.png";
import Swal from 'sweetalert2'
import { baseUrl } from "../Urls";

const ProjectEdit = (props) => {

  const [allprojects, setAllProjects] = useState([]);

  const fetchInfo = () => {
    fetch(`${baseUrl}/api/project/allprojects`)
      .then((res) => res.json())
      .then((data) => setAllProjects(data))
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const removeProject = async (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your project has been deleted.",
          icon: "success",
          confirmButtonText: "OK"
        })
      
        await fetch(`${baseUrl}/api/project/deleteproject`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: id }),
        })
        
        fetchInfo();
      }
    });
  }
  // const removeProject = async (id) => {
  //   await fetch(`http://localhost:5001/api/project/deleteproject`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ id: id }),
  //   })

  //   fetchInfo();
  // }



  return (
    <>
      <PlainNav />
      <Sidebar />

      <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-36 lg:mt-4 font-semibold italic font-serif text-center">
        Hello! Mr. Suryawanshi
      </div>

      <div className="m-4 lg:m-20">
        <h1 className='text-2xl lg:text-4xl font-bold font-serif'>All Projects List</h1>
          <table className='mx-2 my-6 lg:mx-8 lg:my-4 drop-shadow-lg shadow-md shadow-slate-600 lg:w-full'>
              <thead className='p-1 lg:p-2'>
                <tr>
                  <th className='border border-black p-1 lg:p-2'>Projects</th>
                  <th className='border border-black p-1 lg:p-2'>Title</th>
                  <th className='border border-black p-1 lg:p-2'>Description</th>
                  <th className='border border-black p-1 lg:p-2'>Content</th>
                  <th className='border border-black p-1 lg:p-2 text-red-600'>Remove</th>
                </tr>
              </thead>
              <tbody>
                {allprojects.map((e, index) => (
                  <tr key={index} className='text-center'>
                    <td className='lg:px-8 border border-black p-1 lg:p-2'>
                      <img className='w-28 lg:ml-16 lg:w-48 object-contain rounded-md' src={baseUrl + e.image} alt="" />
                    </td>
                    <td className='lg:px-8 border border-black p-1 lg:p-2'>{e.title}</td>
                    <td className='lg:px-8 border border-black p-1 lg:p-2'>{e.description}</td>
                    <td className='lg:px-8 border border-black p-1 w-28 lg:p-2 lg:w-96'>{e.content}</td>
                    <td className='lg:px-8 border border-black p-1 lg:p-2'>
                      <img className='cursor-pointer lg:ml-4' src={cross_icon} alt="" onClick={() => { removeProject(e.id) }} />
                    </td>
                    <hr />
                  </tr>
                ))}
              </tbody>
          </table>
      </div>


    </>
  )
}

export default ProjectEdit
