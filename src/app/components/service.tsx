import React from "react";
import { FaBullhorn, FaPaintBrush, FaCode, FaSearch } from "react-icons/fa"; // Import icons from react-icons

function Services() {
  return (
    <>
      <section id="services" className="py-40 px-2 md:px-8 bg-[#1a1a1a]">
        <div className="text-center">
          <h4 className="text-white text-4xl lg:text-5xl font-[Caveat]">
            <span className="">
              <span className="text-light-beige capitalize">w</span>hat{" "}
              <span className="text-light-beige capitalize">I</span>{" "}
              <span className="text-light-beige capitalize">d</span>o{" "}
              <span className="text-light-beige capitalize">f</span>or{" "}
              <span className="text-light-beige capitalize">c</span>lients
            </span>
          </h4>
          <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-white text-sm lg:text-lg leading-6">
          For my clients, I focus on web development projects, delivering professional,
           functional, and visually appealing websites. I use technologies like TypeScript,
            Next.js, and Tailwind CSS to create custom solutions that meet each clients needs. 
            Im dedicated to providing high-quality, responsive designs and implementing effective 
            functionality to enhance user experience and engagement.


          </p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-start">
            
            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaBullhorn className="text-[#975e28] text-6xl" /> {/* Branding Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">branding</h4>
                <p>
                My branding work focuses on creating cohesive, visually appealing designs that reflect each clients
                 unique identity and values. I aim to build a memorable brand presence by aligning visual elements with the core message, ensuring consistency across platforms and touchpoints. 
                This approach helps clients stand out and connect meaningfully with their audience.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaPaintBrush className="text-[#975e28] text-6xl" /> {/* Design Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">design</h4>
                <p>
                Design is a creative process that makes a product, website, or visual project both attractive 
                and user-friendly, and functional. The main goal is for something to not only look good but also be easy to use. 
                In web design and branding
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaCode className="text-[#975e28] text-6xl" /> {/* Development Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">development</h4>
                <p>
                Development is the process of building and implementing functional systems,
                 like websites, applications, and digital tools, to make ideas come to life online. 
                 In web development,
                 this process includes both front-end and back-end work:
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                <FaSearch className="text-[#975e28] text-6xl" /> {/* SEO Icon */}
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-2xl capitalize mb-4">SEO</h4>
                <p>
                SEO (Search Engine Optimization) is the process of improving the visibility of a website or
                 web page in search engine results, with the goal of increasing organic (non-paid) traffic.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
