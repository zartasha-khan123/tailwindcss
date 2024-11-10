
import AboutSection from "@/app/components/about";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";
import HeroSection from "@/app/components/herosection";
import Navbar from "@/app/components/navbar";
import Portfolio from "@/app/components/portfolio";
import Services from "@/app/components/service";
import Testimonials from "@/app/components/testimonial";

export default function Home() {
  return (
    <div className="text-[white] selection:bg-[#A9927D] selection:text-black">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
