import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image';
import Button from '@/app/components/button';

function HeroSection() {
  return (
    <>
      <section className='bg-[#cfb498] w-full text-center pt-[7.5rem]'>
        <p className='text-[2rem]'>Hey! I am <span className='text-[#975e28]'>Zartash Imran</span></p>

        <p className='text-[2rem]'><span className='text-[#975e28]'>I</span>m <span className='text-[#975e28]'>A F</span>ront <span className='text-[#975e28]'>E</span>nd <span className='text-[#975e28]'>W</span>eb <span className='text-[#975e28]'>D</span>eveloper</p>

        <p className='mt-[1.25rem] mb-[2rem] text-[1.125rem] text-black '>I can build user interface for web sites and applications with <span className='text-black'>React JS</span> and <span className='text-black'>Next.Js</span><br />I love the front end development.</p>

        <Button textName={"Hire Me"} />

        <div className='mt-[3.125rem] m-auto sm:w-[60%] lg:w-[30%] lg:px-[1.5rem] py-1 flex gap-[3.125rem] justify-center items-center lg:h-[52px] bg-[#975e28] rounded-full'>
          <FaFacebookF  size={30} color='black' className='cursor-pointer'/>
          <FaXTwitter size={30} color='black' className='cursor-pointer'/>
          <FaInstagram size={30} color='black' className='cursor-pointer'/>
          <IoLogoWhatsapp size={30} color='black' className='cursor-pointer'/>
          <FaTelegramPlane size={30} color='black' className='cursor-pointer'/>
          </div>

          <div className='mt-[70px] w-full bg-[#1a1a1a] h-[78px] flex justify-evenly items-center '>
            <Image src={"/myimages/behance.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
            <Image src={"/myimages/dribble.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
            <Image src={"/myimages/upwork.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
            <Image src={"/myimages/freelance.png"} alt='picture' width={156} height={52} className='cursor-pointer'></Image>
          </div>
      </section>
    </>
  )
}

export default HeroSection