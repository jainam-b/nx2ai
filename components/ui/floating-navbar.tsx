"use client"

import type React from "react"
import { useState, useEffect } from "react"
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
    icon?: React.ReactNode
  }[]
  className?: string
}) => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed top-0 inset-x-0 w-full z-[5000] transition-all duration-300",
        isScrolled || mobileMenuOpen ? "bg-black/60 backdrop-blur-lg shadow-lg" : "bg-transparent",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="text-white mt-2 text-xl font-bold">
            <Image src="/logoNew.png" alt="logo" width={120} height={10} />
          </Link>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((navItem, idx) => (
              <Link
                key={idx}
                href={navItem.link}
                className={cn(
                  "text-sm font-medium px-3 py-2 rounded-full transition-colors duration-200 flex items-center",
                  isScrolled
                    ? "text-gray-200 hover:text-white hover:bg-white/10"
                    : "text-gray-200 hover:text-white hover:bg-black/20",
                )}
              >
                {navItem.icon && <span className="mr-2 flex-shrink-0">{navItem.icon}</span>}
                <span>{navItem.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/contact")}
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#8C45FF_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Contact Us
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                isScrolled ? "text-white hover:bg-white/10" : "text-gray-200 hover:bg-black/20",
              )}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.link}
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navItem.icon && <span className="mr-3 flex-shrink-0">{navItem.icon}</span>}
                  <span className="text-base font-medium">{navItem.name}</span>
                </Link>
              ))}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/contact")}
                  className="w-full bg-gradient-to-r from-[#8C45FF] to-[#B15DFF] text-white px-4 py-3 rounded-full text-base font-medium
                    transition-all duration-300 hover:shadow-[0_0_20px_2px_rgba(140,69,255,0.3)]"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default FloatingNav

