"use client"
import Image from "next/image"
import React from "react"
import { WobbleCard } from "../ui/wobble-card"

export function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full py-10 px-8">
      <WobbleCard containerClassName="col-span-1 min-h-[320px] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden ">
        <Image
          src="/holo_torus.png"
          alt="Holographic torus"
          width={180}
          height={180}
          className="mb-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">SEO goal setting</h2>
          <p className="mt-2 text-base text-neutral-300">Helps you set and achieve SEO goals with guided assistance.</p>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[320px] bg-gradient-to-br from-neutral-900 to-purple-950 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-white">User-friendly dashboard</h2>
          <p className="mt-2 text-base text-neutral-300">
            Perform complex SEO audits and optimizations with a single click.
          </p>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-2 min-h-[320px] bg-gradient-to-br from-purple-950 to-neutral-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Advanced Analytics</h2>
          <p className="mt-2 text-base text-neutral-300">
            Get detailed insights and performance metrics for your SEO campaigns.
          </p>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[320px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
        <Image
          src=""
          alt="Holographic pyramid"
          width={180}
          height={180}
          className="mb-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">Smart Keyword Generator</h2>
          <p className="mt-2 text-base text-neutral-300">Automatic suggestions and the best keywords to target.</p>
        </div>
      </WobbleCard>
    </div>
  )
}

