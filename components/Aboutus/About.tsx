"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { motion } from "framer-motion";

export function About() {
  return (
    <div className="bg-black py-24 px-6 md:px-8 lg:px-16">
      <motion.h2
        className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mb-16 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent font-inter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        About Us
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {/* Card 1: AI-Powered Solutions */}
        <WobbleCard containerClassName="col-span-1 group">
          <div className="relative h-[480px] overflow-hidden">
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src="/heroSection/a01.jpeg" 
                alt="AI Brain"
                width={500}
                height={500}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
            </div>
            
            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-end">
              <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-left mb-4 ">
                  AI-Powered Solutions
                </h2>
                <p className="text-base text-neutral-300/90 leading-relaxed">
                  We are a team of passionate AI researchers and engineers dedicated to breaking down language barriers through innovative technology. Our mission is to make global communication seamless and natural.
                </p>
              </div>
            </div>
          </div>
        </WobbleCard>

        {/* Card 2: Real-time Translation */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 group">
          <div className="relative h-[480px] overflow-hidden">
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src="/heroSection/a02.png"
                alt="Real-time Translation"
                width={1000}
                height={600}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
            </div>
            
            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-end">
              <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 ">
                  Real-time Translation
                </h2>
                <p className="text-base text-neutral-300/90 leading-relaxed max-w-xl">
                  Instant translation across multiple languages with natural voice output, enabling seamless communication across borders.
                </p>
              </div>
            </div>
          </div>
        </WobbleCard>

        {/* Card 3: Natural Voice */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 group">
          <div className="relative h-[480px] overflow-hidden">
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src="/heroSection/a3.png"
                alt="Natural Voice"
                width={800}
                height={400}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
            </div>
            
            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-end">
              <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 ">
                  Natural Voice
                </h2>
                <p className="text-base text-neutral-300/90 leading-relaxed max-w-xl">
                  Human-like speech synthesis with emotional intelligence, creating more engaging and natural conversations.
                </p>
              </div>
            </div>
          </div>
        </WobbleCard>

        {/* Card 4: Multi-lingual */}
        <WobbleCard containerClassName="col-span-1 group">
          <div className="relative h-[480px] overflow-hidden">
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src="/heroSection/a02.png"
                alt="Multi-lingual Support"
                width={500}
                height={500}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
            </div>
            
            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-end">
              <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-left mb-4 ">
                  Multi-lingual
                </h2>
                <p className="text-base text-neutral-300/90 leading-relaxed">
                  Support for over 50 languages with regional accents, ensuring authentic and culturally appropriate communication.
                </p>
              </div>
            </div>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}