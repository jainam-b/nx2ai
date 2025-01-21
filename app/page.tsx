import { About } from "@/components/Aboutus/About";
import  Dashboard  from "@/components/hero/HeroSection";
import { NavBar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <div className="mb-6">
      <NavBar/>
      </div>
      <Dashboard/>
      <About/>
    </div>
  );
}
