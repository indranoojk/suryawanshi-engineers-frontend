// House image
{/* <img className='w-full h-full ' src="https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" /> */}


// flex example for placing image on one side and content on
{/* <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Website Content</h2>
        <p className="text-gray-700">
          This is an example of website content on the left side of the division. It can include text, images, videos, or any other type of media. In this example, we are using Tailwind CSS utility classes to style the content.
        </p>
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <img src="https://picsum.photos/id/1018/600/400" alt="Image" className="w-full h-full rounded object-cover" />
      </div>
    </div> */}


// Suryawanshi poster supposed to be placed in the Home page if required 
{/* Suryawanshi poster */}
        //  <div className='poster mt-4'>
        //     <img src={poster} alt="" />
        // </div> 


{/* This are the models of houses and plans */}
        {/* <div className="models flex flex-wrap mt-4 relative">
            <img className='lg:w-[440px] lg:h-[300px] float-left' src={house1} alt="" />
            <img className='lg:w-[440px] lg:h-[300px] float-right mr-2' src={house2} alt="" />
            <img className='lg:w-[440px] lg:h-[300px] float-left' src={plan1} alt="" />
            <img className='w-[440px] h-[300px] float-right mr-2' src={plan2} alt="" />
        </div> */}









// Project cards with title and desc
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-4 lg:mx-8 my-4 mb-20">

{/* Project card */}
{/* <Link to={`/`}> */}
  <div className='relative lg:w-96 p-2'>
        <div className="cursor-pointer text-center items-center">
            <img className='lg:w-96 h-56 object-cover' src="https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
          

            <div className="transition duration-300 ease-in-out hover:-translate-y-4">
                <div className="absolute bottom-1 lg:pl-20 text-white mb-12 text-4xl font-serif uppercase bg-gradient-to-t from-slate-600 to-transparent">
                    {project.title}
                </div>
                
                <div className="absolute bottom-1 lg:pl-20 text-[#b56adb] mb-4 text-xl font-serif uppercase bg-gradient-to-t from-slate-600 to-transparent">
                    {project.content}
                </div>
            </div>
        </div>

        

        {/* <div className="bg-gradient-to-t from-slate-600 to-transparent w-96
        h-72"></div> */}
        
        
        {/* <div className="px-3 py-2 bg-black text-white cursor-pointer" onClick={()=>{updateProject(project)}}>Update</div> */}



  </div>
{/* </Link> */}
</div>



