'use client'
import React, { useEffect } from "react";
import { caveat } from "@/font";
import Image from "next/image";
import {CardData} from '@/app/constant/cards'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'



function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay({delay: 2000,stopOnInteraction
    :false,stopOnMouseEnter
    :true})])
useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])



  return (
    <>
      <section id="portfolio" className="w-full py-36 px-8 text-center bg-[#0a0908]">
        <h4 className={`${caveat.className} text-white text-4xl lg:text-5xl`}>
          <span className="text-[#975e28]">M</span>y{" "}
          <span className="text-[#975e28]">L</span>ast{" "}
          <span className="text-[#975e28]">W</span>ork
        </h4>

        <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
        For my most recent project, I designed and developed an eCommerce website using Figma, HTML, CSS, JavaScript, and TypeScript.
<br/>
Figma:  I started by creating wireframes and UI designs in Figma, ensuring the layout was visually appealing, user-friendly, and aligned with modern design trends.<br/>
<br/>HTML & CSS: The website was then built using HTML for the structure and CSS for styling. I used responsive design principles to ensure the site is mobile-friendly and looks great on all devices.
<br/>JavaScript & TypeScript: To add dynamic functionality, I incorporated JavaScript and TypeScript. JavaScript was used for handling user interactions, while TypeScript helped to improve the maintainability and scalability of the codebase with its strong typing and error checking.
<br/>E-commerce Features: The website includes key eCommerce features like product listings, a shopping cart, and a checkout process. I also ensured the website is optimized for smooth performance and fast load times.
        </p>

        <div className="embla" ref={emblaRef}>
        <div className="embla__container flex justify-end">
        {CardData.map((data)=>{

return(
  <div  key={data.id} className="flex  space-x-4 justify-center"> 
<div className= "embla__slide h-[300px] w-[371px] bg-[#975e28] p-4 rounded-lg shadow-lg" key={data.id}>
    <div className=''> 
  <Image src={data.src} width={371} height={500} alt='sliders'>
  </Image>
    </div>

    <div>
        <h1 className="text-center text-xl font-semibold text-black">{data.heading}</h1>

       

</div>
</div>
</div>

)
})}

</div>
</div>
</section> 
</>


)
}

export default Portfolio;










        {/* <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28">
            {[...Array(6)].map((_, index) => (
              <div className="flex flex-col" key={index}>
                <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
                  <Image
                    src="/myImage/profile.jpg"
                    alt="Laptop, Phone and Camera"
                    width={500}
                    height={500}
                    className="w-full rounded-3xl transition-all duration-[0.9s] hover:scale-110 hover:-rotate-[5deg]"
                  ></Image>
                </div>

                <p className="mt-6 text-xl">Lorem, ipsum dolor.</p>
            </div> */}
            {/* ))} */}
          {/* </div> */}
     
