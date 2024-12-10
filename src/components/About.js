import React from 'react'
import useScrollToTop from './useScrollToTop'

const About = () => {

  useScrollToTop();

  return (
    <>
    
      <div className="founder mx-16 my-10 lg:grid lg:grid-cols-2 lg:grid-rows-2 text-center">
          <div className="">
              <img className='w-80 h-[400px] rounded-lg' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
          </div>
          <div className="pt-16">
              <p className='lg:text-3xl'>Ranjit Suryawanshi</p>
              <p className='lg:text-2xl'>Civil Engineer</p>
              <p className='pt-4 text-justify'>Ranjit Suryawanshi is the visionary behind Suryawanshi Construction, bringing over 20 years of experience in the construction industry. With a passion for innovative design and sustainable building practices, John established the company with a mission to deliver high-quality construction solutions that meet the evolving needs of clients. His leadership style emphasizes collaboration and integrity, fostering a culture of excellence within the team. John is dedicated to ensuring that every project reflects the company's commitment to quality and customer satisfaction. Under his guidance, Smith Construction has grown from a small startup to a reputable firm known for its reliability and craftsmanship.</p>
          </div>
          <div className="pt-24">
              <p className='lg:text-3xl'>Ajit Suryawanshi</p>
              <p className='lg:text-2xl'>3D Designer</p>
              <p className='pt-4 text-justify'>Ajit Suryawanshi, co-founder of Suryawanshi Construction, complements John's vision with her expertise in project management and operations. With a background in civil engineering and a keen eye for detail, Emily plays a crucial role in overseeing project execution and ensuring that timelines and budgets are met. Her strategic approach to problem-solving and her ability to build strong relationships with clients and subcontractors have been instrumental in the company's success. Emily is passionate about promoting sustainable practices in construction and is committed to driving innovation within the industry. Together with John, she is dedicated to building a company that not only constructs buildings but also creates lasting partnerships with clients.</p>
          </div>
          <div className="flex justify-end pt-8">
              <img className='w-80 h-[400px] rounded-lg' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
          </div>
        </div>
    </>
  )
}

export default About
