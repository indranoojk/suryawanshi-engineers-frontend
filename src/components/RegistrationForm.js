import React, { useContext, useState } from 'react'
import '../index.css';
import contractContext from '../context/contract/contractContext';
import Swal from 'sweetalert2'
// import UploadImage from './UploadImage';

const RegistrationForm = (props) => {

    const context = useContext(contractContext);
    const {addContract} = context;

    const [contract, setContract] = useState({firstname: "", lastname: "", email: "", phone: "", domain: "", address: "", city: "", state: "", width: "", length: "", query: ""})
    const handleClick = (e) => {
        e.preventDefault();
        addContract(contract.firstname, contract.lastname, contract.email, contract.phone, contract.domain, contract.address, contract.city, contract.state, contract.width, contract.length, contract.query);
        setContract({firstname: "", lastname: "", email: "", phone: "", domain: "", address: "", city: "", state: "", width: "", length: "", query: ""})

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
                    <label htmlFor="domain" className='text-xs text-[#9e8a5f]'>TYPE OF WORK?*</label> <br/>
                    <select className='mt-0 block w-full px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' name="domain" id="domain" onChange={onChange} minLength={5} required>
                        <option className='bg-[#252425]' value="none"></option>
                        <option className='bg-[#252425]' value="online construction permission">Online Construction Permission</option>
                        <option className='bg-[#252425]' value="3D design">3D Design</option>
                        <option className='bg-[#252425]' value="interior design">Interior Design</option>
                    </select>
                </div>


                <div className='mb-3 lg:m-2'>
                    <label htmlFor="address" className='text-xs text-[#9e8a5f]'>PROJECT ADDRESS*</label> <br/>
                    <input type="text" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='address' name='address' onChange={onChange} minLength={5} required/>
                </div>
                
                <div className='mb-3 lg:m-2'>
                    <label htmlFor="city" className='text-xs text-[#9e8a5f]'>CITY*</label> <br/>
                    <input type="text" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='city' name='city' onChange={onChange} minLength={2} required/>
                </div>

                <div className='mb-3 lg:m-2'>
                    {/* Change the domain and ask "Type of work?" */}
                    <label htmlFor="state" className='text-xs text-[#9e8a5f]'>STATE*</label> <br/>

                    <select className='mt-0 block w-full px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' name="state" id="state" onChange={onChange} minLength={2} required>
	                    <option className='bg-[#252425]' value="none"></option>
	                    <option className='bg-[#252425]' value="AP">Andhra Pradesh</option>
	                    <option className='bg-[#252425]' value="AR">Arunachal Pradesh</option>
	                    <option className='bg-[#252425]' value="AS">Assam</option>
	                    <option className='bg-[#252425]' value="BR">Bihar</option>
	                    <option className='bg-[#252425]' value="CT">Chhattisgarh</option>
	                    <option className='bg-[#252425]' value="GA">Gujarat</option>
	                    <option className='bg-[#252425]' value="HR">Haryana</option>
	                    <option className='bg-[#252425]' value="HP">Himachal Pradesh</option>
	                    <option className='bg-[#252425]' value="JK">Jammu and Kashmir</option>
	                    <option className='bg-[#252425]' value="GA">Goa</option>
	                    <option className='bg-[#252425]' value="JH">Jharkhand</option>
	                    <option className='bg-[#252425]' value="KA">Karnataka</option>
	                    <option className='bg-[#252425]' value="KL">Kerala</option>
	                    <option className='bg-[#252425]' value="MP">Madhya Pradesh</option>
	                    <option className='bg-[#252425]' value="MH">Maharashtra</option>
                        <option className='bg-[#252425]' value="MN">Manipur</option>
                        <option className='bg-[#252425]' value="ML">Meghalaya</option>
	                    <option className='bg-[#252425]' value="MZ">Mizoram</option>
	                    <option className='bg-[#252425]' value="NL">Nagaland</option>
	                    <option className='bg-[#252425]' value="OR">Odisha</option>
	                    <option className='bg-[#252425]' value="PB">Punjab</option>
	                    <option className='bg-[#252425]' value="RJ">Rajasthan</option>
	                    <option className='bg-[#252425]' value="SK">Sikkim</option>
	                    <option className='bg-[#252425]' value="TN">Tamil Nadu</option>
	                    <option className='bg-[#252425]' value="TG">Telangana</option>
	                    <option className='bg-[#252425]' value="TR">Tripura</option>
	                    <option className='bg-[#252425]' value="UT">Uttarakhand</option>
	                    <option className='bg-[#252425]' value="UP">Uttar Pradesh</option>
	                    <option className='bg-[#252425]' value="WB">West Bengal</option>
	                    <option className='bg-[#252425]' value="AN">Andaman and Nicobar Islands</option>
	                    <option className='bg-[#252425]' value="CH">Chandigarh</option>
	                    <option className='bg-[#252425]' value="DN">Dadra and Nagar Haveli</option>
	                    <option className='bg-[#252425]' value="DD">Daman and Diu</option>
	                    <option className='bg-[#252425]' value="DL">Delhi</option>
	                    <option className='bg-[#252425]' value="LD">Lakshadweep</option>
	                    <option className='bg-[#252425]' value="PY">Puducherry</option>
                    </select>

                </div>

                <div className='mb-3 lg:m-6'>
                <label htmlFor="width" className='text-sm text-[#9e8a5f]'> :: PLOT AREA ::</label> <br/>
                    <div className="flex space-x-6">
                    <div>
                    <label htmlFor="width" className='text-xs text-[#9e8a5f]'>WIDTH (in feet) *</label> <br/>
                    <input type="number" className='mt-0 block w-36 lg:w-36 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='width' name='width' onChange={onChange} minLength={2} required/>
                    </div>

                    <div>
                    <label htmlFor="length" className='text-xs text-[#9e8a5f]'>LENGTH (in feet) *</label> <br/>
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
                    <button disabled={contract.firstname.length<3 || contract.lastname.length<3|| contract.email.length<8 || contract.phone.length<10 || contract.domain.length === '' || contract.address.length<5 || contract.city.length<2 || contract.state.length === '' || contract.width.length<2 || contract.length.length<2} type='submit' className='bg-green-500 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue' onClick={handleClick}> SUBMIT </button>
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default RegistrationForm
