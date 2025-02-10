import Image from "next/image";
import { Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Section1() {
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
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="grid gap-8 md:grid-cols-2" variants={staggerContainer}>
          <motion.h1 className="text-5xl md:text-6xl font-medium leading-tight" variants={fadeInUp}>
          Why Choose NX2AI?
          </motion.h1>
          <motion.p className="text-lg text-gray-300 leading-relaxed" variants={fadeInUp}>
            At NX2AI, we make AI smarter, more accessible, and built to grow with you. Our solutions go beyond data processing—they think, learn, and evolve to keep your business ahead of the curve.
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
          <motion.div className="relative h-[400px] rounded-3xl overflow-hidden" variants={fadeIn}>
            <Image
              src="https://framerusercontent.com/images/avCKzJYajfquM8nuCTscgeaEw.png?scale-down-to=1024"
              alt="AI Technology visualization"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div className="relative h-[400px] rounded-3xl overflow-hidden" variants={fadeIn}>
            <Image
              src="https://framerusercontent.com/images/xpx7XAPqal1XW3bSeawgBcWToA.jpg?scale-down-to=2048"
              alt="Business implementation"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-16" variants={staggerContainer}>
          <motion.div className="space-y-6" variants={fadeInUp}>
            <h2 className="text-4xl font-medium">Transform Your Business with AI</h2>
            <p className="text-gray-300 leading-relaxed">
              With so many AI solutions available, NX2AI stands out by focusing on real-world impact. We transform complex AI technology into accessible, practical tools that drive meaningful results for your business—from intelligent automation to predictive analytics.
            </p>
          </motion.div>

          <motion.div className="space-y-12" variants={staggerContainer}>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6" />
                <h3 className="text-2xl font-medium">AI That Thinks Ahead</h3>
              </div>
              <p className="text-gray-300">
                Our next-gen AI solutions learn, adapt, and evolve with your business, ensuring you stay ahead of industry trends and competition.
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Seamless Integration</h3>
              </div>
              <p className="text-gray-300">
                Skip the complicated setup. Our solutions integrate smoothly with your existing systems, delivering immediate value and measurable results.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}