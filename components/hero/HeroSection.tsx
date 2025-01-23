"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import { NavBar } from "../Navbar/Navbar";
import { motion } from "framer-motion";

export default function Dashboard() {
  const circleMotion1 = useCircularMotion(2000);
  const circleMotion2 = useCircularMotion(30, 7000);
  const circleMotion3 = useCircularMotion(40, 9000);
  const circleMotion4 = useCircularMotion(50, 11000);

  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <div className="min-h-screen bg-black relative overflow-hidden mt-6">
        {/* Enhanced Radial Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />

          {/* Primary Glows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute bottom-[-10%] left-[-5%] w-[1000px] h-[1000px] rounded-full bg-[#D438FF] blur-[120px]"
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

          {/* Background Accents */}
          <div className="absolute inset-0 bg-[#190D2E] opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Circular Lines */}
          <svg
            className="absolute inset-0 w-full h-full mt-80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="50%"
              cy="50%"
              r="30%"
              fill="none"
              stroke="#D438FF20"
              strokeWidth="2"
              strokeDasharray="5,5"
              style={{ x: circleMotion1.x, y: circleMotion1.y }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="40%"
              fill="none"
              stroke="#8C45FF20"
              strokeWidth="2"
              strokeDasharray="5,5"
              style={{ x: circleMotion2.x, y: circleMotion2.y }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="50%"
              fill="none"
              stroke="#D438FF15"
              strokeWidth="2"
              strokeDasharray="5,5"
              style={{ x: circleMotion3.x, y: circleMotion3.y }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="60%"
              fill="none"
              stroke="#8C45FF15"
              strokeWidth="2"
              strokeDasharray="5,5"
              style={{ x: circleMotion4.x, y: circleMotion4.y }}
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-20">
          {/* Hero Section */}
          <div className="text-center pt-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-[#190D2E]/80 px-4 py-1.5 rounded-full mb-8 border border-1 border-[#D438FF]/30"
            >
              <Badge
                variant="secondary"
                className="bg-[#D438FF] text-white uppercase rounded-2xl"
              >
                New
              </Badge>
              <span className="text-[#D438FF]">
                Latest integration just arrived
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight text-white"
            >
              Boost your <br />
              <span className="bg-gradient-to-b from-[#FFFFFF] to-[#7800AB]/60 bg-clip-text text-transparent">
                rankings with AI.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-purple-200 text-xl mb-8 max-w-2xl mx-auto"
            >
              Elevate your sites visibility effortlessly with AI, where smart
              technology meets user-friendly SEO tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#D438FF] text-white hover:bg-[#8C45FF] transition-colors duration-300"
              >
                Start for free
              </Button>
            </motion.div>
          </div>

          <ContainerScroll titleComponent={<></>}>
            <Image
              src={`/heroSection/heroImage.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>
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

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ContainerScroll } from "../ui/container-scroll-animation"
// import Image from "next/image"

// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden">
//       {/* Enhanced Radial gradients */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Primary bottom left glow */}
//         <div className="absolute bottom-[-10%] left-[-5%] w-[1000px] h-[1000px] rounded-full bg-[#D438FF] opacity-30 blur-[120px] animate-" />

//         {/* Secondary bottom left glow */}
//         <div className="absolute bottom-[-15%] left-[-8%] w-[800px] h-[800px] rounded-full bg-[#8C45FF] opacity-20 blur-[100px] " />

//         {/* Primary center glow */}
//         <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[#D438FF] opacity-20 blur-[150px] " />

//         {/* Secondary center glow */}
//         <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-[#8C45FF] opacity-25 blur-[130px] " />

//         {/* Deep background accent */}
//         <div className="absolute inset-0 bg-[#190D2E] opacity-50" />

//         {/* Mesh pattern overlay */}
//         <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]" />

//         {/* Circular lines with updated colors */}
//         <svg className="absolute top-96 inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <circle cx="50%" cy="50%" r="30%" fill="none" stroke="#D438FF20" strokeWidth="1" />
//           <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#8C45FF20" strokeWidth="1" />
//           <circle cx="50%" cy="50%" r="50%" fill="none" stroke="#D438FF15" strokeWidth="1" />
//           <circle cx="50%" cy="50%" r="60%" fill="none" stroke="#8C45FF15" strokeWidth="1" />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative">
//         {/* Hero Section */}
//         <div className="text-center pt-20 px-4">
//           <div className="inline-flex items-center gap-2 bg-[#190D2E]/80 px-4 py-1.5 rounded-full mb-8 border border-1 border-[#D438FF]/30">
//             <Badge variant="secondary" className="bg-[#D438FF] text-white uppercase rounded-2xl">
//               New
//             </Badge>
//             <span className="text-[#D438FF]">Latest integration just arrived</span>
//           </div>

//           <h1 className="text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight text-white">
//             Boost your <br />
//             <span className="bg-gradient-to-b from-[#FFFFFF]  to-[#7800AB]/60 bg-clip-text text-transparent">
//               {" "}
//               rankings with AI.
//             </span>
//           </h1>

//           <p className="text-purple-200 text-xl mb-8 max-w-2xl mx-auto">
//             Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
//           </p>

//           <Button size="lg" className="bg-[#D438FF] text-white hover:bg-[#8C45FF] transition-colors duration-300">
//             Start for free
//           </Button>
//         </div>

//       </div>
//     </div>
//   )
// }
