'use client'

import { NavBar } from "@/components/Navbar/Navbar";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative bg-black px-6 py-24 overflow-hidden">
      <NavBar/>
      
      {/* Animated Gradient Background Elements */}
      <motion.div 
        className="absolute bottom-3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-600 via-purple-800 to-transparent rounded-full blur-[200px] opacity-75"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-3 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-600 via-purple-800 to-transparent rounded-full blur-[200px] opacity-75 max-md:hidden"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Grid Background */}
      <motion.div
          className="absolute inset-0 border-dashed"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            strokeDasharray: "10",
          }}
          animate={{
            x: [0, -10, 0, 10, 0],
            y: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      {/* Content Container */}
      <div className="relative max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-10">
        {/* Text Content - Centered Left */}
        <div className="flex justify-center items-center">
          <div className="max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm rounded-full bg-white/10 backdrop-blur-sm text-white/80"
            >
              Why us
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display text-white mb-8 tracking-tight"
            >
              Learn about our company here
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-white/70 leading-relaxed mb-10"
            >
             At NX2AI, we’re not just building AI—we’re shaping the future of intelligence. Our goal is simple: to create smart, adaptive, and innovative AI solutions that make life easier, businesses more efficient, and industries more advanced.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                onClick={()=>window.location.href=("/contact")}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Image - Right side (Hidden on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="w-[720px] max-w-[720px] aspect-square relative">
            <Image
              src="/box.png"
              alt="Company description"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}