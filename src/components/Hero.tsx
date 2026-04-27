'use client';

import { IMAGES } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: Radial purple haze */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-haze/8 via-transparent to-transparent"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(107, 33, 168, 0.08) 0%, rgba(107, 33, 168, 0.03) 40%, transparent 70%)',
          }}
        />
        {/* Secondary lower haze */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 30% at 50% 80%, rgba(107, 33, 168, 0.05) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Vertical hairlines */}
      <div className="absolute inset-0 hairlines" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <div className="animate-fade-up opacity-0 mb-12">
          <img
            src={IMAGES.logo}
            alt="Icey Recording"
            className="w-32 h-32 md:w-44 md:h-44 object-contain opacity-90 glow-purple"
          />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up opacity-0 animate-delay-200 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/95 max-w-3xl leading-tight">
          A culture for the outsiders.
        </h1>

        {/* Subtext */}
        <p className="animate-fade-up opacity-0 animate-delay-400 mt-6 text-sm md:text-base font-mono uppercase tracking-[0.25em] text-white/30">
          Icey Recording · Est. 2009 · Los Angeles
        </p>

        {/* Scroll indicator */}
        <div className="animate-fade-up opacity-0 animate-delay-600 mt-20">
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
