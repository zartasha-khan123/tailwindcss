import React from "react";
import Image from "next/image";

function Testimonials() {
  return (
    <>
      <section id="testimonials" className="bg-[#0a0908] py-40 px-4 md:px-8">
        <div className="text-white text-center">
          <h4 className="text-white text-4xl lg:text-5xl font-[Caveat] ">
            <span>
              <span className="text-[#975e28]">W</span>hat{" "}
              <span className="text-[#975e28]">O</span>ther{" "}
              <span className="text[#975e28]">P</span>eople{" "}
              <span className="text-[#975e28]">S</span>ay
            </span>
          </h4>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/myImages/other3.avif",
                alt: "easton kai",
                title: "easton kai",
                role: "javascript developer",
              },
              {
                src: "/myImages/other4.avif",
                alt: "elijah liam",
                title: "elijah liam",
                role: "android developer",
              },
              {
                src: "/myImages/other1.avif",
                alt: "james owen",
                title: "james owen",
                role: "IOS developer",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="mx-auto py-8 px-2 md:px-4 border-t-[3px] border-solid border-light-beige rounded-2xl select-none bg-[#1a1a1a] cursor-grab flex flex-col justify-center items-center"
              >
                <div className="w-[8rem] border-[3px] border-solid border-text-[#a9927d] rounded-full p-1">
                  <Image
                    src={person.src}
                    alt={person.alt}
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="mt-4">{person.title}</p>
                <p className="my-4 text-[#976535]">{person.role}</p>
                <p className="w-[95%] md:w-[97%] mx-auto mb-6 leading-7 text-center">
                Her attention to detail is impeccable. ZArtash ensures every line of code serves a purpose,
                 making her projects not only functional but also efficient and easy to maintain.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
