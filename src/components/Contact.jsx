import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 p-4 text-slate-600'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Contact me by filling the form below</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/ffc67379-a83c-4343-9803-48bbb8ca2097' method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-slate-600 focus:outline-none' />
            <input type='text' name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-slate-600 focus:outline-none' />
            <textarea name='message' placeholder='Your message over here' rows={10} className='p-2 bg-transparent border-2 rounded-md text-slate-600 focus:outline-none'></textarea>

            <button className='text-white bg-gradient-to-r from-slate-500 to-slate-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact