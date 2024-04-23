import React, { useContext } from 'react'
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




  return (
    <>
        <div className='grid-flow-row'>
          <div className='lg:m-16'>
            <div className={"card-body lg:w-[80%] border-2 border-black p-8 rounded-xl shadow-md shadow-black space-y-1 bg-gray-300 overflow-x-scroll"}>
              <div className="float-right">
                <i className="fa-solid fa-trash-can mx-2" onClick={handleDelete}>   <span className='ml-1 text-red-600'>Delete</span> </i>
              </div>

              <h2 className='text-2xl font-bold'>Name: <span className='text-2xl font-extralight lg:font-medium lg:ml-40'>{contract.firstname} {contract.lastname}</span></h2>

              <h2 className='text-2xl font-bold'>Email id: <span className='text-2xl font-extralight lg:font-medium lg:ml-36'>{contract.email} </span></h2>

              <h2 className='text-2xl font-bold'>Phone Number: <span className='text-2xl font-extralight lg:font-medium lg:ml-16'>{contract.phone} </span></h2>

              <h2 className='text-2xl font-bold'>Domain: <span className='text-2xl font-extralight lg:font-medium lg:ml-36'>{contract.domain} </span></h2>

              <h2 className='text-2xl font-bold'>Project Address: <span className='text-2xl font-extralight lg:font-medium lg:ml-48'>{contract.address} </span></h2>

              <h2 className='text-2xl font-bold'>City: <span className='text-2xl font-extralight lg:font-medium lg:ml-48'>{contract.city} </span></h2>

              <h2 className='text-2xl font-bold'>State: <span className='text-2xl font-extralight lg:font-medium lg:ml-48'>{contract.state} </span></h2>

              <h2 className='text-2xl font-bold'> :: Plot Area :: </h2>

              <h2 className='text-2xl font-bold'>Width: <span className='text-2xl font-extralight lg:font-medium lg:ml-48'>{contract.width} </span></h2>

              <h2 className='text-2xl font-bold'>Length: <span className='text-2xl font-extralight lg:font-medium lg:ml-48'>{contract.length} </span></h2>

              <h2 className='text-2xl font-bold'>About Project: <span className='text-2xl font-extralight lg:font-medium lg:ml-20'>{contract.query.length > 1 ? contract.query : "--- None ---" } </span></h2>

              
            </div>
          </div>
        </div>
    </>
  )
}

export default ContractItem
