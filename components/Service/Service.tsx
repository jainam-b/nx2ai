import { LayoutDashboard, BarChart3, Sparkles, FileText, Target, Bell, Link2, Zap, Users } from "lucide-react"

export default function Service() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "User-friendly dashboard",
      description: "Perform complex SEO audits and optimizations with a single click.",
    },
    {
      icon: BarChart3,
      title: "Visual reports",
      description: "Visual insights into your site's performance.",
    },
    {
      icon: Sparkles,
      title: "Smart Keyword Generator",
      description: "Automatic suggestions and the best keywords to target.",
      isNew: true,
    },
    {
      icon: FileText,
      title: "Content evaluation",
      description: "Simple corrections for immediate improvements.",
    },
    {
      icon: Target,
      title: "SEO goal setting",
      description: "Helps you set and achieve SEO goals with guided assistance.",
    },
    {
      icon: Bell,
      title: "Automated alerts",
      description: "Automatic notifications about your SEO health, including quick fixes.",
    },
    {
      icon: Link2,
      title: "Link Optimization Wizard",
      description: "Guides you through the process of creating and managing links.",
    },
    {
      icon: Zap,
      title: "One-click optimization",
      description: "Perform complex SEO audits and optimizations with a single click.",
    },
    {
      icon: Users,
      title: "Competitor reports",
      description: "Provides insights into competitors' keyword strategies and ranking.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#190D2E] to-[#000000] text-white py-20 px-4 md:px-6 lg:px-8 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-20">
          Elevate your
          <br />
          SEO efforts.
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                <feature.icon className="w-6 h-6" />
                <h2 className="text-xl font-medium">
                  {feature.title}
                  {feature.isNew && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-purple-600 px-2 py-0.5 text-xs font-medium text-white">
                      NEW
                    </span>
                  )}
                </h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

