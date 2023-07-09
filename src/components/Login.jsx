import React from 'react'
import loginImg from '../assets/loginnew.avif'

export default function Login() {
  return (
    <div className='w-full h-screeen flex items-center '>
        <div className='relativeh h-full w-1/2  flex flex-col'>
           <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>Login</h2>
                <div className='flex flex-col py-2 items-center'>
                    <h1>Don't have an account </h1>
                </div>

                <div className='flex flex-col py-2'>
                    <label>Email Address</label>
                    <input className='border p-2' type='text'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type='password'/>
                </div>
                <button className='border w-full my-5 p-2 bg-blue-500 hover:bg-blue-400'>Log In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center mr-2'><input className='mr-2' type='checkbox'/>Remember Me</p>
                </div>

                
            </form>
        </div>
    </div>
  )
}
