"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-10 px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start ">
            <Link href="/" className="text-white text-xl font-bold">
              <Image src="/logo.png" alt="logo" width={150} height={30} />
            </Link>
            <p className="text-center lg:text-left text-sm text-gray-400">
              Empowering your journey with innovation and excellence.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-16">
            {/* Product Column */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="hover:text-white transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#integrations"
                    className="hover:text-white transition"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#updates" className="hover:text-white transition">
                    Updates
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-white transition"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#careers"
                    className="hover:text-white transition"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#manifesto"
                    className="hover:text-white transition"
                  >
                    Manifesto
                  </Link>
                </li>
                <li>
                  <Link href="#press" className="hover:text-white transition">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#examples"
                    className="hover:text-white transition"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href="#community"
                    className="hover:text-white transition"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#guides" className="hover:text-white transition">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#docs" className="hover:text-white transition">
                    Docs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#privacy"
                    className="hover:text-white transition"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="hover:text-white transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#security"
                    className="hover:text-white transition"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8">
          <Link
            href="https://twitter.com"
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://instagram.com"
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://youtube.com"
            className="text-gray-400 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="w-6 h-6" />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm text-gray-600 pt-6 border-t border-gray-800">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
