import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30}/></>
            ),
            href: 'https://www.linkedin.com/in/kasthuri-mathanamohan/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>GitHub <FaGithub size={30}/></>
            ),
            href: 'https://github.com/km010700'
        },
        {
            id: 3,
            child: (
                <>FaceBook <FaFacebook size={30}/></>
            ),
            href: 'https://web.facebook.com/KasthuMathan'
        },
        {
            id: 4,
            child: (
                <>Instagram <FaInstagram size={30}/></>
            ),
            href: 'https:www.instagram.com/km00.___/'
        },
        {
            id: 5,
            child: (
                <>Mail <HiOutlineMail size={30}/></>
            ),
            href: 'mailto:kasthumathanbts@gmail.com'
        },
        {
            id: 6,
            child:(
                <>Resume <BsFillPersonFill size={30}/></>
            ),
            href: '/Kasthuri Mathanamohan CV.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]
  return (
    <div className='hidden flex-col top-[25%] left-0 fixed lg:flex'>
        <ul>
            {links.map((link) => (
                <li
                key={link.id}
                className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' +
                ' ' +
                link.style}>
                    <a href={link.href ? link.href : '/'} className='flex justify-between items-center w-full text-white' download={link.download} target='_blank' rel='noreferrer'>
                        {link.child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks