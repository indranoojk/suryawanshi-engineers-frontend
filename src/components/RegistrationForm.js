import React, { useContext, useState } from 'react'
import '../index.css';
import contractContext from '../context/contract/contractContext';
import Swal from 'sweetalert2'

const RegistrationForm = (props) => {

    const context = useContext(contractContext);
    const {addContract} = context;

    const [contract, setContract] = useState({firstname: "", lastname: "", email: "", phone: "", domain: "", city: "", width: "", length: "", query: ""})
    const handleClick = (e) => {
        e.preventDefault();
        addContract(contract.firstname, contract.lastname, contract.email, contract.phone, contract.domain, contract.city, contract.width, contract.length, contract.query);
        setContract({firstname: "", lastname: "", email: "", phone: "", domain: "", city: "", width: "", length: "", query: ""})

        Swal.fire({
            title: 'Success!',
            text: 'Form successfully submitted!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          })
    }

    const onChange = (e) => {
        setContract({...contract, [e.target.name]: e.target.value})
    }

  return (
    <>
        <div className="bg-[#393839] p-5 text-white lg:flex pb-10">
            <h2 style={{fontFamily: "'Cinzel', serif"}} className='text-4xl font-bold font-serif w-48 m-20 text text-opacity-85 -tracking-tighter'>CONNECT WITH US TODAY</h2>
            <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2">
                <div className='mb-3 lg:m-2'>
                    <label htmlFor="firstname" className='text-xs text-[#9e8a5f]'>FIRST NAME*</label> <br/>
                    <input type="text" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='firstname' name='firstname' onChange={onChange} minLength={3} required/>
                </div>

                <div className='mb-3 lg:m-2'>
                    <label htmlFor="lastname" className='text-xs text-[#9e8a5f]'>LAST NAME*</label> <br/>
                    <input type="text" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='lastname' name='lastname' onChange={onChange} minLength={3} required/>
                </div>

                <div className='mb-3 lg:m-2'>
                    <label htmlFor="email" className='text-xs text-[#9e8a5f]'>EMAIL*</label> <br/>
                    <input type="email" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='email' name='email' onChange={onChange} required/>
                </div>

                <div className='mb-3 lg:m-2'>
                    <label htmlFor="phone" className='text-xs text-[#9e8a5f]'>PHONE NO*</label> <br/>
                    <input type="tel" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='phone' name='phone' onChange={onChange} maxLength={10} required/>
                </div>

                <div className='mb-3 lg:m-2'>
                    {/* Change the domain and ask "Type of work?" */}
                    <label htmlFor="domain" className='text-xs text-[#9e8a5f]'>What is your domain?*</label> <br/>
                    <select className='mt-0 block w-full px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' name="domain" id="domain" onChange={onChange} minLength={5} required>
                        <option className='bg-[#252425]' value="none">Please select</option>
                        <option className='bg-[#252425]' value="online construction permission">Online Construction Permission</option>
                        <option className='bg-[#252425]' value="3D design">3D Design</option>
                        <option className='bg-[#252425]' value="interior design">Interior Design</option>
                    </select>
                </div>

                <div className='mb-3 lg:m-2'>
                    <label htmlFor="city" className='text-xs text-[#9e8a5f]'>Your Place/Area*</label> <br/>
                    <input type="text" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='city' name='city' onChange={onChange} minLength={2} required/>
                </div>

                <div className='mb-3 lg:m-2'>
                <label htmlFor="width" className='text-sm text-[#9e8a5f]'> :: Plot Area ::</label> <br/>
                    <div className="flex space-x-6">
                    <div>
                    <label htmlFor="width" className='text-xs text-[#9e8a5f]'>Width (in feet) *</label> <br/>
                    <input type="number" className='mt-0 block w-36 lg:w-36 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='width' name='width' onChange={onChange} minLength={2} required/>
                    </div>

                    <div>
                    <label htmlFor="length" className='text-xs text-[#9e8a5f]'>Length (in feet) *</label> <br/>
                    <input type="number" className='mt-0 block w-36 lg:w-36 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='length' name='length' onChange={onChange} minLength={2} required/>
                    </div>
                    </div>
                </div>

                {/* <div className='mb-3 lg:m-2'>
                    <label htmlFor="length" className='text-xs text-[#9e8a5f]'>Length (in feet) *</label> <br/>
                    <input type="number" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='length' name='length' onChange={onChange} minLength={2} required/>
                </div> */}

                

                {/* <div className='mb-3 lg:m-2 row-span-2'> */}
                <div className='mb-3 lg:m-2 row-span-2'>
                    <label htmlFor="query" className='text-xs text-[#9e8a5f]'>TELL US MORE ABOUT YOUR PROJECT</label> <br/>
                    <textarea className='mt-0 block w-full px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' name="query" id="query" onChange={onChange} minLength={15} cols="30" rows="5" ></textarea>
                </div>

                <br />

                <div>
                    <button disabled={contract.firstname.length<3 || contract.lastname.length<3 || contract.phone.length<10 || contract.domain.length === 'Please select' || contract.city.length<2 || contract.width.length<2 || contract.length.length<2} type='submit' className='bg-green-500 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue' onClick={handleClick}> SUBMIT </button>
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default RegistrationForm
