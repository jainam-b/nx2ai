'use client'

import { NavBar } from "@/components/Navbar/Navbar";
import { motion } from 'framer-motion';

export default function ServiceHero() {
  return (
    <div className="relative bg-black px-6 py-24 overflow-hidden">
      <NavBar/>
      
      {/* Animated Gradient Background Elements */}
      {/* <motion.div 
        className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-600 via-purple-800 to-transparent rounded-full blur-[200px] opacity-75"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      /> */}
      {/* <motion.div 
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
      /> */}
      
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
      <div className="relative w-full mx-auto  justify-center  items-center mt-10">
        {/* Text Content - Centered Left */}
        <div className="flex justify-center items-center">
          <div className="max-w-6xl text-center">
           
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-7xl font-display text-white mb-8 tracking-tight"
            >
              Our Services 
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-white/70 leading-relaxed mb-10"
            >
              We specialize in delivering cutting-edge solutions that drive business growth. From web development to digital transformation, our team of experts is dedicated to helping you achieve your goals with innovative and reliable services.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col justify-center items-center  "
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

      </div>
    </div>
  )
}