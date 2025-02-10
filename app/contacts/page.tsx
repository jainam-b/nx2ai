"use client";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactPage/ContactForm";
import { NavBar } from "@/components/Navbar/Navbar";
import ContactDetails from "@/components/ContactPage/ContactDetails";

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <div>
        <NavBar/>
        <ContactForm/>
        <Footer/>
      </div>
    </motion.div>
  );
}
