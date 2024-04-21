import React, { useContext, useState } from 'react'
import contractContext from '../context/contract/contractContext'
import Swal from 'sweetalert2'

const ContractItem = (props) => {
    const context = useContext(contractContext)
    const { deleteContract } = context
    // const { contract, updateContract } = props;
    const { contract } = props;

    const handleDelete = () => {
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            confirmButtonText: "OK"
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })
          deleteContract(contract._id);
        }
      });
    }

    const [bgColor, setBgColor] = useState('bg-gray-300')

    const handleAccept = () => {
      setBgColor(bgColor === 'bg-gray-300' ? 'bg-green-500' : 'bg-gray-300')
    }

    const handleReject = () => {
      setBgColor(bgColor === 'bg-gray-300' ? 'bg-red-500' : 'bg-gray-300')
    }

  return (
    <>
        <div className='grid-flow-row'>
          <div className='m-16'>
            <div className={`card-body w-[80%] border-2 border-black p-8 rounded-xl shadow-md shadow-black space-y-1 ${bgColor}`}>
              <div className="float-right">
                {/* <i className="fa-solid fa-trash-can mx-2" onClick={()=>{ deleteContract(contract._id) }}>   <span className='ml-1 text-red-600'>Delete</span> </i> */}
                <i className="fa-solid fa-trash-can mx-2" onClick={handleDelete}>   <span className='ml-1 text-red-600'>Delete</span> </i>
              </div>
              {/* can add a highlight contract feature */}
              <h2 className='text-2xl font-bold'>Name: <span className='text-2xl font-medium ml-40'>{contract.firstname} {contract.lastname}</span></h2>

              <h2 className='text-2xl font-bold'>Email id: <span className='text-2xl font-medium ml-36'>{contract.email} </span></h2>

              <h2 className='text-2xl font-bold'>Phone Number: <span className='text-2xl font-medium ml-16'>{contract.phone} </span></h2>

              <h2 className='text-2xl font-bold'>Domain: <span className='text-2xl font-medium ml-36'>{contract.domain} </span></h2>

              <h2 className='text-2xl font-bold'>City: <span className='text-2xl font-medium ml-48'>{contract.city} </span></h2>

              <h2 className='text-2xl font-bold'>About Project: <span className='text-2xl font-medium ml-20'>{contract.query.length > 1 ? contract.query : "--- None ---" } </span></h2>

              <div className='flex mt-4'>
                <button onClick={handleAccept} className='m-2 px-3 py-2 border border-black rounded-lg bg-green-500'> Accept </button>
                <button onClick={handleReject} className='m-2 px-3 py-2 border border-black rounded-lg bg-red-500'> Reject </button>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default ContractItem
