"use client";
import { motion } from "framer-motion";
import About from "./About";

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
      </div>
    </motion.div>
  );
}
