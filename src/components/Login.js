import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { baseUrl } from '../Urls'
import useScrollToTop from './useScrollToTop'


const Login = (props) => {

    useScrollToTop();

    const [credentials, setCredentials] = useState({email: "", password: ""})
    let navigate = useNavigate();
    // let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${baseUrl}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            Swal.fire({
                title: 'Success!',
                text: 'You are logging in',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            navigate("/portal");
            // history.push("/");
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter correct credentials',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
    }

    const onChange = (e)=> {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <>
        {/* <div className="m-16 text-center">
            <h2 className='text-2xl font-bold font-serif'>ADMIN LOGIN</h2>
        </div>
        
        <div className="text-center bg-slate-300 p-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="text-xl">Email address</label> <br />
                    <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name='email' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="text-xl">Password</label> <br />
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button type="submit" className="px-3 py-2 bg-violet-600" >Submit</button>
            </form>
        </div> */}

        <div className="p-5 text-white m-4 lg:m-0 lg:w-full" style={{backgroundImage: `url(${'https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&w=1280'})`, objectFit: 'contain'}} >
            <div className="lg:ml-[50%]">
            <h2 style={{fontFamily: "'Cinzel', serif"}} className='text-4xl font-bold font-serif w-48 m-20 text text-opacity-85 -tracking-tighter text-black'>ADMIN LOGIN</h2>
            <div className="m-4 lg:m-10 lg:ml-20 lg:grid lg:grid-cols-1">
            <form onSubmit={handleSubmit} id='login' action="/login" method="post">
                <div className='mb-3 lg:m-2'>
                    <label htmlFor="email" className='text-lg text-black'>EMAIL*</label> <br/>
                    <input type="email" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 pl-2 text-slate-800' id='email' name='email' onChange={onChange} required/>
                </div>
                <div className='mb-3 lg:m-2'>
                    <label htmlFor="lastName" className='text-lg text-black'>Password*</label> <br/>
                    <input type="password" className='mt-0 block w-full lg:w-96 px-0.5 bg-transparent border-0 border-b-2 border-[#716c6a] focus:ring-0 focus:border-gray-400 pl-2 text-slate-800' id='password' name='password' onChange={onChange} required/>
                </div>
                <br />
                <div>
                    <button type='submit' className='ml-20 bg-[#202020] lg:ml-32 px-12 lg:px-16 py-3 border-2 border-[#b4b3b5] shadow-sm hover:shadow-xl shadow-[#f5f2f2]' onClick={handleSubmit}>LOGIN</button>
                </div>
            </form>    
            </div>

                {/* <div className="absolute">
                    <img className='w-96 h-[450px]' src="https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                </div> */}
            </div>
                
        </div>
    </>
  )
}

export default Login
