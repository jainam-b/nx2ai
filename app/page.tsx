import { About } from "@/components/Aboutus/About";
import  Dashboard  from "@/components/hero/HeroSection";

import Service from "@/components/Service/Service";
import Testimonial from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="">
   
      <Dashboard/>
      <About/>
      <Service/>
      <Testimonial/>
    </div>
  );
}
