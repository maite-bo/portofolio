import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header  className='sticky top-0 flex items-start justify-between'>
        <div className='flex flex-row items-center'>
            {/* Socials Icons*/}
            <SocialIcon url="https://twitter.com/jaketrent" 
            fgColor='gray' 
            bgColor='transparent'
            />
            {/* Socials Icons*/}
            <SocialIcon url="https://twitter.com/jaketrent" 
            fgColor='gray' 
            bgColor='transparent'
            />
            {/* Socials Icons*/}
            <SocialIcon url="https://twitter.com/jaketrent" 
            fgColor='gray' 
            bgColor='transparent'
            />
        </div>

        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray' 
            bgColor='transparent'
            />
            <div className='flex flex-row items-center'>
                {/* className = 'uppercase hidden md:inline-flex text-sm text-gray-400' */}
                <p className = 'uppercase md:inline-flex text-sm'> 
                Get In Touch
                </p>
                <p className = 'uppercase md:inline-flex text-sm'> 
                Project
                </p>
                <p className = 'uppercase md:inline-flex text-sm'> 
                Experience
                </p>
                <p className = 'uppercase md:inline-flex text-sm'> 
                About
                </p>
            </div>
            
        </div>
    </header>
  )
}