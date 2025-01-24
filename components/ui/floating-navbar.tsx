"use client"
import React, { type JSX, useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string;
}) => {
  const { scrollYProgress } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setIsScrolled(scrollYProgress.get() > 0.05)
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed top-0 inset-x-0 w-full z-[5000] px-4",
          isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent",
          className,
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-white text-xl font-bold">
            <Image src="/logo.png" alt="logo" width={100} height={10} />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="border border-[#FFFFFF]/15 px-1 py-1 rounded-full bg-white/5">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.link}
                  className="text-gray-300 hover:text-white text-sm px-4 py-2 rounded-full transition-colors duration-200 inline-flex items-center"
                >
                  {navItem.icon && <span className="mr-2">{navItem.icon}</span>}
                  {navItem.name}
                </Link>
              ))}
            </div>
          </nav>
          {/* CTA and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={()=>window.location.href=("/contact")}
              className="hidden md:block relative group bg-gradient-to-r from-[#8C45FF] to-[#B15DFF] text-white px-6 py-2 rounded-full text-sm font-medium
              transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(140,69,255,0.3)]
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[#B15DFF] before:to-[#8C45FF]
              before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
            </button>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 fill-white" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-sm shadow-lg"
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="px-4 py-16 space-y-4">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={idx}
                    href={navItem.link}
                    className="block py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2 px-3">
                      {navItem.icon && <span>{navItem.icon}</span>}
                      <span>{navItem.name}</span>
                    </div>
                  </Link>
                ))}
                <button
                  className="w-full bg-gradient-to-r from-[#8C45FF] to-[#B15DFF] text-white px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(140,69,255,0.3)] mt-4"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}