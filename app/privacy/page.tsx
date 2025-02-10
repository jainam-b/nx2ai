"use client"

import Footer from "@/components/Footer/Footer"
import { NavBar } from "@/components/Navbar/Navbar"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function PrivacyPage() {
  return (
    <div>
        <NavBar/>
    <div
      className="relative mt-24 md:mt-10 font-inter min-h-screen starry-bg flex flex-col items-center justify-center p-4 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/star.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="flex justify-center items-center absolute">
        <div className="w-[400px] md:w-[800px] h-[400px] md:h-[700px] rounded-full bg-[#8C45FF]/30 blur-[150px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl text-center mb-8"
      >
        <h1 className="text-6xl font-medium font-inter text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-300 text-lg">We are committed to protecting your privacy and personal information.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-3xl bg-black/30 backdrop-blur-sm rounded-lg p-8 text-white"
      >
        <div className="space-y-6">
          {[
            {
              title: "Information We Collect",
              content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support."
            },
            {
              title: "How We Use Your Information",
              content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users."
            },
            {
              title: "Information Sharing and Disclosure",
              content: "We do not share or sell your personal information to third parties for their direct marketing purposes."
            },
            {
              title: "Data Security",
              content: "We use reasonable security measures designed to protect your information. However, no security system is impenetrable."
            },
            {
              title: "Your Choices",
              content: "You may update, correct, or delete your account information at any time by logging into your online account or by contacting us."
            }
          ].map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p>{section.content}</p>
            </motion.section>
          ))}

          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button 
            onClick={()=>window.location.href=("/contact")}
              className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-base font-medium"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer/>
    </div>
  )
}

