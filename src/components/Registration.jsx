import React from 'react'

import ele from '../assets/elephant.avif'



export default function Registration() {
    return (
        <div className='w-full h-screen bg-slate-200'>
            {/* <div className='container min-h-screen max-w-screen bg-slate-900'> */}
            <div className='flex w-full h-full bg-white mx-auto shadow-lg overflow-hidden'>

                <div className=' w-1/2  bg-white py-16 px-12'>
                    <div className='flex'>
                        <div className=' mr-4'>
                            <h2 className='text-6xl font-bold mb-4'>Input Your Information</h2>
                        </div>
                        <div className='mx-[8vh] mt-3'>
                            <p>We need you to help us with some basic information for your account creation.
                                Here are our terms and conditins. Please read them carefully.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-10 '>
                        <div className='flex flex-col mb-4 w-[40vh]'>
                            <label>First Name</label>
                            <input className=' border-black relative bg-slate-100 gb-gray-100 p-2' type='text' />
                        </div>
                        <div className='flex flex-col mb-8 py-2 ml-[10vh] w-[40vh]'>
                            <label>Last Name</label>
                            <input className=' relative bg-slate-100 gb-gray-100 p-2' type='text' />
                        </div>
                        <div className='flex flex-col mb-8 py-2 w-[40vh]'>
                            <label>Email</label>
                            <input className=' relative bg-slate-100 gb-gray-100 p-2' type='text' />
                        </div>
                        <div className='flex flex-col mb-8 py-2 ml-[10vh] w-[40vh]'>
                            <label>Mobile Number</label>
                            <input className=' relative bg-slate-100 gb-gray-100 p-2' type='number' />
                        </div>
                        <div className='flex flex-col mb-8 py-2 mr-[100vh] w-[40vh]'>
                            <label>Date of Birth</label>
                            <input className=' relative bg-slate-100 gb-gray-100 p-2' type='day' />
                        </div>
                        <div className='flex flex-col mb-8 py-2  w-[40vh]'>
                            <label>Password</label>
                            <input className=' relative bg-slate-100 gb-gray-100 p-2' type='password' />
                        </div>
                        <div className='flex flex-col mb-8 py-2 ml-[10vh] w-[40vh] '>
                            <label>Confirm Password</label>
                            <input className=' relative bg-slate-100 gb-gray-100 p-2' type='password' />
                        </div>

                        <button className='w-1/6 py-2  mt-5 ml-[5.5vw] mb-5 bg-blue-600 hover:bg-blue-400 relative text-white rounded-full'>Next</button>

                    </div>
                </div>
                <div className='w-1/2'>
                    <img className='w-full h-full' src={ele} alt='/' />
                    <div>
                        <p></p>
                    </div>
                </div>

            </div>

            {/* </div> */}

        </div>
    )
}
