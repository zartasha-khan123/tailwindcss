'use client'
import React, { useEffect } from "react";
import { caveat } from "@/font";
import Image from "next/image";
import { CardData } from '@/app/constant/cards'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  ])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) 
    }
  }, [emblaApi])

  return (
    <>
      <section id="portfolio" className="w-full py-36 px-4 md:px-8 text-center bg-[#0a0908]">
        <h4 className={`${caveat.className} text-white text-4xl lg:text-5xl`}>
          <span className="text-[#975e28]">M</span>y{" "}
          <span className="text-[#975e28]">L</span>ast{" "}
          <span className="text-[#975e28]">W</span>ork
        </h4>

        <p className="w-full sm:w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
          For my most recent project, I designed and developed an eCommerce website using Figma, HTML, CSS, JavaScript, and TypeScript.
          <br />
          Figma: I started by creating wireframes and UI designs in Figma, ensuring the layout was visually appealing, user-friendly, and aligned with modern design trends.
          <br /><br />
          HTML & CSS: The website was then built using HTML for the structure and CSS for styling. I used responsive design principles to ensure the site is mobile-friendly and looks great on all devices.
          <br /><br />
          JavaScript & TypeScript: To add dynamic functionality, I incorporated JavaScript and TypeScript. JavaScript was used for handling user interactions, while TypeScript helped to improve the maintainability and scalability of the codebase with its strong typing and error checking.
          <br /><br />
          E-commerce Features: The website includes key eCommerce features like product listings, a shopping cart, and a checkout process. I also ensured the website is optimized for smooth performance and fast load times.
        </p>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-4 justify-center">
            {CardData.map((data) => (
              <div key={data.id} className="embla__slide flex-none w-[90%] sm:w-[300px] md:w-[350px] lg:w-[371px] bg-[#975e28] p-4 rounded-lg shadow-lg">
                <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px]">
                  <Image src={data.src} layout="fill" objectFit="cover" alt='sliders' className="rounded-lg" />
                </div>
                <div>
                  <h1 className="text-center text-xl font-semibold text-black mt-4">{data.heading}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio;







       
