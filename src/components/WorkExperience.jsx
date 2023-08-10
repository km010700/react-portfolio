import React from 'react'
import {GoDotFill} from 'react-icons/go'

const WorkExperience = () => {
  return (
    <div name='experience' className='bg-gradient-to-b from-slate-300 to-slate-100 text-slate-600 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-slate-600'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience (in work)</p>
            </div>

            <div>
                <p className='text-2xl'>Aura Technologies Pvt. Ltd.</p>

                <p className='italic pt-3'>August 2023 - Present</p>

                <p className='text-xl pt-3'>I work as:</p>

                <ul className='pt-3'>
                    <li className='flex px-3 pt-1'><GoDotFill size={15} className='ml-1'/>An Admin</li>
                    <li className='flex px-3 pt-1'><GoDotFill size={15} className='ml-1'/>A Front-End Developer</li>
                    <li className='flex px-3 pt-1'><GoDotFill size={15} className='ml-1'/>A Search Engine Optimizer (SEO) in Wordpress</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WorkExperience