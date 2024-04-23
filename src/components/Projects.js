import React from 'react'
import { CSSTransition } from "react-transition-group";

const projectContent = [
    {
      title: "Project 1",
      image: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1280",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi sit nihil aliquam. Odio, dolore cupiditate delectus quo natus distinctio, quis sint tempore vel ipsum voluptatibus eum. Voluptatibus dolores rem vel delectus. Adipisci doloremque, dignissimos corporis consequuntur facere, tenetur voluptatum totam, distinctio inventore numquam facilis alias laborum! Saepe rerum corrupti sequi quos reiciendis voluptates dicta eius ad, earum fuga deserunt totam dolorum tempore obcaecati quod et optio minima debitis nisi aut tenetur eaque vel in enim. Tempore iste quisquam eveniet sunt hic laboriosam explicabo fugiat vero modi magni distinctio quae, ea quaerat earum at libero, doloremque delectus maxime? Ipsam, rerum!",
    },
    {
        title: "Project 2",
        image: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1280",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi sit nihil aliquam. Odio, dolore cupiditate delectus quo natus distinctio, quis sint tempore vel ipsum voluptatibus eum. Voluptatibus dolores rem vel delectus. Adipisci doloremque, dignissimos corporis consequuntur facere, tenetur voluptatum totam, distinctio inventore numquam facilis alias laborum! Saepe rerum corrupti sequi quos reiciendis voluptates dicta eius ad, earum fuga deserunt totam dolorum tempore obcaecati quod et optio minima debitis nisi aut tenetur eaque vel in enim. Tempore iste quisquam eveniet sunt hic laboriosam explicabo fugiat vero modi magni distinctio quae, ea quaerat earum at libero, doloremque delectus maxime? Ipsam, rerum!",
      },
    {
      title: "Project 3",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1280",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi sit nihil aliquam. Odio, dolore cupiditate delectus quo natus distinctio, quis sint tempore vel ipsum voluptatibus eum. Voluptatibus dolores rem vel delectus. Adipisci doloremque, dignissimos corporis consequuntur facere, tenetur voluptatum totam, distinctio inventore numquam facilis alias laborum! Saepe rerum corrupti sequi quos reiciendis voluptates dicta eius ad, earum fuga deserunt totam dolorum tempore obcaecati quod et optio minima debitis nisi aut tenetur eaque vel in enim. Tempore iste quisquam eveniet sunt hic laboriosam explicabo fugiat vero modi magni distinctio quae, ea quaerat earum at libero, doloremque delectus maxime? Ipsam, rerum!",
    },
    {
      title: "Project 4",
      image: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1280",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi sit nihil aliquam. Odio, dolore cupiditate delectus quo natus distinctio, quis sint tempore vel ipsum voluptatibus eum. Voluptatibus dolores rem vel delectus. Adipisci doloremque, dignissimos corporis consequuntur facere, tenetur voluptatum totam, distinctio inventore numquam facilis alias laborum! Saepe rerum corrupti sequi quos reiciendis voluptates dicta eius ad, earum fuga deserunt totam dolorum tempore obcaecati quod et optio minima debitis nisi aut tenetur eaque vel in enim. Tempore iste quisquam eveniet sunt hic laboriosam explicabo fugiat vero modi magni distinctio quae, ea quaerat earum at libero, doloremque delectus maxime? Ipsam, rerum!",
    },
    {
      title: "Project 5",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1280",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi sit nihil aliquam. Odio, dolore cupiditate delectus quo natus distinctio, quis sint tempore vel ipsum voluptatibus eum. Voluptatibus dolores rem vel delectus. Adipisci doloremque, dignissimos corporis consequuntur facere, tenetur voluptatum totam, distinctio inventore numquam facilis alias laborum! Saepe rerum corrupti sequi quos reiciendis voluptates dicta eius ad, earum fuga deserunt totam dolorum tempore obcaecati quod et optio minima debitis nisi aut tenetur eaque vel in enim. Tempore iste quisquam eveniet sunt hic laboriosam explicabo fugiat vero modi magni distinctio quae, ea quaerat earum at libero, doloremque delectus maxime? Ipsam, rerum!",
    },
    {
        title: "Project 6",
        image: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1280",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi sit nihil aliquam. Odio, dolore cupiditate delectus quo natus distinctio, quis sint tempore vel ipsum voluptatibus eum. Voluptatibus dolores rem vel delectus. Adipisci doloremque, dignissimos corporis consequuntur facere, tenetur voluptatum totam, distinctio inventore numquam facilis alias laborum! Saepe rerum corrupti sequi quos reiciendis voluptates dicta eius ad, earum fuga deserunt totam dolorum tempore obcaecati quod et optio minima debitis nisi aut tenetur eaque vel in enim. Tempore iste quisquam eveniet sunt hic laboriosam explicabo fugiat vero modi magni distinctio quae, ea quaerat earum at libero, doloremque delectus maxime? Ipsam, rerum!",
      },
  ];


const Projects = () => {

    const [expandedproject, setExpandedproject] = React.useState(null);
      
    const handleprojectClick = (index) => {
        setExpandedproject(index);
    };

    return (
        <>
            <div className='my-10 mx-5 lg:mx-16'>
                <h2 className='text-5xl font-bold font-serif'>Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-4 lg:mx-16 my-4 mb-20">
                {projectContent.map((project, index) => (
                    <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleprojectClick(index)}
                    >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-contain rounded-md"
                    />
                    </div>
                ))}
            </div>
            {expandedproject !== null && (
                <CSSTransition key={expandedproject} classNames="slide-in" timeout={300}>
                    <div
                        className="fixed lg:mt-24 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                        onClick={() => setExpandedproject(null)}
                    >
                        <div
                        className="w-full max-w-2xl rounded-lg bg-white p-8 text-center shadow-lg"
                        >
                            <div className='relative'> 
                                <img
                                src={projectContent[expandedproject].image}
                                alt={projectContent[expandedproject].title}
                                className="mb-4 w-64 mx-auto justify-center"
                                />
                                <svg className='absolute w-4  top-0 -right-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            </div>
                        
                        <h2 className="text-2xl font-bold text-gray-800">
                            {projectContent[expandedproject].title}
                        </h2>
                        <p className="mt-4 text-gray-600">
                            {projectContent[expandedproject].content}
                        </p>
                        </div>
                    </div>
                </CSSTransition>
                )}
        </>
    )

}

export default Projects
