"use client";
import { useState, useRef, useEffect, type TouchEvent } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VoiceSpeechMultiCarousel() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const swipeThreshold = 50; // minimum distance to be considered a swipe

  const categories = [
    {
      title: "Text-to-Speech (TTS)",
      description:
        "Transform written text into lifelike audio with our advanced TTS solutions.",
      applications: [
        "Audiobook creation for publishing houses and independent authors.",
        "Accessibility tools for visually impaired individuals.",
        "Corporate presentations and marketing materials.",
      ],
      icon: "📚",
      gradient: "from-blue-600 to-green-600",
      bgAccent: "bg-blue-600/10",
    },
    {
      title: "Speech-to-Text (STT)",
      description:
        "High-accuracy transcription of spoken language into text for documentation and analysis.",
      applications: [
        "Legal and medical transcription for professional documentation.",
        "Media and journalism for interviews and content generation.",
        "Real-time meeting transcription for corporate use.",
      ],
      icon: "📝",
      gradient: "from-green-600 to-yellow-600",
      bgAccent: "bg-green-600/10",
    },
    {
      title: "Speech-to-Speech Translation",
      description:
        "Seamless translation of spoken language into another while retaining the speaker’s voice and tone.",
      applications: [
        "International conferences requiring real-time multilingual communication.",
        "Global customer service for enhanced user experience.",
        "Educational platforms offering courses in multiple languages.",
      ],
      icon: "🌍",
      gradient: "from-yellow-600 to-orange-600",
      bgAccent: "bg-yellow-600/10",
    },
    {
      title: "Voice Cloning",
      description:
        "Replicate voices with precision to create authentic voiceovers and dubbing solutions.",
      applications: [
        "Dubbing and voiceover in film and television.",
        "Brand voice personalization for advertisements.",
        "Preservation of voices for legacy and archival purposes.",
      ],
      icon: "🎙️",
      gradient: "from-orange-600 to-red-600",
      bgAccent: "bg-orange-600/10",
    },
    {
      title: "Voice Changer",
      description:
        "Real-time voice modulation technology to transform voices for gaming, content creation, and anonymity purposes.",
      applications: [
        "Gaming for creating unique in-game character voices.",
        "Content creators enhancing audio for videos and podcasts.",
        "Privacy solutions for anonymous communication.",
      ],
      icon: "🎮",
      gradient: "from-red-600 to-purple-600",
      bgAccent: "bg-red-600/10",
    },
    {
      title: "Speech Translation",
      description:
        "Real-time and offline translation solutions for seamless communication across languages.",
      applications: [
        "Multinational companies facilitating team collaboration.",
        "Tourism services offering guided tours in multiple languages.",
        "Educational institutions with diverse student populations.",
      ],
      icon: "🌐",
      gradient: "from-purple-600 to-blue-600",
      bgAccent: "bg-purple-600/10",
    },
  ];

  const itemsPerPage = {
    xs: 1,
    sm: 1,
    md: 2,
    lg: 2,
    xl: 3,
  };

  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return itemsPerPage.xl;
      if (window.innerWidth >= 1024) return itemsPerPage.lg;
      if (window.innerWidth >= 768) return itemsPerPage.md;
      if (window.innerWidth >= 640) return itemsPerPage.sm;
      return itemsPerPage.xs;
    }
    return itemsPerPage.xs;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsPerPage());
      setCurrentIndex((prev) =>
        Math.min(prev, categories.length - getItemsPerPage())
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => {
          if (prev >= categories.length - itemsToShow) {
            return 0;
          }
          return prev + 1;
        });
      }
    }, 3000); // Adjust scroll speed here
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [itemsToShow, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startAutoScroll();
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsToShow, categories.length - itemsToShow)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (isSwiping) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    if (touchStart - touchEnd > swipeThreshold) {
      nextSlide();
    }
    if (touchStart - touchEnd < -swipeThreshold) {
      prevSlide();
    }
  };

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
              className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[200px] bg-gradient-to-br from-purple-600 via-purple-800 to-transparent rounded-full blur-[200px] opacity-75"
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
            <span className="text-transparent bg-clip-text bg-white">
              Voice and Speech Solutions
            </span>
          </motion.h1>
        </div>

        {/* Carousel Section */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {[...categories, ...categories].map((category, idx) => (
                <motion.div
                  key={idx}
                  className={`w-full flex-shrink-0 px-2 xs:px-1 sm:px-2`}
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
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {/* <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl ${category.bgAccent}`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                    </div> */}

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-md">
                        {category.description}
                      </p>

                      <div className="space-y-2">
                        {category.applications.map((app, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              activeCategory === idx
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0.7, x: 0 }
                            }
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                delay: i * 0.1 + 0.2,
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                              }}
                            />
                            <span className="text-sm sm:text-md text-gray-300">
                              {app}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            disabled={currentIndex === 0}
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            disabled={currentIndex >= categories.length - itemsToShow}
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.ceil(categories.length / itemsToShow),
          }).map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx * itemsToShow)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex >= idx * itemsToShow &&
                currentIndex < (idx + 1) * itemsToShow
                  ? "bg-purple-500"
                  : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              whileHover={{ scale: 1.2 }}
              animate={{
                scale:
                  currentIndex >= idx * itemsToShow &&
                  currentIndex < (idx + 1) * itemsToShow
                    ? 1.2
                    : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
