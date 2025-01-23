"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log(isScrolled);
  
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setIsScrolled(scrollYProgress.get() > 0.05);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-0 inset-x-0 w-full bg-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)] z-[5000] px-4 ",
          className
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white text-xl font-bold">
            <Image 
            src="/logo.png"
            alt="logo"
            width={100}
            height={10}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="border border-1 border-[#FFFFFF]/15 px-12 py-3 rounded-full">
              <div className="flex items-center justify-center space-x-8">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={idx}
                    href={navItem.link}
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    {navItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden md:block relative group bg-[#8C45FF]/50 text-white px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-300 hover:bg-[#8C45FF]/70
              hover:shadow-[0_0_20px_2px_rgba(140,69,255,0.3)]"
            >
              Get Started
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-0 right-0 top-full bg-black mt-4"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={idx}
                    href={navItem.link}
                    className="block py-2 text-gray-300 hover:text-white hover:bg-[#2C2C2C] rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      {navItem.icon && <span>{navItem.icon}</span>}
                      <span>{navItem.name}</span>
                    </div>
                  </Link>
                ))}
                <button 
                  className="w-full bg-[#8C45FF]/50 text-white px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-300 hover:bg-[#8C45FF]/70 mt-2"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};