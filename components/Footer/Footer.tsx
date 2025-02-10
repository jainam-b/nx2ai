"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className=" relative bg-black text-gray-400 mt-10 px-4 py-8 overflow-hidden">
      <motion.div
        className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-purple-600 via-purple-800 to-transparent rounded-full blur-[200px] opacity-75 pointer-events-none"
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

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start ">
            <Link href="/" className="text-white text-xl font-bold">
              <Image src="/logoNew.png" alt="logo" width={150} height={30} />
            </Link>
            <p className="text-center lg:text-left text-sm text-gray-400">
              Empowering your journey with innovation and excellence.
            </p>
          </div>

          {/* Navigation Links */}
          <div className=" grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-16">
            {/* Product Column */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="hover:text-white transition">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-medium">Follow Us </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#privacy" className="hover:text-white transition">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="hover:text-white transition">
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href="#security"
                    className="hover:text-white transition"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#security"
                    className="hover:text-white transition"
                  >
                    Threads
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm text-gray-600 pt-6 border-t border-gray-800">
          © {new Date().getFullYear()} NX2AI . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
