"use client";
import { About } from "@/components/Aboutus/About";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import Dashboard from "@/components/hero/HeroSection";

import Service from "@/components/Service/Service";
import Testimonial from "@/components/Testimonials/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <Dashboard />
      <About />
      <Service />
      <Testimonial />
      <div className="mt-24">
        <CTA />
      </div>
      <Footer />
    </motion.div>
  );
}
