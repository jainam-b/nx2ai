"use client"
import { motion } from "framer-motion"

export default function CTA() {


  return (
    <div className="mt-18 bg-black flex items-center justify-center p-4">
      {/* Main container with border radius and gradient border effect */}
      <div className="relative w-full max-w-[1300px] rounded-[24px] overflow-hidden">
        {/* Background gradient and grid */}
        <div className="absolute inset-0 bg-gradient-to-b  from-purple-900/50 to-black" />

        {/* Grid overlay */}
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
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center px-4 py-20"
        >
         <motion.h2
            className="mb-4 text-4xl md:text-7xl font-medium text-white text-center"
            animate={{
              textShadow: [
                "0 0 10px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.8)",
                "0 0 10px rgba(139, 92, 246, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Next Generation Of 
            <br />
            AI For Everyone.
          </motion.h2>

          <form  className="w-full max-w-md space-y-4">
            <div className="flex flex-col justify-center items-center sm:flex-row gap-3">
              {/* <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-purple-950/50 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                required
              /> */}
              <button
              onClick={()=>window.location.href=("/contact")}
                type="submit"
                className="px-6 py-3 bg-white text-purple-950 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </button>
            </div>

        
          </form>
        </motion.div>

        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-[32px] border border-purple-500/20" />
      </div>
    </div>
  )
}

