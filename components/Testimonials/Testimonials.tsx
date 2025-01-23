"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Define the testimonial type
type Testimonial = {
  image: string
  quote: string
  name: string
  title: string
}

// Array of testimonials
const testimonials: Testimonial[] = [
  {
    image: "/logo.png",
    quote: "This product has completely transformed how I manage my projects and deadlines",
    name: "Talia Taylor",
    title: "Digital Marketing Director @ Quantum",
  },
  {
    image: "/logoWhite.png",
    quote: "I've never been more productive. This tool is a game-changer!",
    name: "Alex Johnson",
    title: "Senior Developer @ TechCorp",
  },
  {
    image: "/logo.png",
    quote: "The interface is intuitive, and the features are exactly what I needed.",
    name: "Sarah Lee",
    title: "Product Manager @ InnovateCo",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Metallic Border Container */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative">
          {/* Grid Lines */}
          <div className="absolute inset-0 hidden md:block">
            {/* Horizontal Lines */}
            <div
              className="absolute top-1/3 w-full h-[1px]"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />
            <div
              className="absolute top-2/3 w-full h-[1px]"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />

            {/* Vertical Line */}
            <div
              className="absolute left-1/2 h-full w-[1px]"
              style={{
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-2 items-center justify-center min-h-[calc(100vh/3)]">
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
                <div className="w-full max-h-[190px] flex justify-center items-center">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={`Testimonial from ${testimonials[currentIndex].name}`}
                    width={250}
                    height={190}
                    className="object-contain rounded-2xl bg-white"
                    style={{
                      filter: "brightness(0.9) contrast(1.1)",
                    }}
                  />
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
                className="flex flex-col justify-center items-center space-y-4"
              >
                <blockquote
                  className="text-3xl font-medium text-center"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.8))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  &apos;{testimonials[currentIndex].quote}&apos;
                </blockquote>

                <div className="text-center">
                  <h3
                    className="text-xl font-semibold"
                    style={{
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.8))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {testimonials[currentIndex].name}
                  </h3>
                  <p
                    className="text-base"
                    style={{
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.4))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Accessibility: Live region for screen readers */}
      <div className="sr-only" aria-live="polite">
        Showing testimonial {currentIndex + 1} of {testimonials.length}
      </div>
    </div>
  )
}