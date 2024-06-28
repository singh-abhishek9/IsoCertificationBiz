import React, { useState } from 'react'

export default function ContactForm() {
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        phone:'',
        message:'',
    });
 const handleformdata=(event)=>{
    event.preventDefault();
    console.log(formData );
    setFormData({
        name:'',
        email:'',
        number:'',
        message:'',
    });
 }
 const handleDataChange=(event)=>{
    const{name,value}=event.target;
    setFormData(prevState=>({
        ...prevState,
        [name]:value
    })

    )
 }
  return (
    <div className='w-full rounded-md shadow-2xl h-fit p-4 bg-white'>
        
        <form onSubmit={handleformdata} className='flex flex-col justify-between gap-2'>
        <h2 className='text-4xl text-slate-700 font-bold w-full text-center'>Get a Quote For ISO Certification</h2>
            <label>
                <input 
                type='text'
                required
                placeholder='Enter Your Name *'
                name='name'
                value={formData.name}
                onChange={handleDataChange}
                className='rounded-md w-full text-gray-600 ps-3 p-1 font-medium bg-slate-200 border-none'
                />
            </label>
            <br/>
            <label>
                <input 
                type='email'
                required
                placeholder='Enter Your Email Address *'
                name='email'
                value={formData.email}
                onChange={handleDataChange}
                 className='rounded-md w-full text-gray-600 ps-3 p-1 font-medium bg-slate-200 border-none'
                />
            </label>
            <br/>
            <label>
                <input 
                type='number'
                required
                placeholder='Enter Your number *'
                name='number'
                value={formData.number}
                onChange={handleDataChange}
                 className='rounded-md w-full text-gray-600 ps-3 p-1 font-medium bg-slate-200 border-none'
                />
            </label>
            <br/>
            <label>
                <textarea 
                rows={3}
                required
                placeholder='Enter Your Message'
                name='message'
                value={formData.message}
                onChange={handleDataChange}
                 className='rounded-md w-full text-gray-600 ps-3 p-1 font-medium bg-slate-200 border-none'
                />
            </label>
            <button 
            type='submit'
            className='bg-green-300 p-2 w-[90%] rounded-full font-medium mx-auto'>
                Submit
            </button>
        </form>
    </div>
  )
}
