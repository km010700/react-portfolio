import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-slate-300 to-slate-100 text-slate-600'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl pt-6'>I have completed my Higher Diploma in Computing and Software Engineering in International College of Business and Technology (ICBT), and I have also completed Bachelor of Science (Honours) in Busniess Information System in Cardiff Metropolitan University, which is affiliated with International College of Business and Technology (ICBT). I have an interest in being a front-end developer.</p>

        <p className='text-xl pt-5'>I have 1 month of experience, working in Aura Technologies Pvt. Ltd.</p>

        <div className='pt-6'>
            <Link to='experience' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-500 to-slate-600 cursor-pointer'>Work Experience <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span></Link>
        </div>
      </div>
    </div>
  )
}

export default About