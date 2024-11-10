import React from 'react'
import {caveat} from '@/font'
import Button from '@/app/components/button'
import Image from 'next/image'

function AboutSection() {
  return (
    <>
      <section id='about' className='w-full py-[160px] px-10 bg-[#222222] flex flex-col md:flex-row justify-center'>
        
        <div className='mx-auto w-[50%] px-[16px] flex flex-col items-start text-left'>
          <p className={`${caveat.className} text-[48px]`}>ZARTASH IMRAN</p>
          
          <p className={`${caveat.className} text-[30px] mt-2 mb-6 text-light-beige text-center lg:text-start text-3xl text-[#975e28]`}>Freelance Web Developer</p>
          
          <p className='text-[18px] mb-8'>I'm Zartash, a dedicated student at GIAIC and a passionate web developer.
             I'm committed to learning a wide range of IT courses, constantly expanding my knowledge and skills.
              My focus areas include web development technologies such as TypeScript, Next.js, and Tailwind CSS.
               I have applied my learning through projects like a calculator, a countdown timer, and multiple assignment
                pages. These projects have allowed me to implement real-world tasks, bringing my knowledge to 
                life in a practical and impactful way.


           </p>
        
          <Button textName={"Contact Me"}/> 
        </div>

        <div className='w-[50%] sm:w-[55%] lg:w-[60%] mx-auto md:-mt-[100px] md:-mr-[40px] rounded-full flex justify-center items-center'>
          <Image src={"/myImages/profile.jpg"} alt='picture' width={350} height={350} className='rounded-full'></Image>
        </div>
      </section>
      
      <section className="w-full py-5 px-5 mx-auto flex justify-center items-center gap-16 bg-[#1a1a1a] overflow-hidden">
        <Image src={"/myImages/html.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImages/css.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImages/typescript.png"} alt='picture' width={70} height={70}></Image>
        <Image src={"/myImages/git.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImages/figma.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImages/react.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImages/node.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImages/next.png"} alt='picture' width={96} height={96}></Image>
      </section>
    </>
  )
}

export default AboutSection