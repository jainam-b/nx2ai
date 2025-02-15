import { LayoutDashboard, BarChart3, Sparkles, FileText, Target, Bell, Link2, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Service() {
  const features = [
    {
      "title": "Text-to-Image Comic Generation",
      "description": "Harnessing the power of AI to generate high-quality, visually stunning comics from textual descriptions.",
      "icon": LayoutDashboard
    },
    {
      "title": "Character Generation",
      "description": "AI-powered tools to create unique characters for games, animations, and storytelling.",
      "icon": Users
    },
    {
      "title": "Generative AI for Digital Art and Design",
      "description": "Revolutionizing creativity with AI-powered tools to generate unique and high-quality digital art and designs.",
      "icon": Sparkles
    },
    {
      "title": "AI-Assisted Video Generation",
      "description": "Creating videos from scripts or text descriptions, enhancing efficiency and creativity.",
      "icon": FileText
    },
    {
      "title": "Text-to-Speech (TTS)",
      "description": "Transform written text into lifelike audio with our advanced TTS solutions.",
      "icon":Bell
    },
    {
      "title": "Speech-to-Text (STT)",
      "description": "High-accuracy transcription of spoken language into text for documentation and analysis.",
      "icon":Target
    },
    {
      "title": "Speech-to-Speech Translation",
      "description": "Seamless translation of spoken language into another while retaining the speaker's voice and tone.",
      "icon": Link2
    },
    {
      "title": "Voice Cloning",
      "description": "Replicate voices with precision to create authentic voiceovers and dubbing solutions.",
      "icon": Zap
    },
    {
      "title": "Voice Changer",
      "description": "Real-time voice modulation technology to transform voices for gaming, content creation, and anonymity purposes.",
      "icon": BarChart3
    },
    {
      "title": "Speech Translation",
      "description": "Real-time and offline translation solutions for seamless communication across languages.",
      "icon": Link2
    },
    {
      "title": "Large Language Model (LLM) Chatbots",
      "description": "Conversational AI chatbots powered by advanced LLMs for intuitive and human-like interactions.",
      "icon": Users
    },
    {
      "title": "LLM-Based Output Generation",
      "description": "Advanced AI capabilities for generating content, summarizing information, and performing data analysis.",
      "icon": FileText
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#190D2E] to-[#000000] text-white py-20 px-4 md:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-medium mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Elevate your
          <br />
          SEO efforts.
        </motion.h1>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="space-y-3"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 hover:animate-in">
                <feature.icon className="w-6 h-6" />
                <h2 className="text-xl font-medium">
                  {feature.title}
                </h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}