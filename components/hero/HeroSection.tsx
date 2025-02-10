import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { NavBar } from "../Navbar/Navbar";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isVideoError, setIsVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const circleMotion1 = useCircularMotion(2000);
  const circleMotion2 = useCircularMotion(30, 7000);
  const circleMotion3 = useCircularMotion(40, 9000);
  const circleMotion4 = useCircularMotion(50, 11000);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.src = "/heroSection/hero2.mp4";
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const handleVideoError = () => {
    setIsVideoError(true);
    setIsVideoLoading(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <main className="relative  overflow-hidden">
        <NavBar />
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Overlays */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute bottom-[-10%] left-[-5%] w-[1000px] h-[1000px] rounded-full bg-[#D438FF] blur-[100px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-[-15%] left-[-8%] w-[800px] h-[800px] rounded-full bg-[#8C45FF] blur-[100px]"
          />
          
          {/* Center Glows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[#D438FF] blur-[150px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-[#8C45FF] blur-[130px]"
          />

          {/* Background Patterns */}
          <div className="absolute inset-0 bg-[#190D2E] opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Animated Circles */}
          <svg className="absolute inset-0 w-full h-full mt-80" xmlns="http://www.w3.org/2000/svg">
            {[
              { r: "30%", stroke: "#D438FF20", motion: circleMotion1 },
              { r: "40%", stroke: "#8C45FF20", motion: circleMotion2 },
              { r: "50%", stroke: "#D438FF15", motion: circleMotion3 },
              { r: "60%", stroke: "#8C45FF15", motion: circleMotion4 },
            ].map((circle, index) => (
              <motion.circle
                key={index}
                cx="50%"
                cy="50%"
                r={circle.r}
                fill="none"
                stroke={circle.stroke}
                strokeWidth="2"
                strokeDasharray="5,5"
                style={{ x: circle.motion.x, y: circle.motion.y }}
              />
            ))}
          </svg>
        </div>
        {/* Content Section */}
        <div className="relative z-20 container mx-auto px-4 pt-16 mt-10 pb-24">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-[90px] font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                Dive Into
              </span>
              <br />
              <span className="bg-gradient-to-b from-[#FFFFFF] to-[#7800AB]/40 bg-clip-text text-transparent">
                The World Of AI.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-purple-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              Elevate your brand&apos;s future effortlessly with custom AI tools.
              Where Smart Technology connects with user-friendly AI tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
              onClick={()=>window.location.href=("/signup")}
                size="lg"
                className="bg-[#D438FF] text-white hover:bg-[#8C45FF] transition-colors duration-300 text-lg px-8 py-3"
              >
                Login/Signup
              </Button>
            </motion.div>
          </div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            
            {/* Loading State */}
            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="w-12 h-12 border-4 border-t-[#D438FF] border-r-transparent border-b-[#8C45FF] border-l-transparent rounded-full animate-spin" />
              </div>
            )}

            {/* Error State */}
            {isVideoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-red-500 text-center">
                  <p>Failed to load video</p>
                  <button 
                    onClick={() => {
                      setIsVideoError(false);
                      setIsVideoLoading(true);
                      if (videoRef.current) {
                        videoRef.current.load();
                      }
                    }}
                    className="mt-2 text-[#D438FF] hover:text-[#8C45FF]"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export const useCircularMotion = (radius: number, speed = 5000) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animate = () => {
      const time = new Date().getTime() / speed;
      const x = Math.cos(time) * radius;
      const y = Math.sin(time) * radius;
      setPosition({ x, y });
    };

    const intervalId = setInterval(animate, 16);
    return () => clearInterval(intervalId);
  }, [radius, speed]);

  return position;
};