import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import PlainNav from './PlainNav'
import {motion} from 'framer-motion';
import waves from '../assets/images/beach waves.png'

const Portal = () => {
  const height = (i) => ( {
    height: ['100%', '0%', '100%'],
    transition: { duration: 3, repeat: Infinity, delay: i*0.5 },
  });

  const images = [
    `${waves}`,
    'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1280',
    'https://media.istockphoto.com/id/108314363/photo/rising-moon-over-sea.jpg?s=612x612&w=0&k=20&c=_MsmWi5bGVLi6wDw9QGZY0v65nX-pEEr4sSVZscrZ8s=',
  ];

  return (
    <>
      <PlainNav />
      <Sidebar />
      <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
        Hello! Mr. Suryawanshi
      </div>
      <div className="design m-auto mt-20 flex gap-8 justify-center items-center">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="hidden lg:block bg-transparent w-16 h-96 rounded-xl"
          >
            <motion.img animate={height(i)} className="hidden lg:block object-cover w-16 h-96 rounded-xl" src={images[i % images.length]} alt="" />
          </motion.div>
        ))}
        
      </div>

      <div className="mobile design m-auto mt-20 flex gap-8 justify-center items-center">
      {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="block lg:hidden bg-transparent w-16 h-96 rounded-xl"
          >
            <motion.img animate={height(i)} className="block lg:hidden object-cover w-16 h-96 rounded-xl" src={images[i % images.length]} alt="" />
          </motion.div>
        ))}
        
      </div>
    </>
  )
}

export default Portal