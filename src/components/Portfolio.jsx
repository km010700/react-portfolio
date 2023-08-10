import React from 'react'
import parallax from '../assets/parallax.jpg'

const Portfolio = () => {
  return (
    <div name='portfolio' className='bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 w-full text-slate-600 md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='text-xl pt-6'>Check out some of my works here.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={parallax} alt='' className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'><a href='https://main--parallax-scroll-123.netlify.app/'>Demo</a></button>
              <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'><a href='https://github.com/km010700/parallax-scrolling'>Code (GitHub)</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio