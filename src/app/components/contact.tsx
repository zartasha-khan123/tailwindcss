import { MdEmail, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';

function Contact() {
  return (
    <>
      <section id="contact" className="py-40 px-4 md:px-8 bg-[#1a1a1a]">
        <div className="text-center text-white">
          <h4 className="text-4xl lg:text-5xl font-[Caveat]">
            <span>
              <span className="text-[#975e28] ">C</span>ontact{' '}
              <span className="text-[#975e28] ">M</span>e
            </span>
          </h4>
          <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
          Id love to hear from you! Whether you are interested in collaborating on a project, 
          need assistance with web development, or just want to connect, feel free to reach out
          </p>

          <div className="mt-24 flex flex-col lg:flex-row justify-evenly items-start">
            {/* Contact Information */}
            <div className="flex flex-col justify-center items-start text-center">
              
              <div className="flex mb-12 items-start">
                <MdEmail className ="text-2xl text-[#975e28] mr-4"/>
                <div className="text-start">
                  <p className="text-white">Have a question?</p>
                  <p className="my-2 text-[#616161]">I am here to help you</p>
                  <p className="text-[#975e28] ">Email me at john.vilil@mail.com</p>
                </div>
              </div>

              <div className="flex mb-12 items-start">
                <MdLocationOn className ="text-2xl text-[#975e28] mr-4"/>
                <div className="text-start">
                  <p className="text-white">Current Location</p>
                  <p className="my-2 text-[#616161]">Mansoura, Egypt</p>
                  <p className="text-[#975e28] ">serving clients worldwide</p>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <form className="w-full lg:w-[50%] flex flex-col items-start">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  className="p-3 my-4 rounded-lg bg-[#333] text-white placeholder: focus:outline-0"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  autoComplete="off"
                />
                <input
                  className="p-3 my-4 rounded-lg bg-[#333] text-white placeholder: focus:outline-0"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  autoComplete="off"
                />
              </div>

              <div className="w-full">
                <input
                  className="p-3 my-4 rounded-lg bg-[#333] text-white placeholder: focus:outline-0 w-full"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  autoComplete="off"
                />
                <textarea
                  id="msg"
                  className="p-3 my-4 rounded-lg bg-[#333] text-white placeholder: focus:outline-0 w-full min-h-[14rem]"
                  placeholder="Your message"
                  autoComplete="off"
                />
              </div>

              <Link href="#home" className="py-3 px-8 rounded-lg text-lg text-white bg-[#975e28] transition hover:bg-[#0c0906]  mt-4">
                Send message
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;