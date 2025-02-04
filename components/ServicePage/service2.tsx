"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function VoiceSpeechMultiCarousel() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null)

  const categories = [
    {
      title: "LLM Chatbots",
      description: "Conversational AI chatbots powered by advanced LLMs for intuitive, human-like interactions.",
      applications: [
        "Personalized tutoring for complex subjects with adaptive learning paths.",
        "Homework assistance and instant query resolution for academic needs.",
        "Career counseling and guidance based on student interests and aptitudes.",
        // "Patient engagement for appointment scheduling and medical queries.",
        // "Virtual health assistants providing medication reminders and symptom tracking.",
        // "Mental health support through empathetic and confidential conversations."
      ],
      icon: "🤖",
      gradient: "from-blue-600 to-purple-600",
      bgAccent: "bg-blue-600/10",
    },
    {
      title: "LLM-Based Output Generation",
      description:
        "Advanced AI capabilities for generating content, summarizing information, and performing data analysis.",
      applications: [
        "Content creation for blogs, social media, and marketing campaigns.",
        "Academic research summarization and paper generation.",
        "Business reporting and analysis for informed decision-making.",
      ],
      icon: "📝",
      gradient: "from-purple-600 to-pink-600",
      bgAccent: "bg-purple-600/10",
    },
    {
      title: "AI-Driven Content Moderation",
      description: "Advanced tools to detect and moderate harmful or inappropriate content in real-time.",
      applications: [
        "Social media platforms ensuring safe and inclusive communities.",
        "E-commerce sites moderating user reviews and comments.",
        "Online learning platforms ensuring appropriate content for diverse audiences.",
      ],
      icon: "⚖️",
      gradient: "from-pink-600 to-red-600",
      bgAccent: "bg-pink-600/10",
    },
  ]

  const itemsPerPage = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
  }

  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return itemsPerPage.xl
      if (window.innerWidth >= 1024) return itemsPerPage.lg
      if (window.innerWidth >= 768) return itemsPerPage.md
      return itemsPerPage.sm
    }
    return itemsPerPage.sm
  }

  const [itemsToShow, setItemsToShow] = useState(getItemsPerPage())

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsPerPage())
      setCurrentIndex((prev) => Math.min(prev, categories.length - getItemsPerPage()))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => {
          if (prev >= categories.length - itemsToShow) {
            return 0
          }
          return prev + 1
        })
      }
    }, 3000) // Adjust scroll speed here
  }

  useEffect(() => {
    startAutoScroll()
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current)
      }
    }
  }, [itemsToShow, isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    startAutoScroll()
  }


  return (
    <div className=" bg-black overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(66,23,125,0.2),transparent_60%)]" />
      <div className="container mx-auto px-4 py-16 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mb-8 tracking-tight"
          >
             <motion.div
              className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-br from-purple-600 via-purple-800 to-transparent rounded-full blur-[200px] opacity-75"
              animate={{
                x: [0, 20, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <span className="text-transparent bg-clip-text bg-white">AI-Powered Tools and Moderation</span>
          </motion.h1>
        </div>

        {/* Carousel Section */}
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div ref={carouselRef} className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {[...categories, ...categories].map((category, idx) => (
                <motion.div
                  key={idx}
                  className={`w-full flex-shrink-0 px-2`}
                  style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="p-2 h-full">
                    <motion.div
                      className={`h-full rounded-xl bg-black/80 backdrop-blur-sm border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-300 ${
                        activeCategory === idx ? "border-purple-500/50" : ""
                      }`}
                      onMouseEnter={() => setActiveCategory(idx)}
                      onMouseLeave={() => setActiveCategory(null)}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                     

                      <h3 className="text-4xl font-bold text-white mb-3">{category.title}</h3>
                      <p className="text-gray-400 mb-4 text-md">{category.description}</p>

                      <div className="space-y-2">
                        {category.applications.map((app, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={activeCategory === idx ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 300, damping: 10 }}
                            />
                            <span className="text-md text-gray-300">{app}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

       
      </div>
    </div>
  )
}

