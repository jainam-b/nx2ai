import Image from "next/image";
import { Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Section1() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <motion.div
        className="max-w-7xl mx-auto space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Adjust `amount` to control when the animation triggers
        variants={staggerContainer}
      >
        {/* Header Section */}
        <motion.div className="grid gap-8 md:grid-cols-2" variants={staggerContainer}>
          <motion.h1 className="text-5xl md:text-6xl font-medium leading-tight" variants={fadeInUp}>
            About our company
          </motion.h1>
          <motion.p className="text-lg text-gray-300 leading-relaxed" variants={fadeInUp}>
            We collaborate intimately with the globe&apos;s most avant-garde businesses to enhance their client service
            divisions. Every individual amongst us as patrons, have our unique variant of that one communication with a
            customer help desk.
          </motion.p>
        </motion.div>

        {/* Image Grid */}
        <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
          <motion.div className="relative h-[400px] rounded-3xl overflow-hidden" variants={fadeIn}>
            <Image
              src="https://framerusercontent.com/images/avCKzJYajfquM8nuCTscgeaEw.png?scale-down-to=1024"
              alt="Office meeting scene"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div className="relative h-[400px] rounded-3xl overflow-hidden" variants={fadeIn}>
            <Image
              src="https://framerusercontent.com/images/xpx7XAPqal1XW3bSeawgBcWToA.jpg?scale-down-to=2048"
              alt="Hands joining together"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <motion.div className="grid md:grid-cols-2 gap-16" variants={staggerContainer}>
          {/* Left Column */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h2 className="text-4xl font-medium">Helping small businesses</h2>
            <p className="text-gray-300 leading-relaxed">
              Focus on customers first, believing that growing their business is the key to our own. Its a principle
              ingrained in our approach — customers first, revenues second, always leading to a world with more
              founders. On the other end of the line are well-meaning, talented people doing their best with what they
              have a tangled web of tribal knowledge, spreadsheets, and outdated systems.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div className="space-y-12" variants={staggerContainer}>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Our mission</h3>
              </div>
              <p className="text-gray-300">
                At the heart of our mission is breaking down development barriers. We provide seamless workflows, and
                user-friendly interfaces.
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Our mission</h3>
              </div>
              <p className="text-gray-300">
                At the heart of our mission is breaking down development barriers. We provide seamless workflows, and
                user-friendly interfaces.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}