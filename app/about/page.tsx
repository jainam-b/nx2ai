"use client";
import { motion } from "framer-motion";
import About from "./About";
import Section1 from "@/components/AboutPage/Section1";
import Metrix from "@/components/AboutPage/Metrix";
import GetReady from "@/components/AboutPage/GetReady";
import Footer from "@/components/Footer/Footer";

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <div>
        <About />
        <Section1/>
        <Metrix/>
        <GetReady/>
        <Footer/>
      </div>
    </motion.div>
  );
}
