"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center text-white text-center px-6 overflow-hidden">

      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/backgrounds/space-bg.mp4" type="video/mp4" />
      </video>

      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-6 leading-tight drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
        Dhruv Patel
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl font-medium mb-10 opacity-80">
        Full Stack Engineer | AI & ML Enthusiast
      </h2>

      {/* Button */}
      <Link
        href="/"
        className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        🚀 View Portfolio
      </Link>

      {/* Footer */}
      <p className="absolute bottom-6 text-sm text-gray-300 opacity-70">
        © 2025 Dhruv Patel
      </p>
    </main>
  );
}
