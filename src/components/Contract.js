import React, { useContext, useEffect, useRef } from 'react'
import contractContext from '../context/contract/contractContext'
import ContractItem from './ContractItem'
import { useNavigate } from 'react-router-dom'
import PlainNav from './PlainNav'
import Sidebar from './Sidebar/Sidebar'
import stars from '../assets/images/stars.png'
import { motion, useScroll, useTransform } from "framer-motion";

const Contract = (props) => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ["80%", "100%"])

  const context = useContext(contractContext)
  const { contracts, getContracts } = context;

  let navigate = useNavigate();
  // eslint-disable-next-line
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getContracts()
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])



  return (
    <>
      <PlainNav />

      <Sidebar />

      <div className="text-xl lg:text-3xl ml-10 lg:ml-0 mt-4 font-semibold italic font-serif text-center">
        Hello! Mr. Suryawanshi
      </div>

      <div className="bg-[#0c0c1d]">
        <div className='m-16 mb-0 pb-40 relative'>
          <div className='text-5xl p-4 font-bold font-serif text-white '>
            Contracts
          </div>

          <motion.div className="hidden lg:block stars absolute w-full h-full"
            style={{
              backgroundImage: `url(${stars})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: 'repeat-y',
              zIndex: "1",
              x: yBg,
            }}></motion.div>

          <div className="text-4xl text-red-600 mt-16 font-bold text-center">
            {contracts.length === 0 && 'No contracts are available to display'}
          </div>

          {contracts.map((contract) => {
            return <ContractItem key={contract._id} contract={contract} />
          })}
          {/* <div className="text-5xl">
              {contracts.map((contract) => {
                return "firstname" + contract.firstname;
              })}
              </div> */}
        </div>
      </div>

    </>
  )
}

export default Contract
