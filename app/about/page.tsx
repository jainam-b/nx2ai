import { NavBar } from "@/components/Navbar/Navbar";
import Image from 'next/image';

export default function About() {
  return (
    <div className="relative bg-black px-6 py-24 overflow-hidden">
      <NavBar/>
      
      {/* Gradient Background Elements */}
      <div className="absolute bottom-3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-600 via-purple-800 to-transparent rounded-full blur-[200px] opacity-75 " />
      <div className="absolute bottom-3 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-600 via-purple-800 to-transparent rounded-full blur-[200px] opacity-75 max-md:hidden" />
      
      {/* Grid Background */}
      <div
        className="absolute inset-0 border-dashed"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          strokeDasharray: "5"
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-10">
        {/* Text Content - Centered Left */}
        <div className="flex justify-center items-center">
          <div className="max-w-2xl text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-white/10 backdrop-blur-sm text-white/80">
              Why us
            </div>
            <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-tight">
              Learn about our company here
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10">
              Hydar is a premium Framer template. This incredible template would transform your website in just a few clicks. We also provide custom Framer template to help you maximize your Framer skills and help you get the most out of your template.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
                Get Free Version
              </button>
              <button className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                Unlock Full Version
              </button>
            </div>
          </div>
        </div>

        {/* Image - Right side (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-[720px] max-w-[720px] aspect-square relative">
            <Image
              src="/box.png"
              alt="Company description"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}