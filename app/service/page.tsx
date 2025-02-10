"use client"
import { NavBar } from "@/components/Navbar/Navbar";
import AIMultiCarousel from "@/components/ServicePage/Service";
import { motion } from "framer-motion";
import VoiceSpeechCategories from "@/components/ServicePage/service2";
import VoiceSpeechMultiCarousel from "@/components/ServicePage/service3";
import Footer from "@/components/Footer/Footer";
import ServiceHero from "@/components/ServicePage/ServiceHero";

export default function page(){
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
      >
        <div>
            <NavBar/>
            <ServiceHero />
            <AIMultiCarousel/>
            <VoiceSpeechMultiCarousel/>
            <VoiceSpeechCategories/>
            <div className="-mt-10">

            <Footer/>
            </div>

        </div>
        </motion.div>
    )
}