"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (scrollYProgress.get() > 0.05) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-0 inset-x-0 w-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)] z-[5000] px-4 sm:px-6 lg:px-8 py-4 ",
          className
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold">
              LOGO
            </Link>
          </div>

          {/* Navigation Items - Center */}
          <div className="border border-1 border-[#FFFFFF]/15 px-12 py-3 rounded-full ">
            <div className="hidden sm:flex items-center justify-center space-x-8">
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="text-gray-300 hover:text-white text-sm"
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block">{navItem.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Right */}
          <div className="flex items-center space-x-4">
            <button
              className="relative group bg-[#8C45FF]/50 text-white px-4 py-2 rounded-full text-sm font-medium 
      transition-all duration-300
      hover:bg-[#8C45FF]/70
      hover:shadow-[0_0_20px_2px_rgba(140,69,255,0.3)]
      focus:outline-none focus:ring-2 focus:ring-[#8C45FF]/50"
            >
              <div className="relative">
                Get Started
                {/* Bottom gradient line with glow */}
              </div>

              {/* Background glow effect */}
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#9856FF]  
        opacity-0 group-hover:opacity-30 blur-xl
        transition-all duration-300 -z-10"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex justify-center mt-4 space-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`mobile-link=${idx}`}
              href={navItem.link}
              className="text-gray-300 hover:text-white text-sm"
            >
              {navItem.icon || navItem.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
