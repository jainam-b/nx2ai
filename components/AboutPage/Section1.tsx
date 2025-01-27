import Image from "next/image"
import { Target} from "lucide-react"

export default function Section1() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <h1 className="text-5xl md:text-6xl font-medium leading-tight">About our company</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            We collaborate intimately with the globe most avant-garde businesses to enhance their client service
            divisions. Every individual amongst us as patrons, have our unique variant of that one communication with a
            customer help desk.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/avCKzJYajfquM8nuCTscgeaEw.png?scale-down-to=1024"
              alt="Office meeting scene"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/xpx7XAPqal1XW3bSeawgBcWToA.jpg?scale-down-to=2048"
              alt="Hands joining together"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-medium">Helping small businesses</h2>
            <p className="text-gray-300 leading-relaxed">
              Focus on customers first, believing that growing their business is the key to our own. Its a principle
              ingrained in our approach — customers first, revenues second, always leading to a world with more
              founders. On the other end of the line are well-meaning, talented people doing their best with what they
              have a tangled web of tribal knowledge, spreadsheets, and outdated systems.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Our mission</h3>
              </div>
              <p className="text-gray-300">
                At the heart of our mission is breaking down development barriers. We provide seamless workflows, and
                user-friendly interfaces.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6" />
                <h3 className="text-2xl font-medium">Our mission</h3>
              </div>
              <p className="text-gray-300">
                At the heart of our mission is breaking down development barriers. We provide seamless workflows, and
                user-friendly interfaces.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

