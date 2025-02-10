"use client"
import { Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const ContactDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="relative mt-24 md:mt-10 font-inter min-h-screen flex flex-col items-center justify-center p-6 md:p-8 bg-cover bg-center w-full"
    style={{ backgroundImage: "url('/star.png')" }}
    >
      <div
        className="absolute inset-0 bg-black/50 z-0"
      />
      <div className="flex justify-center items-center absolute">
        <div className="w-[400px] md:w-[800px] h-[400px] md:h-[700px] rounded-full bg-[#8C45FF]/30 blur-[150px] " />
      </div>
      

      <motion.div
        className="flex justify-center items-center absolute"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="w-[400px] md:w-[800px] h-[400px] md:h-[700px] rounded-full bg-[#8C45FF]/30 blur-[150px]" />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Card className="bg-black/30 backdrop-blur-sm border-white/10 hover:bg-black/40 transition-colors p-8 shadow-lg">
          <CardHeader className="text-center pb-8">
            <motion.div variants={itemVariants}>
              <CardTitle className="text-4xl font-bold text-white tracking-tight">Get in Touch</CardTitle>
              <p className="text-gray-300 mt-2 text-lg">We&apos;d love to hear from you</p>
            </motion.div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Information */}
              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Call Us", content: "+1 (555) 123-4567" },
                  { icon: Mail, title: "Email Us", content: "info@company.com" },
                  { icon: Globe, title: "Visit Us", content: "www.company.com" },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ContactItem icon={item.icon} title={item.title} content={item.content} />
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-center space-y-6 md:border-l md:border-white/10 md:pl-10"
              >
                <p className="text-white font-semibold text-lg text-center mb-4">Connect With Us</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Facebook, name: "Facebook" },
                    { icon: Twitter, name: "Twitter" },
                    { icon: Linkedin, name: "LinkedIn" },
                    { icon: Instagram, name: "Instagram" },
                  ].map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <SocialLink icon={item.icon} name={item.name} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
}

const ContactItem = ({ icon: Icon, title, content }: ContactItemProps) => (
  <div className="flex items-center space-x-5 group">
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors"
    >
      <Icon className="w-6 h-6 text-white" />
    </motion.div>
    <div>
      <p className="text-white font-semibold text-lg mb-1">{title}</p>
      <p className="text-gray-200">{content}</p>
    </div>
  </div>
)

interface SocialLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

const SocialLink = ({ icon: Icon, name }: SocialLinkProps) => (
  <motion.a href="#" className="flex items-center space-x-3 text-gray-300 group" whileHover={{ scale: 1.05 }}>
    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <span>{name}</span>
  </motion.a>
)

export default ContactDetails

