
import React from 'react'
import { caveat } from '@/font'
import Button from '@/app/components/button'
import Image from 'next/image'

function AboutSection() {
  return (
    <>
      <section id='about' className='w-full py-20 px-6 md:py-36 md:px-10 bg-[#222222] flex flex-col md:flex-row justify-center'>
        
        <div className='w-full md:w-[50%] px-4 md:px-8 flex flex-col items-center md:items-start text-center md:text-left'>
          <p className={`${caveat.className} text-3xl md:text-5xl lg:text-6xl text-white`}>ZARTASH IMRAN</p>
          
          <p className={`${caveat.className} mt-2 mb-6 text-xl md:text-2xl lg:text-3xl text-[#975e28]`}>
            Freelance Web Developer
          </p>
          
          <p className='text-base md:text-lg lg:text-xl text-white mb-8'>
            I am Zartash, a dedicated student at GIAIC and a passionate web developer. 
            I am committed to learning a wide range of IT courses, constantly expanding my knowledge and skills. 
            My focus areas include web development technologies such as TypeScript, Next.js, and Tailwind CSS. 
            I have applied my learning through projects like a calculator, a countdown timer, and multiple assignment 
            pages. These projects have allowed me to implement real-world tasks, bringing my knowledge to 
            life in a practical and impactful way.
          </p>
          
          <Button textName={"Contact Me"} /> 
        </div>

        <div className='w-full md:w-[50%] sm:w-[60%] lg:w-[50%] mx-auto mt-8 md:mt-0 flex justify-center items-center'>
          <Image src={"/myimages/profile.jpg"} alt='picture' width={300} height={300} className='rounded-full md:rounded-full' />
        </div>
      </section>
      
      <section className="w-full py-5 px-4 mx-auto flex justify-center items-center flex-wrap gap-6 bg-[#1a1a1a] overflow-hidden">
        <Image src={"/myimages/html.png"} alt='HTML' width={60} height={60} className="w-16 h-16 md:w-24 md:h-24" />
        <Image src={"/myimages/css.png"} alt='CSS' width={60} height={60} className="w-16 h-16 md:w-24 md:h-24" />
        <Image src={"/myimages/typescript.png"} alt='TypeScript' width={50} height={50} className="w-12 h-12 md:w-20 md:h-20" />
        <Image src={"/myimages/git.png"} alt='Git' width={60} height={60} className="w-16 h-16 md:w-24 md:h-24" />
        <Image src={"/myimages/figma.png"} alt='Figma' width={60} height={60} className="w-16 h-16 md:w-24 md:h-24" />
        <Image src={"/myimages/react.png"} alt='React' width={60} height={60} className="w-16 h-16 md:w-24 md:h-24" />
        <Image src={"/myimages/node.png"} alt='Node.js' width={60} height={60} className="w-16 h-16 md:w-24 md:h-24" />
        <Image src={"/myimages/next.png"} alt='Next.js' width={60} height={60} className="w-16 h-16 md:w-24 md:h-24" />
      </section>
    </>
  )
}

export default AboutSection
