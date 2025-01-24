"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-16">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
            {/* Logo Section - Left Side */}
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-3">
              <Link href="/" className="text-white text-xl font-bold -mt-10">
                  <Image src="/logo.png" alt="logo" width={150} height={30} />
                </Link>
              </div>
              
            </div>

            {/* Navigation Links - Right Side */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16 mt-8 md:mt-0">
              {/* Product Column */}
              <div className="space-y-4">
                <h3 className="text-white font-medium">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#features"
                      className="hover:text-white transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#integrations"
                      className="hover:text-white transition-colors"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#updates"
                      className="hover:text-white transition-colors"
                    >
                      Updates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#faq"
                      className="hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="hover:text-white transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="space-y-4">
                <h3 className="text-white font-medium">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#about"
                      className="hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#blog"
                      className="hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#careers"
                      className="hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#manifesto"
                      className="hover:text-white transition-colors"
                    >
                      Manifesto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#press"
                      className="hover:text-white transition-colors"
                    >
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className="space-y-4">
                <h3 className="text-white font-medium">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#examples"
                      className="hover:text-white transition-colors"
                    >
                      Examples
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#community"
                      className="hover:text-white transition-colors"
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#guides"
                      className="hover:text-white transition-colors"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#docs"
                      className="hover:text-white transition-colors"
                    >
                      Docs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="space-y-4">
                <h3 className="text-white font-medium">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#privacy"
                      className="hover:text-white transition-colors"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#terms"
                      className="hover:text-white transition-colors"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#security"
                      className="hover:text-white transition-colors"
                    >
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-8 mx-4 md:mt-0 mt-10">
                <Link
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://youtube.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-6 h-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
      </div>
    </footer>
  );
}
