import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {AiFillApple} from 'react-icons/ai'



import loginImg from '../assets/backround.avif'
import logo from '../assets/transparenttravo.png'

export default function Loginnew() {
  return (
    <div className='relative w-full h-screen bg-zinc-700/80'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt='/'/>

      <div className='flex justify-center items-center h-full '>
        <div className='max-w-[400px] h-[550px] relative '>
          <img className='' src={logo} alt='/'/>
          <div class="absolute bottom-0 px-5 py-[20vh] w-full">
            <p className=' text-4xl text-white pl-[58px]  '>Welcome Back!</p>
          </div>
           
        </div>
            <form className='max-w-[400px] w-full ml-[400px] bg-white p-8 rounded-[15px]'>
                <h2 className='text-3xl font-bold text-center py-4'>Login</h2>
                <div className='flex flex-col py-2 items-center'>
                    <h1>Don't have an account </h1>
                </div>

                <div className='flex flex-col mb-4'>
                    <label>Email Address</label>
                    <input className='border relative gb-gray-100 p-2' type='text'/>
                </div>
                <div className='flex flex-col '>
                    <label>Password</label>
                    <input className='border relative gb-gray-100 p-2' type='password'/>
                </div>
                <button className='w-1/3 py-2 mt-5 ml-[5.5vw] mb-5 bg-blue-600 hover:bg-blue-400 relative text-white rounded-full'>Log In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center mr-2'><input className='mr-2' type='checkbox'/>Remember Me</p>
                </div>
               
                  <p className='relative text-center mt-8 mb-8 '>Or Log In With</p>
                
                <div className='flex justify-between'>  
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center rounded-full'><AiFillApple/> </p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center rounded-full'><FcGoogle/></p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center rounded-full'><BsFacebook/></p>
                </div>

                
            </form>
        </div>  
    </div>



  )
}

