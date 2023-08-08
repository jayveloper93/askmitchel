'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from "react"
import { HiMenuAlt3 } from 'react-icons/hi'

const Header = () => {
  const [toggleMobileMenu, settoggleMobileMenu] = useState(false)

  return (
    <nav className='w-full flex flex-col p-6 bg-secondary text-primary top-0'>
        <div className='container md:px-[3rem] flex items-center justify-between'>
          <Link href='/' className='font-extrabold text-2xl'>Ask<span className='text-tertiary'>Mitchel👩</span></Link>

          <ul className="hidden md:flex items-center gap-[2rem]">
            <li className="text-gray-100 hover:text-gray-400 hover:font-bold"><Link href='/'>Home</Link></li>
            <li className="text-gray-100 hover:text-gray-400 hover:font-bold"><Link href='/about'>About</Link></li>
            <li className="text-gray-100 hover:text-gray-400 hover:font-bold"><Link href='/privacy'>Privacy Policy</Link></li>
            <li className="text-gray-100 hover:text-gray-400 hover:font-bold"><Link href='/terms'>Terms</Link></li>
        </ul>

        <div onClick={() => settoggleMobileMenu(!toggleMobileMenu)} className="flex md:hidden text-gray-200 text-[25px]">
            <HiMenuAlt3 />
        </div>
       
        </div>

        {toggleMobileMenu && (<ul className="w-full h-fit py-[5rem] flex flex-col items-center gap-[2rem] text-gray-100 hover:text-gray-400 hover:font-bold">
        <li className="text-gray-100 hover:text-gray-400 hover:font-bold"><Link href='/'>Home</Link></li>
            <li className="text-gray-100 hover:text-gray-400 hover:font-bold"><Link href='/about'>About</Link></li>
            <li className="text-gray-100 hover:text-gray-400 hover:font-bold"><Link href='/privacy'>Privacy Policy</Link></li>
            <li className="text-gray-100 hover:text-gray-400 hover:font-bold"><Link href='/terms'>Terms</Link></li>
        </ul>)}
    </nav>
  )
}

export default Header