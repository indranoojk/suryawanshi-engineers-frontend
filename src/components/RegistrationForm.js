import React, { useContext, useState } from 'react'
import '../index.css';
import contractContext from '../context/contract/contractContext';
import Swal from 'sweetalert2'
// import UploadImage from './UploadImage';

const RegistrationForm = (props) => {

    const context = useContext(contractContext);
    const {addContract} = context;

    const [errors, setErrors] = useState({});

    // const [contract, setContract] = useState({firstname: "", lastname: "", email: "", phone: "", domain: "", address: "", city: "", state: "", width: "", length: "", query: ""})

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [domain, setDomain] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");
    const [query, setQuery] = useState("");


    const handleClick = (e) => {
        e.preventDefault();
        // addContract(contract.firstname, contract.lastname, contract.email, contract.phone, contract.domain, contract.address, contract.city, contract.state, contract.width, contract.length, contract.query);
        
        const errors = {};

        if (!firstname) {
            errors.firstname = 'Firstname is required';
        } else if (firstname.length < 3) {
            errors.firstname = 'Firstname must be at least 3 characters';
          }

        if (!lastname) {
            errors.lastname = 'Lastname is required';
        } else if (lastname.length < 3) {
            errors.lastname = 'Lastname must be at least 3 characters';
          }

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Invalid email address';
          }
        
        if (!phone) {
            errors.phone = 'Phone number is required';
        } else if (phone.length !== 10) {
            errors.phone = 'Phone number must be 10 digits';
          }

        if (!domain) {
            errors.domain = 'Please select a domain';
        }

        if (!address) {
            errors.address = 'Address is required';
        }

        if (!city) {
            errors.city = 'City is required';
        }

        if (!state) {
            errors.state = 'State is required';
        }

        if (!width) {
            errors.width = 'Width is required';
        }

        if (!length) {
            errors.length = 'Length is required';
        }

        setErrors(errors);
        

        // setContract({firstname: "", lastname: "", email: "", phone: "", domain: "", address: "", city: "", state: "", width: "", length: "", query: ""})

        

        if (Object.keys(errors).length === 0) {
            // Form is valid, submit it

            addContract(firstname, lastname, email, phone, domain, address, city, state, width, length, query);

            Swal.fire({
                title: 'Success!',
                text: 'Form submitted successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            //   }).then((result) => {
            //     if (result.isConfirmed) {
            //         window.location.reload();
            //     }
            //   })

              setFirstname("");
              setLastname("");
              setEmail("");
              setPhone("");
              setDomain("");
              setAddress("");
              setCity("");
              setState("");
              setWidth("");
              setLength("");
              setQuery("");
        } 
    }

    const handleInputChange = (field, value) => {
        switch (field) {
          case 'firstname':
            setFirstname(value);
            if (value) {
              setErrors({ ...errors, firstname: null });
            }
            break;
          case 'lastname':
            setLastname(value);
            if (value) {
              setErrors({ ...errors, lastname: null });
            }
            break;
          case 'email':
            setEmail(value);
            if (value) {
              setErrors({ ...errors, email: null });
            }
            break;
          case 'phone':
            setPhone(value);
            if (value) {
              setErrors({ ...errors, phone: null });
            }
            break;
          case 'domain':
            setDomain(value);
            if (value) {
              setErrors({ ...errors, domain: null });
            }
            break;
          case 'address':
            setAddress(value);
            if (value) {
              setErrors({ ...errors, address: null });
            }
            break;
          case 'city':
            setCity(value);
            if (value) {
              setErrors({ ...errors, city: null });
            }
            break;
          case 'state':
            setState(value);
            if (value) {
              setErrors({ ...errors, state: null });
            }
            break;
          case 'width':
            setWidth(value);
            if (value) {
              setErrors({ ...errors, width: null });
            }
            break;
          case 'length':
            setLength(value);
            if (value) {
              setErrors({ ...errors, length: null });
            }
            break;
          case 'query':
            setQuery(value);
            break;
          default:
            break;
        }
      };

  return (
    <>
        <div className="p-5 text-white lg:flex pb-10" style={{backgroundImage: `url(${'https://images.pexels.com/photos/7078398/pexels-photo-7078398.jpeg?auto=compress&cs=tinysrgb&w=1280'})`}} >
            <h2 style={{fontFamily: "'Cinzel', serif"}} className='text-4xl font-bold font-serif w-48 m-20 text text-opacity-85 -tracking-tighter text-black'>CONNECT WITH US TODAY</h2>
            <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-2 lg:gap-6">
                <div className='mb-3 lg:m-2'>
                    <label htmlFor="firstname" className='text-sm text-black'>FIRST NAME*</label> <br/>
                    <input type="text" className={`mt-0 block w-full lg:w-96 px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.firstname ? 'border-red-500' : ''} `} id='firstname' name='firstname' value={firstname} onChange={(e) => handleInputChange('firstname', e.target.value)} required/>
                    {errors.firstname && (
                        <p className="text-red-500 text-xs italic">{errors.firstname}</p>
                    )}
                </div>

                <div className='mb-3 lg:m-2'>
                    <label htmlFor="lastname" className='text-sm text-black'>LAST NAME*</label> <br/>
                    <input type="text" className={`mt-0 block w-full lg:w-96 px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.lastname ? 'border-red-500' : ''} `} id='lastname' name='lastname' value={lastname} onChange={(e) => handleInputChange('lastname', e.target.value)} required/>
                    {errors.lastname && (
                        <p className="text-red-500 text-xs italic">{errors.lastname}</p>
                    )}
                </div>

                <div className='mb-3 lg:m-2'>
                    <label htmlFor="email" className='text-sm text-black'>EMAIL*</label> <br/>
                    <input type="email" className={`mt-0 block w-full lg:w-96 px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''} `} id='email' name='email' value={email} onChange={(e) => handleInputChange('email', e.target.value)} required/>
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">{errors.email}</p>
                    )}
                </div>

                <div className='mb-3 lg:m-2'>
                    <label htmlFor="phone" className='text-sm text-black'>PHONE NO*</label> <br/>
                    <input type="tel" className={`mt-0 block w-full lg:w-96 px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : ''} `} id='phone' name='phone' value={phone} onChange={(e) => handleInputChange('phone', e.target.value)} maxLength={10} required/>
                    {errors.phone && (
                        <p className="text-red-500 text-xs italic">{errors.phone}</p>
                    )}
                </div>

                <div className='mb-3 lg:m-2'>
                    {/* Change the domain and ask "Type of work?" */}
                    <label htmlFor="domain" className='text-sm text-black'>TYPE OF WORK?*</label> <br/>
                    <select className={`mt-0 block w-full px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.domain ? 'border-red-500' : ''} `} name="domain" id="domain" value={domain} onChange={(e) => handleInputChange('domain', e.target.value)} required>
                        <option className='bg-slate-300' value="none"></option>
                        <option className='bg-slate-300' value="online construction permission">Online Construction Permission</option>
                        <option className='bg-slate-300' value="3D design">3D Design</option>
                        <option className='bg-slate-300' value="interior design">Interior Design</option>
                    </select>
                    {errors.domain && (
                        <p className="text-red-500 text-xs italic">{errors.domain}</p>
                    )}
                </div>


                <div className='mb-3 lg:m-2'>
                    <label htmlFor="address" className='text-sm text-black'>PROJECT ADDRESS*</label> <br/>
                    <input type="text" className={`mt-0 block w-full lg:w-96 px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.address ? 'border-red-500' : ''} `} id='address' name='address' value={address} onChange={(e) => handleInputChange('address', e.target.value)} required/>
                    {errors.address && (
                        <p className="text-red-500 text-xs italic">{errors.address}</p>
                    )}
                </div>
                
                <div className='mb-3 lg:m-2'>
                    <label htmlFor="city" className='text-sm text-black'>CITY*</label> <br/>
                    <input type="text" className={`mt-0 block w-full lg:w-96 px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.city ? 'border-red-500' : ''} `} id='city' name='city' value={city} onChange={(e) => handleInputChange('city', e.target.value)} required/>
                    {errors.city && (
                        <p className="text-red-500 text-xs italic">{errors.city}</p>
                    )}
                </div>

                <div className='mb-3 lg:m-2'>
                    {/* Change the domain and ask "Type of work?" */}
                    <label htmlFor="state" className='text-sm text-black'>STATE*</label> <br/>

                    <select className={`mt-0 block w-full px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.state ? 'border-red-500' : ''} `} name="state" id="state" value={state} onChange={(e) => handleInputChange('state', e.target.value)} required>
	                    <option className='bg-slate-300' value="none"></option>
	                    <option className='bg-slate-300' value="Andhra Pradesh">Andhra Pradesh</option>
	                    <option className='bg-slate-300' value="Arunachal Pradesh">Arunachal Pradesh</option>
	                    <option className='bg-slate-300' value="Assam">Assam</option>
	                    <option className='bg-slate-300' value="Bihar">Bihar</option>
	                    <option className='bg-slate-300' value="Chhattisgarh">Chhattisgarh</option>
	                    <option className='bg-slate-300' value="Gujarat">Gujarat</option>
	                    <option className='bg-slate-300' value="Haryana">Haryana</option>
	                    <option className='bg-slate-300' value="Himachal Pradesh">Himachal Pradesh</option>
	                    <option className='bg-slate-300' value="Jammu and Kashmir">Jammu and Kashmir</option>
	                    <option className='bg-slate-300' value="Goa">Goa</option>
	                    <option className='bg-slate-300' value="Jharkhand">Jharkhand</option>
	                    <option className='bg-slate-300' value="Karnataka">Karnataka</option>
	                    <option className='bg-slate-300' value="Kerala">Kerala</option>
	                    <option className='bg-slate-300' value="Madhya Pradesh">Madhya Pradesh</option>
	                    <option className='bg-slate-300' value="Maharashtra">Maharashtra</option>
                        <option className='bg-slate-300' value="Manipur">Manipur</option>
                        <option className='bg-slate-300' value="Meghalaya">Meghalaya</option>
	                    <option className='bg-slate-300' value="Mizoram">Mizoram</option>
	                    <option className='bg-slate-300' value="Nagaland">Nagaland</option>
	                    <option className='bg-slate-300' value="Odisha">Odisha</option>
	                    <option className='bg-slate-300' value="Punjab">Punjab</option>
	                    <option className='bg-slate-300' value="Rajasthan">Rajasthan</option>
	                    <option className='bg-slate-300' value="Sikkim">Sikkim</option>
	                    <option className='bg-slate-300' value="Tamil Nadu">Tamil Nadu</option>
	                    <option className='bg-slate-300' value="Telangana">Telangana</option>
	                    <option className='bg-slate-300' value="Tripura">Tripura</option>
	                    <option className='bg-slate-300' value="Uttarakhand">Uttarakhand</option>
	                    <option className='bg-slate-300' value="Uttar Pradesh">Uttar Pradesh</option>
	                    <option className='bg-slate-300' value="West Bengal">West Bengal</option>
	                    <option className='bg-slate-300' value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
	                    <option className='bg-slate-300' value="Chandigarh">Chandigarh</option>
	                    <option className='bg-slate-300' value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
	                    <option className='bg-slate-300' value="Daman and Diu">Daman and Diu</option>
	                    <option className='bg-slate-300' value="Delhi">Delhi</option>
	                    <option className='bg-slate-300' value="Lakshadweep">Lakshadweep</option>
	                    <option className='bg-slate-300' value="Puducherry">Puducherry</option>
                    </select>
                    {errors.state && (
                        <p className="text-red-500 text-xs italic">{errors.state}</p>
                    )}

                </div>

                <div className='mb-3 lg:m-6'>
                <label htmlFor="width" className='text-sm text-black'> :: PLOT AREA ::</label> <br/>
                    <div className="flex space-x-6">
                    <div>
                        <label htmlFor="width" className='text-sm text-black'>WIDTH (in feet) *</label> <br/>
                        <input type="number" className={`mt-0 block w-36 lg:w-36 px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.width ? 'border-red-500' : ''} `} id='width' name='width' value={width} onChange={(e) => handleInputChange('width', e.target.value)} required/>
                        {errors.width && (
                            <p className="text-red-500 text-xs italic">{errors.width}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="length" className='text-sm text-black'>LENGTH (in feet) *</label> <br/>
                        <input type="number" className={`mt-0 block w-36 lg:w-36 px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 focus:outline-none focus:shadow-outline ${errors.length ? 'border-red-500' : ''} `} id='length' name='length' value={length} onChange={(e) => handleInputChange('length', e.target.value)} required/>
                        {errors.length && (
                            <p className="text-red-500 text-xs italic">{errors.length}</p>
                        )}
                    </div>
                    </div>
                </div>

                {/* <div className='mb-3 lg:m-2'>
                    <label htmlFor="length" className='text-sm text-black'>Length (in feet) *</label> <br/>
                    <input type="number" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400' id='length' name='length' value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                </div> */}

                

                {/* <div className='mb-3 lg:m-2 row-span-2'> */}
                <div className='mb-3 lg:m-2 row-span-2'>
                    <label htmlFor="query" className='text-sm text-black'>TELL US MORE ABOUT YOUR PROJECT</label> <br/>
                    <textarea className={`mt-0 block w-full px-0.5 bg-transparent text-slate-700 border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400`} name="query" id="query" value={query} onChange={(e) => handleInputChange('lastname', e.target.value)} cols="30" rows="5" ></textarea>
                </div>

                <br />

                <div>
                    <button type='submit' className={`bg-green-600 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue`} onClick={handleClick}> SUBMIT </button>
                    {/* <button disabled={contract.firstname.length<3 || contract.lastname.length<3|| contract.email.length<8 || contract.phone.length<10 || contract.domain.length === '' || contract.address.length<5 || contract.city.length<2 || contract.state.length === '' || contract.width.length<2 || contract.length.length<2} type='submit' className={`bg-green-600 disabled:bg-gray-500 disabled:text-gray-400 ml-20 lg:ml-20 px-12 lg:px-16 py-3 border-2 border-[#716c6a] shadow-sm hover:shadow-xl shadow-[#f5f2f2] focus:outline-none focus:shadow-outline-blue`} onClick={handleClick}> SUBMIT </button> */}
                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default RegistrationForm
