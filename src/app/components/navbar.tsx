'use client'
import React from 'react'
import { caveat } from '@/font'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function ShowOption() {
    setIsOpen(!isOpen)
  }

  return (
    <div className='sticky top-0'>
      <header className='relative w-full h-auto p-[1.5rem_1rem_1.5rem_1rem] bg-[#0a0908] shadow-sm shadow-[#251e16]'>
        <nav className='h-[2.25rem] mx-[1.6875rem] flex justify-between'>
          <div>
            <Link href='/'><p className={`${caveat.className} text-[1.875rem] font-semibold text-white`} ><span className='text-[#975e28]'>Z</span>artash <span className='text-[#975e28]'>I</span>mran</p></Link>
          </div>

          {isOpen == true ? (
            <div>
              <ul className='absolute p-[40px] top-0 left-0 w-full h-screen bg-[#a9927d] flex flex-col items-center justify-center gap-[1.875rem]'>
                <IoClose className='absolute top-0 right-0 mr-[40px] mt-[30px] cursor-pointer' size={35} onClick={ShowOption} />
                <Link href='/'><li className='text-[1.125rem] text-[#3ebd88] font-semibold tracking-[.0563rem] hover:text-[#44ce6793]'>Home</li></Link>
                <Link href='#about'><li className='text-[1.125rem] text-[#000000] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>About</li></Link>
                <Link href='#portfolio'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>Portfolio</li></Link>
                <Link href='#services'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>Services</li></Link>
                <Link href='#testimonials'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>Testimonials</li></Link>
                <Link href='#contact'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>Contact</li></Link>
              </ul>
            </div>

          ) : (
            <ul className='hidden lg:h-full lg:flex lg:items-center lg:gap-[1.875rem] '>
              <Link href='/'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#A9927D]'>Home</li></Link>
              <Link href='/#about'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#A9927D]'>About</li></Link>
              <Link href='#portfolio'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#A9927D]'>Portfolio</li></Link>
              <Link href='#services'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#A9927D]'>Services</li></Link>
              <Link href='#testimonials'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#A9927D]'>Testimonials</li></Link>
              <Link href='#contact'><li className='text-[1.125rem] text-[white] tracking-[.0563rem] hover:text-[#A9927D]'>Contact</li></Link>
            </ul>
          )}

          <IoMenu size={35} color='white' className='lg:hidden cursor-pointer' onClick={ShowOption} />

        </nav>
      </header>
    </div>
  )
}

export default Navbar