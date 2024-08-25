import React from 'react'
import PlainNav from './PlainNav'
import Sidebar from './Sidebar/Sidebar'

const ChangePass = () => {
  return (
    <>
      <PlainNav />
      <Sidebar />

      <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-36 lg:mt-4 font-semibold italic font-serif text-center">
            Hello! Mr. Suryawanshi
        </div>

      <div className="text-4xl text-center">This is Change Password</div>
    </>
  )
}

export default ChangePass
