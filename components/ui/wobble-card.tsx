"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isHovering) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate distance from center (normalized to -1 to 1)
    const x = (e.clientX - rect.left - centerX) / centerX;
    const y = (e.clientY - rect.top - centerY) / centerY;
    
    // Scale the effect (adjust these values to control tilt intensity)
    setMousePosition({ 
      x: x * 4,
      y: y * 4
    });
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      className={cn(
        "w-full relative rounded-3xl overflow-hidden backdrop-blur-sm",
        containerClassName
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={cn(
          "relative h-full border border-white/10 rounded-3xl overflow-hidden",
          "bg-gradient-to-b from-black/50 to-black/30",
          "backdrop-blur-md"
        )}
        style={{
          boxShadow: isHovering
            ? "0 20px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(255, 255, 255, 0.1)"
            : "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05)",
        }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${-mousePosition.x}deg) scale3d(1.02, 1.02, 1.02)`
              : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            transition: isHovering
              ? "transform 0.1s ease-out"
              : "transform 0.3s ease-out",
          }}
          className={cn("h-full relative z-10", className)}
        >
          {children}
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Noise texture */}
        <div
          className="absolute inset-0 w-full h-full opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }}
        />

        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-3xl border border-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export default WobbleCard;