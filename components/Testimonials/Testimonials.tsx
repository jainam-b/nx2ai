"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type Testimonial = {
  image: string
  quote: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    quote: "This product has completely transformed how I manage my projects and deadlines",
    name: "Talia Taylor",
    title: "Digital Marketing Director @ Quantum",
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    quote: "The interface is intuitive, and the features are exactly what I needed.",
    name: "Sarah Chen",
    title: "Product Manager @ InnovateCo",
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    quote: "I've never been more productive. This tool is a game-changer!",
    name: "Alex Rivera",
    title: "Senior Developer @ TechCorp",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="text-center pt-10 md:pt-20  relative z-10">
        <h2 className="text-4xl md:text-7xl font-medium mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
          Our clients
        </h2>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto px-4">
          Hear firsthand how our solutions have boosted online success for users like you.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center relative overflow-hidden min-h-[60vh]">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Grid Lines - Hidden on mobile */}
            <div className="absolute inset-0 hidden lg:block">
              <div className="absolute top-1/3 -mt-5 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute top-2/3 mt-4 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute left-[49%] h-full w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="absolute right-[71%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2  sm:gap-0 md:gap-10 items-center min-h-[400px]">
              {/* Image Column */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-square flex items-center justify-center"
                >
                  <div className="w-full h-full flex justify-center md:justify-end items-center">
                    {/* Circular gradient behind the image - Responsive sizing */}
                    <div className="flex justify-center items-center absolute">
                      <div className="w-[400px] md:w-[500px] h-[400px] md:h-[400px] rounded-full bg-[#8C45FF]/30 blur-3xl -mx-32" />
                    </div>

                    {/* Image Container - Responsive sizing */}
                    <div className="relative w-[180px] md:w-[200px] lg:w-[230px] h-[180px] md:h-[180px] lg:h-[220px] rounded-2xl overflow-hidden">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={`Testimonial from ${testimonials[currentIndex].name}`}
                        fill
                        className="object-cover rounded-2xl"
                        style={{
                          filter: "brightness(0.9) contrast(1.1)",
                        }}
                      />
                      {/* Purple Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent mix-blend-overlay" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Text Column */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center space-y-6 max-w-xl  md:mt-0"
                >
                  <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent text-center md:text-left">
                  &quot;{testimonials[currentIndex].quote}&quot;
                  </blockquote>

                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm md:text-base bg-gradient-to-b from-white/60 to-white/40 bg-clip-text text-transparent">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Accessibility */}
        <div className="sr-only" aria-live="polite">
          Showing testimonial {currentIndex + 1} of {testimonials.length}
        </div>
      </div>
    </div>
  )
}