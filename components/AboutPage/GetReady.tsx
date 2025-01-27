import { ArrowRight } from "lucide-react";

export default function GetReady() {
  return (
    <div className="w-full p-6 md:p-8">
      <div className="relative w-full overflow-hidden rounded-[40px] bg-gradient-to-b from-black via-[#1a103d] to-[#6931c7]">
        {/* Geometric Pattern Overlay */}
        <div
          className="absolute inset-0 border-dashed"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            strokeDasharray: "10",
          }}
        />

        <div className="relative flex flex-col items-center justify-center px-4 py-20 text-center">
          <h2 className="mb-4 text-4xl md:text-7xl font-medium text-white">
            Ready to get started?
          </h2>
          <p className="mb-8 max-w-2xl text-xl text-gray-300">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <button className="relative inline-flex h-12  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#8C45FF_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full text-xl bg-slate-950 px-6 py-2 font-medium text-white backdrop-blur-3xl">
              Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
